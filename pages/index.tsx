import React from 'react';
import type { NextPage } from 'next';
import Hero from '../components/Hero/Hero';

const dummyMap = [1,2,3,4,5,6,7]

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Hero />
       {/* Dummy data */}
       {
       dummyMap.map((d) => (
        <div style={{ marginTop: "7rem" }} key={d}>
        <section id="home">
          <div className="container px-4">
            <div className="row gx-4 justify-content-center">
              <div className="col-lg-8">
                <h2>Home</h2>
                <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div> 
      ))}
    </React.Fragment>
  )
}

export default Home
