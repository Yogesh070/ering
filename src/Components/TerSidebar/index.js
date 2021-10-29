import React from 'react'
import whatsapp from '../../images/whatsapp.png'
import skype from '../../images/skype.png'
import gmail from '../../images/gmail.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
import world from '../../images/world.png'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SocialRowList, SocialIconLink, Img} from './TerSidebarElements'

const TerSidebar = ({isOpen, isVisible, toggle}) => {

    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper isVisible={isVisible}>
                <SidebarMenu>
                    <SidebarLink to='/' exact='true' offset={-116} onClick={toggle}>Home</SidebarLink>    
                    <SidebarLink to='/' exact='true' offset={-116} onClick={toggle}>About Us</SidebarLink>    
                    <SidebarLink to='/' exact='true' offset={-116} onClick={toggle}>Services</SidebarLink>    
                    <SidebarLink to='/' exact='true' offset={-116} onClick={toggle}>Gallery</SidebarLink>    
                    <SidebarLink to='/' exact='true' offset={-116} onClick={toggle}>Contact Us</SidebarLink>    

                    <SocialRowList>
                        <SocialIconLink href='#'  aria-label='World'>
                                <Img src={world} alt='World'/>
                        </SocialIconLink >

                        <SocialIconLink href='#'  aria-label='Whatsapp'>
                            <Img src={whatsapp} alt='Whatsapp'/>
                        </SocialIconLink>

                        <SocialIconLink href='#'   aria-label='Skype'>
                            <Img src={skype} alt='Skype'/>
                        </SocialIconLink>

                        <SocialIconLink href='#'  aria-label='Gmail'>
                            <Img src={gmail} alt='Gmail'/>
                        </SocialIconLink>
                    </SocialRowList>

                    <SocialRowList>
                        <SocialIconLink href='#'  aria-label='Twitter'>
                            <Img src={twitter} alt='Twitter'/>
                        </SocialIconLink>
                    
                        <SocialIconLink href='#' aria-label='Linkedin'>
                            <Img src={linkedin} alt='Linkedin'/>
                        </SocialIconLink>
                    
                        <SocialIconLink href='#' aria-label='Youtube'>
                            <Img src={youtube} alt='Youtube'/>
                        </SocialIconLink>
                    
                        <SocialIconLink href='#'  aria-label='Instagram'>
                            <Img src={instagram} alt='Instagram'/>
                        </SocialIconLink>
                
                    </SocialRowList>

                </SidebarMenu>    
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default TerSidebar
