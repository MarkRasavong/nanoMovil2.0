import { Step, StepLabel, Stepper } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import AddressForm from '../components/Form/AddressForm/AddressForm';
import { CheckoutDiv } from '../components/Form/AddressForm/AddressForm.styled';
import PaymentForm from '../components/Form/PaymentForm/PaymentForm';
import { Section } from '../components/Sections/Sections.styled';
import { retrieveShipCountry, retrieveToken } from '../features/checkout';
import { commerce } from '../lib/commerce';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Checkout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const cart = useAppSelector((state) => state.cart.data)
  const pasitos = ['Dirección de envío', 'Método de pago'];

  useEffect(() => {
    if(cart?.id) {
        const generateToken = async () =>  {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                const { countries } = await commerce.services.localeListShippingCountries(token.id);

                console.log(countries)

                dispatch(retrieveToken(token))
                dispatch(retrieveShipCountry(countries))
            } catch {
                if (activeStep !== pasitos.length) router.push('/');
            }
        };
        generateToken();
    }
}, [cart, router]);

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
        <AddressForm />
      </CheckoutDiv>
    </Section>
  )
}

export default Checkout;