import React from 'react'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { useTheme } from 'styled-components'
import { NanoTheme } from '../../styles/theme'
import { FooterDiv, FooterSocialIcons } from './Footer.styled'

const Footer = () => {
  const theme = useTheme() as NanoTheme;

  const markSociales = [
    {name: 'linkedIn', link: 'https://www.linkedin.com/in/markrasavong/', icn: <SiLinkedin size={'2em'} color={theme.colors.nanoWhite}/>}, 
    {name: 'github', link: 'https://github.com/MarkRasavong', icn: <SiGithub size={'2em'} color={theme.colors.nanoWhite} />}
  ]

  return (
    <FooterDiv>
      <h4>Nano Móvil</h4>
      <FooterSocialIcons>
        {
          markSociales.map(({name, link, icn}) => (
            <a href={link} key={`ftrSocialIcn${name}`} rel="noopener noreferrer" target="_blank">
              <button>
                {icn}
              </button>
            </a>
          ))
        }
      </FooterSocialIcons>
    </FooterDiv>
  )
}

export default Footer