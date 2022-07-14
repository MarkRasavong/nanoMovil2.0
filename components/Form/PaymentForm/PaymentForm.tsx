import { Button } from '@mui/material'
import React from 'react'
import Review from '../Review/Review'
import { PayButtonDiv } from './PaymentForm.styled'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { backStep, nextStep } from '../../../features/checkout'
import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js'
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY ?? '');

const PaymentForm = () => {
  const dispatch = useAppDispatch();
  const checkoutToken = useAppSelector((state) => state.checkout.checkoutToken);
  const shippingData = useAppSelector((state) => state.checkout.user_submission)
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, elements: StripeElements | null, stripe: Stripe | null) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const cardElement = elements.getElement(CardElement)!;
    const result = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (result.error) {
      console.log('[error]', result.error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: `${shippingData.firstName} ${shippingData.lastName}`, street: shippingData.address, town_city: shippingData.city, 
        county_state: shippingData.subdivision, postal_zip_code: shippingData.zip, country: shippingData.country },
        fulfillment: { shipping_method: shippingData.shipOption },
        billing: {
            name: `${shippingData.firstName} ${shippingData.lastName}`, street: shippingData.address, town_city: shippingData.city,
            county_state: shippingData.subdivision, postal_zip_code: shippingData.zip, country: shippingData.country },
        payment: {
          gateway: 'stripe',
          card: {
            token: result.paymentMethod.id,
          },
        },
      };

      console.log(orderData)

      //captureCheckoutDispatch

      dispatch(nextStep());
    }
  };

  return (
    <>
    <Review />
    <hr style={{ borderTop: '1px solid #aaa', margin: '1em'}}/>
    <h3>Méthodo de pago</h3>
      {/* STRIPE INFORMATION */}
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br/>
            <PayButtonDiv>
              <Button onClick={() => dispatch(backStep())}>
                Volver
              </Button>
              <Button type='submit'>Paga {checkoutToken.live.subtotal.formatted_with_symbol}</Button>
            </PayButtonDiv>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}

export default PaymentForm
