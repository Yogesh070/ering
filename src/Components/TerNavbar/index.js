import React, {useState} from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { animateScroll } from 'react-scroll';
import logo from '../../images/logo.png'
import whatsapp from '../../images/whatsapp.png'
import skype from '../../images/skype.png'
import gmail from '../../images/gmail.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
import world from '../../images/world.png'
import {Nav, NavContainer, NavLogo, CompanyLogo, MenuIcon, NavMenu, SocialIconLink, Img, NavLanguage, WorldImage, WorldWide, MenuIconResponsive} from './TerNavBarElement'


const TerNavbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(true);

    const toggleHome = () =>{
        animateScroll.scrollToTop();
    }

    return (
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/'>
                        <CompanyLogo src={logo} alt='Company Logo'/>
                    </NavLogo>

                    <NavMenu>
                            <NavLanguage>
                                <WorldImage src={world} alt='World'/><WorldWide>WORLDWIDE</WorldWide>
                            </NavLanguage>

                            <SocialIconLink href='#'  aria-label='Whatsapp'>
                                <Img src={whatsapp} alt='Whatsapp'/>
                            </SocialIconLink>
                            <SocialIconLink href='#' aria-label='Skype'>
                                <Img src={skype} alt='Skype'/>
                            </SocialIconLink>
                            <SocialIconLink href='#' aria-label='Gmail'>
                                <Img src={gmail} alt='Gmail'/>
                            </SocialIconLink>
                            <SocialIconLink href='#' aria-label='Twitter'>
                                <Img src={twitter} alt='Twitter'/>
                            </SocialIconLink>
                            <SocialIconLink href='#'  aria-label='Linkedin'>
                                <Img src={linkedin} alt='Linkedin'/>
                            </SocialIconLink>
                            <SocialIconLink href='#' aria-label='Youtube'>
                                <Img src={youtube} alt='Youtube'/>
                            </SocialIconLink>
                            <SocialIconLink href='#' aria-label='Instagram'>
                                <Img src={instagram} alt='Instagram'/>
                            </SocialIconLink>
                            <MenuIcon onClick={toggle}>
                                <RiMenu3Line/>
                            </MenuIcon>
                    </NavMenu>

                    <MenuIconResponsive onClick={toggle}>
                        <RiMenu3Line/>
                    </MenuIconResponsive>
                </NavContainer>
            </Nav>    
    )
}

export default TerNavbar
