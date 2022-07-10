import Link from 'next/link';
import React from 'react'
import { useTheme } from 'styled-components';
import { Button } from '../components/Button/Button.styled'
import CartItem from '../components/Card/CartItem'
import { CestaButtonFtrDiv, CestaDetailFooter, Section } from '../components/Sections/Sections.styled'
import { NanoTheme } from '../styles/theme';


const renderCartItems = () => (
  <React.Fragment>
    <div>
      <CartItem />
    </div>
    <CestaDetailFooter>
      <h4 className='subtotal'>
      Subtotal: {/*  cart.subtotal.formatted_with_symbol */}
      </h4>
      <CestaButtonFtrDiv>
        <Button className='emptyButton'>
            Eliminar todos
        </Button>
        <Button className='checkoutButton'>
            Tramitar pedido
        </Button>
      </CestaButtonFtrDiv>
    </CestaDetailFooter>
  </React.Fragment>
);

const Cesta = () => {
  const theme = useTheme() as NanoTheme;

  const link = ({
    textDecoration: 'underline',
    cursor: 'pointer',
  });

  const emptyCartStyle = ({
    color: theme.colors.nanoWhite,
    textAlign: 'center',
  })

  return (
    <Section>
      <h1 style={{ fontSize: '4em', color: theme.colors.nanoWhite, marginTop: '1em'}}>Cesta</h1>
      {renderCartItems()}
      {
        <h1 style={emptyCartStyle}>
          Oye Nan@, No tiene artículos en tu cesta de compras. <br/>
          <Link href="/productos" passHref >
            <span style={link}>¡vamos a comprar!</span>
          </Link>
        </h1>
      }
    </Section>
  )
}

export default Cesta