import Link from 'next/link';
import React, {useEffect, useState } from 'react';
import { MobileMenuButton, NavbarContainer, NavbarLogo } from './Navbar.styled';
import{ MdMenu, MdOutlineClose } from 'react-icons/md';
import Image from 'next/image';

const Navbar = () => {
  const [ displayMobileMenu, setDisplayMobileMenu ] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const backgroundTransparacyVar = clientWindowHeight / 600;
  
    if (backgroundTransparacyVar < 1) {
        const paddingVar = 30 - backgroundTransparacyVar * 20;
        const boxShadowVar = backgroundTransparacyVar * 0.1;
        setBackgroundTransparacy(backgroundTransparacyVar);
        setPadding(paddingVar);
        setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  //when in mobile viewport user can toggle menuItems
  const handleMobileClick = () => {
    setDisplayMobileMenu(prevState => !prevState);
  };

  return (
    <NavbarContainer
    style={{
      background: `linear-gradient(
        179deg,
        rgba(31, 127, 149, ${backgroundTransparacy}) 29%,
        rgba(5, 115, 189, ${backgroundTransparacy}) 100%)`,
      padding: `${padding}px 0px`,
      boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`
    }}
    >
      <NavbarLogo>
      <Link href={"/"}>
        <Image src={"/navBarLogo.png"} alt="logo" width={182} height={94} />
      </Link>
      </NavbarLogo>
      
      <MobileMenuButton onClick={handleMobileClick}>
          {displayMobileMenu ? 
            <MdOutlineClose color={'orange'} size={'3em'}/>
          :
            <MdMenu color={'orange'} size={'3em'}/>}
      </MobileMenuButton>
    </NavbarContainer>
  )
}

export default Navbar;