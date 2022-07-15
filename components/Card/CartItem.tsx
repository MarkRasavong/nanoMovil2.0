import React from 'react';
import Image from 'next/image';
import { CardContent, CardImgContainer, CardItem, CardTitle, QuantityDiv } from './Card.styled';
import { Button } from '../Button/Button.styled';
import { useAppDispatch } from '../../store/hooks';
import { deleteItemFromCart, updateItemQty } from '../../features/cart';

interface CartItemProps {
  image?: string;
  quantity: number;
  id: string;
  productName: string;
  price: string;
}

const CartItem = ({image, quantity, id, productName, price }:CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleIncrementClick = (productId: string, quantity: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    quantity = quantity + 1;
    dispatch(updateItemQty({productId, quantity}));
  };

  const handleDecrementClick = (productId: string, quantity: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    quantity = quantity - 1;
    dispatch(updateItemQty({productId, quantity}));
  };

  return (
    <CardItem>
      <CardImgContainer>
        <Image 
        src={image || '/taronja.gif'} 
        alt={image || 'producto sin descripción'} 
        width='100%' height='100%' 
        layout='responsive' objectFit='cover' 
        style={{borderRadius: '10px'}}
        />
      </CardImgContainer>
      <CardContent>
        <CardTitle style={{fontSize: '1em', marginBottom: '0em'}}>
          <h3>{productName}</h3>
          <h3>{price}</h3>
        </CardTitle>
      </CardContent>
      <div className='cardBtnDivCardItem'>
          <Button onClick={(e) => handleDecrementClick(id, quantity, e)}>
            -
          </Button>
        <QuantityDiv>
          {quantity}
        </QuantityDiv>
          <Button onClick={(e) => handleIncrementClick(id, quantity, e)}>
            +
          </Button>
          <Button onClick={() => dispatch(deleteItemFromCart(id))}>
            Eliminar
          </Button>
      </div>
    </CardItem>
  )
}

export default CartItem