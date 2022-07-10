import Link from 'next/link';
import React, {useEffect, useState } from 'react';
import { IconLinksContainer, MobileMenuButton, NavbarContainer, NavBarLinks, NavbarLogo } from './Navbar.styled';
import{ MdMenu, MdOutlineClose } from 'react-icons/md';
import { RiShoppingCart2Fill, RiUserFill } from 'react-icons/ri';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { NanoTheme, theme } from '../../styles/theme';

const pages = [
  { name: 'Productos', link: '/productos'}
];

const iconsLinks = [
  {name: 'cart', link:'/cesta', icn: <RiShoppingCart2Fill size={'1.6em'} color={theme.colors.nanoOrange}/>},
  {name: 'account', link: '/cuenta', icn: <RiUserFill size={'1.6em'} color={theme.colors.nanoOrange}/>}
];

const Navbar = () => {
  const theme = useTheme() as NanoTheme;
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

      <NavBarLinks style={{ left: displayMobileMenu ? '0%' : '-100%'}}>
        {
          pages.map(({name, link}) => (
            <li key={`navLink_${name}`} onClick={() => setDisplayMobileMenu(false)} >
              <Link href={link} passHref>
                <a style={{fontFamily: theme.fonts[0]}}>{name}</a>
              </Link>
            </li>
          ))
        }
      </NavBarLinks>

      <IconLinksContainer>
        {
          iconsLinks.map(({name, link, icn}) => (
            <button key={`NavIcn_${name}`}>
            <Link href={link} passHref>
              {icn}
            </Link>
          </button>
          ))
        }
      </IconLinksContainer>

      <MobileMenuButton onClick={handleMobileClick}>
          {displayMobileMenu ? 
            <MdOutlineClose color={theme.colors.nanoOrange} size={'3em'}/>
          :
            <MdMenu color={theme.colors.nanoOrange} size={'3em'}/>}
      </MobileMenuButton>
    </NavbarContainer>
  )
}

export default Navbar;