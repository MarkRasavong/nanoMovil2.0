import { Step, StepLabel, Stepper } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Button } from '../components/Button/Button.styled';
import AddressForm from '../components/Form/AddressForm/AddressForm';
import { CheckoutDiv } from '../components/Form/AddressForm/AddressForm.styled';
import PaymentForm from '../components/Form/PaymentForm/PaymentForm';
import { SpinnerDiv } from '../components/Form/PaymentForm/PaymentForm.styled';
import { Section } from '../components/Sections/Sections.styled';
import { resetCheckoutSlice, retrieveToken, setError} from '../features/checkout';
import { commerce } from '../lib/commerce';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Checkout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {activeStep, orderError: err, order} = useAppSelector((state) => state.checkout);
  const cart = useAppSelector((state) => state.cart.data);
  const pasitos = ['Dirección de envío', 'Método de pago'];

  useEffect(() => {
    if(cart?.id) {
        const generateToken = async () =>  {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                dispatch(retrieveToken(token))
            } catch {
                if (activeStep !== pasitos.length) router.replace('/');
            }
        };
        generateToken();
      }
  }, [cart, router]);

  const handleHomeClick = () => {
    router.push('/');
    setTimeout(() => {
      dispatch(resetCheckoutSlice());
    }, 3000);
  }

  const handleErrorTimer = () => {
    dispatch(setError(true));
    setTimeout(() => {
      dispatch(setError(false));
    }, 5000);
  }

let Confirmation = () =>
    order.customer ? (
      <React.Fragment>
        <div style={{ textAlign: 'center'}}>
          <h2>
            Gràcies, {order.customer.firstname}!
          </h2>
          <hr />
          <h3>
            Order ref: {order.customer_reference}
          </h3>
      <Image src="/taronja.gif" alt='dancing orange' width={400} height={400}/>
        </div>
        <br />
        <Button onClick={handleHomeClick}>
          Volver
        </Button>
      </React.Fragment>
    ) : (
      <SpinnerDiv>
        <h2>Cargando su pedido...</h2>
        <Image src="/taronja.gif" alt='dancing orange' width={400} height={400}/>
      </SpinnerDiv>
    );

  if (err) {
    // eslint-disable-next-line react/display-name
    Confirmation = () => {
      handleErrorTimer()
    return (
            <React.Fragment>
              <h5>
                Error: Los datos no son válidos.
              </h5>
              <br />
              <Button onClick={handleHomeClick}>
                Volver
              </Button>
            </React.Fragment>
          )};
  }

  const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />

  return (
    <Section>
      <CheckoutDiv>
        <h1>Tramitar Pedido</h1>
        {/* Stepper Goes here */}
        <Stepper activeStep={activeStep} className="stepr">
          {
            pasitos.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))
          }
        </Stepper>
        {
        activeStep === pasitos.length ? (
            <Confirmation />
          ) : (
            cart.id && <Form />
          )
        }
      </CheckoutDiv>
    </Section>
  )
}

export default Checkout;