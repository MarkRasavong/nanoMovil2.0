import Link from 'next/link';
import React, {useEffect, useState } from 'react';
import { MobileMenuButton, NavbarContainer, NavbarLogo } from './Navbar.styled';
import{ MdMenu, MdOutlineClose } from 'react-icons/md';
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
      background: `179deg,
    rgba(31, 127, 149, 1) ${backgroundTransparacy},
    rgba(5, 115, 189, 1) ${backgroundTransparacy}`,
      padding: `${padding}px 0px`,
      boxShadow: `rgba(0, 0, 0, ${boxShadow}) 0px 2px 4px -1px,
		rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px`
    }}
    >
      <NavbarLogo>
      <Link href={"/"}>Nano Móvil</Link>
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