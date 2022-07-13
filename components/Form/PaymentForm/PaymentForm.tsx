import { Button } from '@mui/material'
import React from 'react'
import Review from '../Review/Review'
import { PayButtonDiv } from './PaymentForm.styled'
import { useAppDispatch } from '../../../store/hooks'
import { backStep, nextStep } from '../../../features/checkout'

const PaymentForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(nextStep());
  }

  return (
    <>
    <Review />
    <hr style={{ borderTop: '1px solid #aaa', margin: '1em'}}/>
    <h3>Méthodo de pago</h3>
    <form onSubmit={(e) => handleSubmit(e)}>
      {/* STRIPE INFORMATION */}
      <br /> <br/>
      <PayButtonDiv>
        <Button onClick={() => dispatch(backStep())}>
          Volver
        </Button>
        <Button type='submit'>Paga €uroillos</Button>
      </PayButtonDiv>
    </form>
    </>
  )
}

export default PaymentForm