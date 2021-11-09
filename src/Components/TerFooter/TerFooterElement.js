import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #000;
    overflow: hidden;
    position: relative;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
`

export const CircleImage = styled.img`
    width: 550;
    height: 550;
    position: absolute;
    right: 0;
    top: 0;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    z-index: 1;
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    box-sizing: border-box;
    color: #fff;
    width: 250px;

    @media screen and (max-width: 1410px){
        width: 200px;
    }

    @media screen and (max-width: 1180px){
        width: 150px;
    }

    @media screen and (max-width: 950px){
        width: 100%;
    }

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkItems1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    box-sizing: border-box;
    color: #fff;
    width: 500px;

    @media screen and (max-width: 1410px){
        width: 400px;
    }

    @media screen and (max-width: 1180px){
        width: 300px;
    }

    @media screen and (max-width: 950px){
        width: 100%;
    }

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 22px;
    font-weight: 500;
    color: #fff;
    line-height: 28px;
    margin-bottom: 16px;
`

export const FooterParagraph = styled.p`
    font-size: 17px;
    font-weight: 400;
    color: #D9DBE1;
    line-height: 32px;
    max-width: 440px;
`

export const FooterLink = styled(Link)`
    font-size: 18px;
    font-weight: 400;
    color: #D9DBE1;
    line-height: 28px;
    margin-bottom: 12px;
    text-decoration: none;
    cursor: pointer;
    
    &:hover{
        color: #FA5C38;
        transition: 0.3s ease-out;
    }
`

export const SocialLinks = styled.a`
    font-size: 18px;
    font-weight: 400;
    color: #D9DBE1;
    line-height: 28px;
    margin-bottom: 12px;
    text-decoration: none;
    cursor: pointer;
    
    &:hover{
        color: #FA5C38;
        transition: 0.3s ease-out;
    }
`

export const ImageLink = styled.a`
    height: 53px;
    width: 176px;
    cursor: pointer;
    z-index: 10;
`

export const Image = styled.img`
    height: 53px;
    width: 176px;
`

export const RightsContainer = styled.section`
    max-width: 1400px;
    width: 100%;
`

export const RightsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 40px auto 0 auto;
    padding: 48px 24px;
`

export const TopDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`

export const HomeImage = styled.img`
    width: 330px;
    height: 150px;

    @media screen and (max-width: 820px){
        width: 165px;
        height: 75px;
    }
`;

export const DividerWrap = styled.div`
    max-width: 515px;
`

export const Divider = styled.img`
    width: 100%;
    height: 2px;
`

export const BottomDiv = styled.div`
    display: flex;
    align-items: center;
`

export const Rights = styled.p`
    color: #D9DBE1;
    font-size: 14px;
    font-weight: 400;
`