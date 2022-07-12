import { Button } from '@mui/material'
import React from 'react'
import Review from '../Review/Review'
import { PayButtonDiv } from './PaymentForm.styled'

const PaymentForm = () => {
  return (
    <>
    <Review />
    <hr style={{ borderTop: '1px solid #aaa', margin: '1em'}}/>
    <h3>Méthodo de pago</h3>
    <form>
      {/* STRIPE INFORMATION */}
      <br /> <br/>
      <PayButtonDiv>
        <Button>Volver</Button>
        <Button>Paga €uroillos</Button>
      </PayButtonDiv>
    </form>
    </>
  )
}

export default PaymentForm