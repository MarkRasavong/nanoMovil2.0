import React from 'react';
import Image from 'next/image';
import { GlassBox, HeroLogoDiv, HeroSection, HeroTextContainer, Overlay } from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <GlassBox>
        <HeroLogoDiv>
          <Image src='/Hero.png' alt='NanoMóvil Logo Page' layout='fill' className='heroImg'/>
        </HeroLogoDiv>
        <HeroTextContainer>
          <h2>Benvingut!</h2>
          <h6>Nuestro Móvil de La Terreta</h6>
        </HeroTextContainer>
      </GlassBox>

      <Overlay />
      <div className="vidBkgContainr">
        <video src='/production ID_3851611.mp4' loop={true} autoPlay={true} muted={true} playsInline/>
      </div>
    </HeroSection>
  )
}

export default Hero