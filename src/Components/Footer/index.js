import React, {useState, useEffect} from 'react'
import apple from '../../images/apple.png'
import google from '../../images/google.png'
import circle from '../../images/footerCircle.svg'
import logo from '../../images/logo.png'
import divider from '../../images/Divider.png'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkItems1, FooterLinkTitle, FooterParagraph, FooterLink, FooterLinkRoute, SocialLinks, ImageLink, Image, CircleImage, RightsContainer, RightsWrapper, HomeImage, TopDiv, Divider, DividerWrap, BottomDiv, Rights } from './FooterElements'

const Footer = () => {
    const [width, setWidth]   = useState(window.innerWidth);
    const [off, setOff] = useState();

    const mainFunction = () => {
        if (width < 751) {
            setOff(-50);
        }
        else if(width > 750){
            setOff(-116)
        }
    }

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        mainFunction();
    };

    useEffect(() => {
        mainFunction();
        window.addEventListener("resize", updateWidthAndHeight);
        return () => {
            window.removeEventListener("resize", updateWidthAndHeight);
        }
    });

    return (
        <FooterContainer>
                <CircleImage src={circle} alt='Circle'/>
            <FooterWrap>

                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems1>
                            <FooterLinkTitle>The Engagement  Ring Translations</FooterLinkTitle>
                            <FooterParagraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no.</FooterParagraph>
                        </FooterLinkItems1>

                        <FooterLinkItems>
                            <FooterLinkTitle>Quick Links</FooterLinkTitle>
                            <FooterLink activeClass='active' to="home" exact='true' offset={off}>Home</FooterLink>
                            <FooterLink activeClass='active' to="about" exact='true' offset={off}>About Us</FooterLink>
                            <FooterLink to='services' exact='true' offset={off}>Services</FooterLink>
                            <FooterLink to='gallery' exact='true' offset={off}>Gallery</FooterLink>
                            <FooterLink to='contact' exact='true' offset={off}>Contact Us</FooterLink>
                            <FooterLinkRoute to='/terminology'>Terminology</FooterLinkRoute>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Follow us</FooterLinkTitle>
                            <SocialLinks href='#'aria-label='Instagram'>Facebook</SocialLinks>
                            <SocialLinks href='#' aria-label='Instagram'>Twitter</SocialLinks>
                            <SocialLinks href='#' aria-label='Instagram'>Youtube</SocialLinks>
                            <SocialLinks href='#' aria-label='Instagram'>Instagram</SocialLinks>
                            <SocialLinks href='#' aria-label='Instagram'>LinkedIn</SocialLinks>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Get the App</FooterLinkTitle>
                            <SocialLinks href='#' target='' aria-label='Instagram'>
                                <ImageLink><Image src={apple} alt='Apple'/></ImageLink>
                            </SocialLinks>
                            <SocialLinks href='#' target='' aria-label='Instagram'>
                                <ImageLink><Image src={google} alt='Google'/></ImageLink>
                            </SocialLinks>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <RightsContainer>
                    <RightsWrapper>
                        <TopDiv>
                            <DividerWrap>
                                <Divider src={divider} alt='Divider'/>
                            </DividerWrap>
                            <HomeImage src={logo} alt='Home'/>
                            <DividerWrap>
                                <Divider src={divider} alt='Divider'/>
                            </DividerWrap>
                        </TopDiv>

                        <BottomDiv>
                            <Rights>© 2021 Company name. All rights reserved.</Rights>
                        </BottomDiv>
                    </RightsWrapper>
                </RightsContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
