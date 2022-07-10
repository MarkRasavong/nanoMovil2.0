import React from 'react';
import Image from 'next/image';
import { CardContent, CardImgContainer, CardItem, CardTitle, QuantityDiv } from './Card.styled';
import Link from 'next/link';
import { Button } from '../Button/Button.styled';

const CartItem = () => {
  return (
    <CardItem>
      <CardImgContainer>
        <Image 
        src='/taronja.gif' alt='naranja bailando' 
        width='100%' height='100%' 
        layout='responsive' objectFit='cover' 
        style={{borderRadius: '10px'}}
        />
      </CardImgContainer>
      <CardContent>
        <CardTitle style={{fontSize: '1em', marginBottom: '0em'}}>
          <h3>Samsung Galaxy A03s 3/32GB Negro Libre</h3>
          <h3>precio</h3>
        </CardTitle>
      </CardContent>
      <div className='cardBtnDivCardItem'>
        <Link passHref href={''} >
          <Button>-</Button>
        </Link>
        <QuantityDiv>
          1000
        </QuantityDiv>
        <Link passHref href={''} >
          <Button>+</Button>
        </Link>
        <Link passHref href={''} >
          <Button>Eliminar</Button>
        </Link>
      </div>
    </CardItem>
  )
}

export default CartItem