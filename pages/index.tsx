import React from 'react';
import type { NextPage } from 'next';
import Hero from '../components/Hero/Hero';
import { Card, CardContainerGrid, CardContent, CardImgContainer } from '../components/Card/Card.styled';
import { SectionTopMoviles } from '../components/Sections/Sections.styled';
import Image from 'next/image';
import demoImg from '../demo/PCkKKlEFrzPbi2hS.jpeg'
import { Button } from '../components/Button/Button.styled';

const dummyMap = [1,2,3,4,5,6,7]

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Hero />
       {/* Dummy data */}
       <SectionTopMoviles id="topMoviles">
        <div className='sectionTextDiv'>
          <h1>Los Móviles Más Vendidos</h1>
        </div>
        <CardContainerGrid>
          {
       dummyMap.map((d) => (
      <Card key={d}>
        <CardImgContainer>
          <Image src={demoImg} alt='demo image' width='100%' height='100%' layout='responsive' objectFit='cover' style={{borderRadius: '10px'}} />
        </CardImgContainer>
        <CardContent>
          <h2>Home</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever...
          </p>
          <Button>Add to cart</Button>
        </CardContent>
          
      </Card> 
      ))}
        </CardContainerGrid>  
      </SectionTopMoviles>
    </React.Fragment>
  )
}

export default Home
