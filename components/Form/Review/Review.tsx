import React from 'react';
import { ShopListItem, ShoppingListContainer } from './Review.styled';

const Review = () => {

  return (
    <>
    <h3>Detalles del Pedido</h3>
    <div>
      <ShoppingListContainer> {/* map from checkout Token line_items */}
        <ShopListItem>
        <span>Product Name iiaojfoij oiadjfoi adifjoiadjf huidafhiufhauidshf audshfuahsduihfiasoudh</span>
        <span className="subtitle">{`Quanitity: 1`}</span>
        </ShopListItem> 
        <div>
          <p>€10000.00</p>
        </div>
      </ShoppingListContainer>
      <ShoppingListContainer style={{ padding: '10px 0'}} >
          <span className="importeTotal">Importe Total</span>
          <p className="ilPrecio">10000000€</p>
      </ShoppingListContainer>
    </div>
    </>
  )
}

export default Review