import styled from "styled-components";

export const ShoppingListContainer = styled.div`
margin-top:2em;
display:flex;
justify-content: space-between;

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

.importeTotal {
  margin-left: 0;
}

.ilPrecio {
  font-size: 1.3em;
}
`;

export const ShopListItem = styled.div`
display: flex;
flex-direction: column;
`;