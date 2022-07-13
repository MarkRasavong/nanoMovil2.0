import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useTheme } from 'styled-components';
import { Button } from '../components/Button/Button.styled'
import CartItem from '../components/Card/CartItem'
import { CestaButtonFtrDiv, CestaDetailFooter, Section } from '../components/Sections/Sections.styled'
import { emptyCart, fetchCart } from '../features/cart';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { NanoTheme } from '../styles/theme';

const Cesta = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.data.line_items);
  const theme = useTheme() as NanoTheme;

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch])

  const link = ({
    textDecoration: 'underline',
    cursor: 'pointer',
  }); 

  const handleEliminateAllClick = () => {
    dispatch(emptyCart());
    router.push('/productos');
  };

  return (
    <Section>
      <h1 style={{ fontSize: '4em', color: theme.colors.nanoWhite, marginTop: '1em'}}>Cesta</h1>
      {
      
      cartItems?.length !== 0 
      ? 
      <React.Fragment>
        <div>
          {cartItems && cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)}
        </div>
        <CestaDetailFooter>
          <h4 className='subtotal'>
          Subtotal: {/*  cart.subtotal.formatted_with_symbol */}
          </h4>
          <CestaButtonFtrDiv>
              <Button className='emptyButton' onClick={handleEliminateAllClick}>
                Eliminar todos
              </Button>
            <Link passHref href='/checkout'>
              <Button className='checkoutButton'>
                Tramitar pedido
              </Button>
            </Link>
            
          </CestaButtonFtrDiv>
        </CestaDetailFooter>
      </React.Fragment>
      :
        <div style={{ textAlign: 'center' }}>
          <h1 style={{color: theme.colors.nanoWhite}}>
            Oye Nan@, No tiene artículos en tu cesta de compras.<br/>
            <Link href="/productos" passHref >
              <span style={link}>¡vamos a comprar!</span>
            </Link>
          </h1>
        </div>
        }
    </Section>
  )
}

export default Cesta