import React from 'react';
import type { NextPage } from 'next';
import Hero from '../components/Hero/Hero';
import { Card, CardContainerGrid } from '../components/Card/Card.styled';
import { SectionTopMoviles } from '../components/Sections/Sections.styled';

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
          <div>
            <div>
              <div>
                <h2>Home</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
      </Card> 
      ))}
        </CardContainerGrid>  
      </SectionTopMoviles>
    </React.Fragment>
  )
}

export default Home
