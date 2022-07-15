import styled from "styled-components";

export const ShoppingListContainer = styled.div`
margin-top:2em;
display:flex;
flex-direction: column;

p {
  font-family: ${({theme}) => theme.fonts[0]};
};

span {
  margin-left: 1em;
  font-family: ${({theme}) => theme.fonts[2]};
}

.subtitle{
  margin-top: 2px;
  color: #aaa;
}
`;

export const ShopListItem = styled.div`
display: flex;
justify-content: space-between;
overflow: hidden;

.productSpan{
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
}
`;

export const IlTotaleScatola = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;

  p {
    font-family: ${({theme}) => theme.fonts[0]};
  };

  span {
    margin-left: 1em;
    font-family: ${({theme}) => theme.fonts[2]};
  };

  .importeTotale {
    margin-left: 0;
  };

  .ilPrecio {
    font-size: 1.3em;
  };
`;