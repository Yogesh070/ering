import React from 'react'
import circle from '../../images/contactCircle.svg'
import apple from '../../images/apple.png'
import google from '../../images/google.png'
import contact from '../../images/contact.png'
import line from '../../images/aboutLine.svg'
import contactCall from '../../images/contactCall.png'
import contactGmail from '../../images/contactGmail.png'
import contactWhatsapp from '../../images/contactWhatsapp.png'
import contactSkype from '../../images/contactSkype.png'
import { ContactContainer, EverythingWrapper, CircleImage, GradientWrapper, GradientContentWrapper, ContentDiv, EmptyDiv, TopDiv, BottomDiv, DownloadH1, AppleDiv, GoogleDiv, AppleImage, GoogleImage, AppleLink, GoogleLink, ContentWrapper, Left, Right, ContactImageWrapper, ContactImage, FirstDiv, LastDiv, Top, Bottom, BottomRight, BottomLeft, TopHeader, TopLine, TopMainHeader, BottomText, SocialIcons, RightTopDiv, RightBottomDiv, ContactImgWrapper, Last, ImageWrapper, BottomInvisibleText } from './ContactUsElements'

const ContactUs = () => {
    return (
            <ContactContainer id='contact'>
                <EverythingWrapper>
                    <CircleImage src={circle} alt='Circle'/>

                    <ContentWrapper>
                        <Left>
                            <FirstDiv>
                                <Top>
                                    <TopHeader><TopLine src={line} alt='Line'/>NEED MORE INFORMATION</TopHeader>
                                    <TopMainHeader>CONTACT US</TopMainHeader>
                                </Top>
                                <Bottom>
                                    <BottomLeft>
                                        <BottomText><SocialIcons src={contactCall} alt='Phone'/> +237 655394492 </BottomText>
                                        <BottomText><SocialIcons src={contactWhatsapp} alt='Whatsapp'/> +237 675500863 </BottomText>
                                        <BottomInvisibleText><SocialIcons src={contactGmail} alt='Gmail'/> theodoredasse@gmail.com</BottomInvisibleText>
                                        <BottomInvisibleText><SocialIcons src={contactSkype} alt='Skype'/> theodoredasse</BottomInvisibleText>
                                    </BottomLeft>
                                    <BottomRight>
                                        <BottomText><SocialIcons src={contactGmail} alt='Gmail'/> theodoredasse@gmail.com</BottomText>
                                        <BottomText><SocialIcons src={contactSkype} alt='Skype'/> theodoredasse</BottomText>
                                    </BottomRight>
                                </Bottom>
                                <Last>
                                    <ImageWrapper><ContactImage src={contact} alt='Contact'/></ImageWrapper>
                                </Last>
                            </FirstDiv>
                            <LastDiv/>
                        </Left>
                        <Right>
                            <RightTopDiv>
                                <ContactImgWrapper><ContactImage src={contact} alt='Contact'/></ContactImgWrapper>
                            </RightTopDiv>
                            <RightBottomDiv/>
                            <ContactImageWrapper>
                                <ContactImage src={contact} alt='Contact'/>
                            </ContactImageWrapper>
                        </Right>
                    </ContentWrapper>
                </EverythingWrapper>

                <GradientWrapper>
                    <GradientContentWrapper>
                        <ContentDiv>
                            <TopDiv>
                                <DownloadH1>Download our app for direct access to our salespersons.</DownloadH1>
                            </TopDiv>
                            <BottomDiv>
                                <AppleDiv>
                                    <AppleLink href='https://www.instagram.com/rohittgrg/' target='_blank'  aria-label='Apple'>
                                        <AppleImage src={apple} alt='Apple'/>
                                    </AppleLink>
                                </AppleDiv>
                                <GoogleDiv>
                                    <GoogleLink href='https://www.instagram.com/rohittgrg/' target='_blank'  aria-label='Apple'>
                                        <GoogleImage src={google} alt='Google'/>
                                    </GoogleLink>
                                </GoogleDiv>
                            </BottomDiv>
                        </ContentDiv>

                        <EmptyDiv/>
                    </GradientContentWrapper>
                </GradientWrapper>
            </ContactContainer>
    )
}

export default ContactUs
