import React from 'react';
import Image from 'next/image';
import { CardContent, CardImgContainer, CardItem, CardTitle, QuantityDiv } from './Card.styled';
import Link from 'next/link';
import { Button } from '../Button/Button.styled';
import { useAppDispatch } from '../../store/hooks';
import { deleteItemFromCart, updateItemQty } from '../../features/cart';


const CartItem = ({cartItem}) => {
  const dispatch = useAppDispatch();
  const {product_name, quantity, image, line_total, id} = cartItem

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
        src={image?.url || '/taronja.gif'} 
        alt={image?.description || 'producto sin descripción'} 
        width='100%' height='100%' 
        layout='responsive' objectFit='cover' 
        style={{borderRadius: '10px'}}
        />
      </CardImgContainer>
      <CardContent>
        <CardTitle style={{fontSize: '1em', marginBottom: '0em'}}>
          <h3>{product_name}</h3>
          <h3>{line_total.formatted_with_symbol}</h3>
        </CardTitle>
      </CardContent>
      <div className='cardBtnDivCardItem'>
        <Link passHref href={''} >
          <Button onClick={(e) => handleDecrementClick(id, quantity, e)}>
            -
          </Button>
        </Link>
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