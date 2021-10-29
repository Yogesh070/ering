import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #000;
    height: 704px;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
`

export const EverythingWrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1636px;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 0 24px;
`

export const CircleImage = styled.img`
    height: 610px;
    width: 610px;
    position: absolute;
    top: 0;
    left: -200px;
`

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    z-index: 1;
`

export const Left = styled.div`
    flex: 1;
    color: #fff;
    display: flex;
    flex-direction: column;
`

export const FirstDiv = styled.div`
    flex: 1.3;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 730px){
        align-items: center;
        flex: 2.4;
    }
`

export const Top = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const TopHeader = styled.h1`
    font-size: 22px;
    font-weight: 500;
    color: #F6F6F6;

    @media screen and (max-width: 1010px){
        font-size: 18px;
    }

    @media screen and (max-width: 380px){
        font-size: 14px;
    }
`

export const TopLine = styled.img`
    width: 30px;
    height: 10px;
    margin-right: 30px;

    @media screen and (max-width: 380px){
        width: 20px;
        margin-right: 10px;
    }
`

export const TopMainHeader = styled.h1`
    font-family: 'audiowide', sans-serif;
    font-size: 64px;
    font-weight: 400;
    color: #FBFBFB;

    @media screen and (max-width: 1010px){
        font-size: 44px;
    }

    @media screen and (max-width: 380px){
        font-size: 30px;
    }
`

export const Bottom = styled.div`
    flex: 1;
    display: flex;

    @media screen and (max-width: 730px){
        width: 100%;
        max-width: 324px;
    }
`

export const BottomLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 380px){
        align-items: center;
    }
`

export const BottomRight = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px){
        flex: 1.5;
    }

    @media screen and (max-width: 730px){
        flex: 1.1;
    }

    @media screen and (max-width: 380px){
        display: none;
    }
`

export const BottomText = styled.p`
    font-size: 17px;
    font-weight: 400;
    color: #fff;

    @media screen and (max-width: 890px){
        font-size: 14px;
    }

    @media screen and (max-width: 730px){
        font-size: 12px;
    }
`

export const BottomInvisibleText = styled.p`
    display: none;

    @media screen and (max-width: 380px){
        display: block;
        font-size: 12px;
        font-weight: 400;
        color: #fff;
    }
`

export const SocialIcons = styled.img`
    width: 24px;

    @media screen and (max-width: 890px){
        width: 18px;
    }

    @media screen and (max-width: 730px){
        width: 16px;
    }
`

export const LastDiv = styled.div`
    flex: 1;
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1060px){
        flex-direction: column;
    }

    @media screen and (max-width: 730px){
        display: none;
    }
`

export const RightTopDiv = styled.div`
    flex: 1.3;
    display: flex;
    align-items: center;
`

export const ContactImgWrapper = styled.div`
    max-width: 910px;
    z-index: 1;
`

export const RightBottomDiv = styled.div`
    flex: 1;
`

export const ContactImageWrapper = styled.div`
    max-width: 910px;
    z-index: 1;

    @media screen and (max-width: 1060px){
        display: none;
    }
`

export const ContactImage = styled.img`
    width: 100%;
`

export const Last = styled.div`
    flex: 1;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 730px){
        display: flex;
    }    
`

export const ImageWrapper = styled.div`
    max-width: 324px;
    z-index: 1;
`







export const GradientWrapper = styled.div`
    height: 303px;
    width: 100%;
    background: -webkit-linear-gradient(360deg, #FA5C38, #EE8330);
    position: absolute;
    margin-top: 401px;
    overflow: hidden;

    @media screen and (max-width: 730px){
        height: 203px;
        margin-top: 501px;
    }
`

export const GradientContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1636px;
    padding: 0 48px;
    display: flex;

    @media screen and (max-width: 1655px){
        padding: 0 24px;
    }
`

export const ContentDiv = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 730px){
        align-items: center;
    }
`

export const TopDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1060px){
        justify-content: center;
    }
`

export const DownloadH1 = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: #fff;

    @media screen and (max-width: 360px){
        font-size: 18px;
    }
`

export const BottomDiv = styled.div`
    flex: 1;
    display: flex;

    @media screen and (max-width: 280px){
        flex-direction: column;
    }
`

export const AppleDiv = styled.div`
    flex: 1;
    display: flex;
    padding: 5px;

    @media screen and (max-width: 1060px){
        justify-content: center;
    }
`

export const AppleLink = styled.a`
    height: 100%;
    max-width: 318px;
    cursor: pointer;
    z-index: 10;

    @media screen and (max-width: 280px){
        max-width: 200px;
    }
`

export const AppleImage = styled.img`
    width: 100%;
`

export const GoogleDiv = styled.div`
    flex: 1;
    display: flex;
    padding: 5px;

    @media screen and (max-width: 1060px){
        justify-content: center;
    }
`

export const GoogleLink = styled.a`
    height: 100%;
    max-width: 318px;
    cursor: pointer;
    z-index: 10;

    @media screen and (max-width: 280px){
        max-width: 200px;
    }
`

export const GoogleImage = styled.img`
    width: 100%;
`

export const EmptyDiv = styled.div`
    flex: 1;

    @media screen and (max-width: 1060px){
        display: none;
    }
`
