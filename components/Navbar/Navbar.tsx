import Link from 'next/link';
import React, {useState } from 'react';
import { MobileMenuButton, NavbarContainer, NavbarLogo } from './Navbar.styled';
import{ MdMenu, MdOutlineClose } from 'react-icons/md';
const Navbar = () => {
  const [ displayMobileMenu, setDisplayMobileMenu ] = useState(false);


  const handleMobileClick = () => {
    setDisplayMobileMenu(prevState => !prevState);
  };

  return (
    <NavbarContainer>
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