import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { IlTotaleScatola, ShopListItem, ShoppingListContainer } from './Review.styled';

const Review = () => {
  const {checkoutToken} = useAppSelector(state => state.checkout)
  return (
    <>
    <h3>Detalles del Pedido</h3>
    <div>
      <ShoppingListContainer> {/* map from checkout Token line_items */}
      {checkoutToken.live.line_items.map((product) => (
        <>
          <ShopListItem key={product.name}>
            <div className='productSpan'>
              <span>{product.name}</span>
              <span className="subtitle">Quantity: {product.quantity}</span>
            </div>
            <div>
              <p>{product.line_total.formatted_with_symbol}</p>
            </div>
          </ShopListItem>
        </> 
      ))}
      </ShoppingListContainer>
      <IlTotaleScatola>
          <span className="importeTotale">Importe Total</span>
          <p className="ilPrecio">{checkoutToken.live.subtotal.formatted_with_symbol}</p>
      </IlTotaleScatola>
    </div>
    </>
  )
}

export default Review