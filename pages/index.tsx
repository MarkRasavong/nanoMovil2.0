import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Hero from '../components/Hero/Hero';
import { CardContainerGrid} from '../components/Card/Card.styled';
import { Section } from '../components/Sections/Sections.styled';
import { fetchProducts } from '../features/products';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Card from '../components/Card/Card';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const catLimiter = (query: string, num: number) => products.filter(ele => ele.categories[0].slug === query).slice(0,num)

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <React.Fragment>
      <Hero />
       {/*The Tariff Section*/}
       <Section id="topTarifas">
        <div>
          <h1>Las Tarifas</h1>
        </div>
        <CardContainerGrid>
          {
       catLimiter('tarifas', 3).map((item) => (
       <Card 
       key={item.id}
       product={item}
       btnLink="/productos"
       btnText='Ir la Tienda'
       />
      ))}
        </CardContainerGrid>
      </Section>

      {/*The Mobiles Section*/}
      <Section id="topMoviles">
        <div>
          <h1>Los móviles más vendidos</h1>
        </div>
        <CardContainerGrid>
          {
       catLimiter('moviles', 4).map((item) => (
       <Card 
       key={item.id}
       product={item}
       btnLink="/productos"
       btnText='Ir la Tienda'
       />
      ))}
        </CardContainerGrid>  
      </Section>
    </React.Fragment>
  )
}

export default Home;
