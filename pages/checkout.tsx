import { Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react'
import AddressForm from '../components/Form/AddressForm/AddressForm';
import { CheckoutDiv } from '../components/Form/AddressForm/AddressForm.styled';
import { Section } from '../components/Sections/Sections.styled';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const pasitos = ['Dirección de envío', 'Método de pago'];

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