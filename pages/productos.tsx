import React, { useState } from 'react'
import Card from '../components/Card/Card';
import { CardContainerGrid } from '../components/Card/Card.styled';
import RadioBtn from '../components/RadioBtn/RadioBtn';
import { RadioGroup } from '../components/RadioBtn/RadioBtn.styled';
import { ProductosSection, ProductTitle } from '../components/Sections/Sections.styled';
import { useAppSelector } from '../store/hooks';

const Productos = () => {
  const [selectedRadio, setSelectedRadio] = useState('');
  const products = useAppSelector((state) => state.products.products);
  const catLimiter = (query: string) => query === '' ? products : products.filter(ele => ele.categories[0].slug === query);
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
       />
      ))}
        </CardContainerGrid>
    </ProductosSection>
  )
}

export default Productos;