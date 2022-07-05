import React from 'react';
import Image from 'next/image';
import { GlassBox, HeroLogoDiv, HeroSection, HeroTextContainer, Overlay } from './Hero.styled';
import { Button } from '../Button/Button.styled';
import Link from 'next/link';

const Hero = () => {
  return (
    <HeroSection>
      <GlassBox>
      <HeroTextContainer>
          <h2>Benvingut!</h2>
          <h6>Nuestro Móvil de La Terreta</h6>
        </HeroTextContainer>
        <HeroLogoDiv>
          <Image src='/Hero.png' alt='NanoMóvil Logo Page' layout='fill' className='heroImg'/>
        </HeroLogoDiv>
        <div className='btnsWrpr'>
          <Link href='/productos' passHref>
            <Button>
              Ver Nuestro Productos
            </Button>
          </Link>
        </div>
      </GlassBox>

      <Overlay />
      <div className="vidBkgContainr">
        <video src='/production ID_3851611.mp4' loop={true} autoPlay={true} muted={true} playsInline/>
      </div>
    </HeroSection>
  )
}

export default Hero