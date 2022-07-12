import React from 'react';
import { ShopListItem, ShoppingListContainer } from './Review.styled';

const Review = () => {

  return (
    <>
    <h3>Detalles del Pedido</h3>
    <div>
      <ShoppingListContainer> {/* map from checkout Token line_items */}
        <ShopListItem>
        <span>Product Name</span>
        <span className="subtitle">{`Quanitity: 1`}</span>
        </ShopListItem> 
        <p>pline_total.formatted_with_symbol</p>
      </ShoppingListContainer>
      <ShoppingListContainer style={{ padding: '10px 0'}} >
          <span className="importeTotal">Importe Total</span>
          <p className="ilPrecio">1€</p>
      </ShoppingListContainer>
    </div>
    </>
  )
}

export default Review