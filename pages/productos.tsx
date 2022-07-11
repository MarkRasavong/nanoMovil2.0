import React, { useState, useEffect } from 'react'
import Card from '../components/Card/Card';
import { CardContainerGrid } from '../components/Card/Card.styled';
import RadioBtn from '../components/RadioBtn/RadioBtn';
import { RadioGroup } from '../components/RadioBtn/RadioBtn.styled';
import { ProductosSection, ProductTitle } from '../components/Sections/Sections.styled';
import { addToCart, fetchCart } from '../features/cart';
import { fetchProducts } from '../features/products';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Productos = () => {
  const dispatch = useAppDispatch();
  const [selectedRadio, setSelectedRadio] = useState('');
  const products = useAppSelector((state) => state.products.products);
  const catLimiter = (query: string) => query === '' ? products : products.filter(ele => ele.categories[0].slug === query);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
  }, [dispatch]);

  const handleBtnCartClick = (productId: string, quantity: number) => {
    dispatch(addToCart({productId, quantity}))
  };

  return (
    <ProductosSection>
      <div>
          <ProductTitle>Nuestro Productos</ProductTitle>
      </div>
      <RadioGroup>
        <RadioBtn 
          label="Móviles" 
          value="moviles" 
          catName='nanoProductos' 
          onClick={() => setSelectedRadio('moviles')} checked={selectedRadio === 'moviles' ? true : false}
        />
        <RadioBtn 
          label="Tarifas" 
          value="tarifas" 
          catName='nanoProductos' 
          onClick={() => setSelectedRadio('tarifas')} checked={selectedRadio === 'tarifas' ? true : false}
        />
        <RadioBtn 
          label="Todos" 
          value="" 
          catName='nanoProductos' 
          onClick={() => setSelectedRadio('')} checked={selectedRadio === '' ? true : false}
        />
      </RadioGroup>
      <CardContainerGrid>
      {
       catLimiter(selectedRadio).map((item) => (
       <Card 
       key={item.id}
       product={item}
       btnText='Añadir a la cesta'
       onButtonClick={() => handleBtnCartClick(item.id ,1)}
       />
      ))}
        </CardContainerGrid>
    </ProductosSection>
  )
}

export default Productos;