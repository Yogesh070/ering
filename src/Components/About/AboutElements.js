import styled from "styled-components";

export const PageContainer = styled.div`
    height: 1261px;
    width: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    overflow: hidden;
`

export const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1636px;
    display: flex;
    justify-content: center;
    position: relative;
`

export const Image = styled.img`
    width: 540px;
    height: 540px;
    position: absolute;
    top: 0;
    left: -100px;
`

export const Topic = styled.h1`
    color: #F6F6F6;
    font-family: "Audiowide", sans-serif;
    font-weight: 400;
    font-size: 64px;

    @media screen and (max-width: 1510px){
        font-size: 54px;
    }
    
    @media screen and (max-width: 1410px){
        font-size: 44px;
    }
    
    @media screen and (max-width: 1060px){
        font-size: 34px;
    }
    
    @media screen and (max-width: 830px){
        display: none;
    }
`

export const TopicVisible = styled.h1`
    display: none;
    color: #F6F6F6;
    font-family: "Audiowide", sans-serif;
    font-weight: 400;
    font-size: 44px;

    @media screen and (max-width: 830px){
        display: block;
    }
    
    @media screen and (max-width: 580px){
        display: block;
        font-size: 32px;
    }
`

export const ContentContainer = styled.div`
    z-index: 20;
    height: 100%;
    width: 100%;
    max-width: 1636px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 24px;
`

export const TwoCardsContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1636px;
    justify-content: space-evenly;
    
    @media screen and (max-width: 810px){
        flex-direction: column;
        align-items: center;
    }
`

export const CardWrapper = styled.div`
    height: 320px;
    width: 764px;
    position: relative;

    @media screen and (max-width: 1600px){
        width: 664px;
    }

    @media screen and (max-width: 1410px){
        width: 564px;
    }

    @media screen and (max-width: 1210px){
        width: 364px;
    }
    
    @media screen and (max-width: 810px){
        margin-bottom: 40px;
    }
    
    @media screen and (max-width: 380px){
        width: 264px;
    }
`

export const CardFront = styled.div`
    height: 296px;
    width: 734px;
    border-radius: 10px;
    background: #202020;
    position: absolute;
    z-index: 10;

    @media screen and (max-width: 1600px){
        width: 634px;
    }

    @media screen and (max-width: 1410px){
        width: 544px;
    }

    @media screen and (max-width: 1210px){
        width: 344px;
    }

    @media screen and (max-width: 380px){
        width: 244px;
    }
`

export const CardBack = styled.div`
    border-radius: 10px;
    height: 293px;
    width: 743px;
    top: 27px;
    left: 21px;
    background: -webkit-linear-gradient(315deg, #202020, #FF9B2B);
    position: absolute;

    @media screen and (max-width: 1600px){
        width: 643px;
    }

    @media screen and (max-width: 1410px){
        width: 543px;
    }

    @media screen and (max-width: 1210px){
        width: 343px;
    }

    @media screen and (max-width: 380px){
        width: 243px;
    }
`

export const TextWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 40px 40px;
    color: #F6F6F6;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1410px){
        padding: 20px 20px;
    }

    @media screen and (max-width: 380px){
        padding: 20px 10px;
    }
`

export const Line = styled.img`
    width: 39px;
    margin-right: 16px;

    @media screen and (max-width: 1210px){
        width: 30px;
    }
    
    @media screen and (max-width: 810px){
        width: 20px;
        margin-right: 10px;
    }
    
    @media screen and (max-width: 380px){
        width: 15px;
        margin-right: 5px;
    }
`

export const Header = styled.h1`
    font-size: 36px;
    font-weight: 500;

    @media screen and (max-width: 1410px){
        font-size: 30px;
    }
    
    @media screen and (max-width: 1210px){
        font-size: 24px;
    }

    @media screen and (max-width: 380px){
        font-size: 18px;
    }
`

export const Paragraph = styled.p`
    font-size: 16px;
    font-weight: 400;

    @media screen and (max-width: 1210px){
        font-size: 13px;
    }

    @media screen and (max-width: 380px){
        font-size: 12px;
    }
`

export const OneCardContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1636px;
    justify-content: space-around;
    
    @media screen and (max-width: 420px){
        flex-direction: column;
        align-items: center;
    }
`

export const CardWrapper2 = styled.div`
    height: 320px;
    width: 1132px;
    position: relative;

    @media screen and (max-width: 1600px){
        width: 1032px;
    }
    
    @media screen and (max-width: 1210px){
        width: 732px;
    }
    
    @media screen and (max-width: 810px){
        width: 364px;
    }
    
    @media screen and (max-width: 380px){
        width: 264px;
    }
`

export const CardFront2 = styled.div`
    height: 296px;
    width: 1102px;
    border-radius: 10px;
    background: #202020;
    position: absolute;
    z-index: 10;

    @media screen and (max-width: 1600px){
        width: 1002px;
    }

    @media screen and (max-width: 1210px){
        width: 702px;
    }

    @media screen and (max-width: 810px){
        width: 344px;
    }

    @media screen and (max-width: 380px){
        width: 244px;
    }
`

export const CardBack2 = styled.div`
    border-radius: 10px;
    height: 288px;
    width: 1100px;
    top: 32px;
    left: 32px;
    background: -webkit-linear-gradient(315deg, #202020, #FF9B2B);
    position: absolute;

    @media screen and (max-width: 1600px){
        width: 1000px;
    }

    @media screen and (max-width: 1210px){
        width: 700px;
    }

    @media screen and (max-width: 810px){
        width: 343px;
        top: 27px;
        left: 21px;
    }

    @media screen and (max-width: 380px){
        width: 243px;
    }
`

export const ContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 40px 40px;
    color: #F6F6F6;
    display: flex;

    @media screen and (max-width: 1210px){
        flex-direction: column;
    }
    
    @media screen and (max-width: 810px){
        padding: 20px 20px;
    }

    @media screen and (max-width: 380px){
        padding: 20px 10px;
    }
`

export const ContentHeader = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContentButton = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Line2 = styled.img`
    width: 60px;
    margin-right: 25px;

    @media screen and (max-width: 1210px){
        width: 30px;
    }

    @media screen and (max-width: 810px){
        width: 20px;
        margin-right: 10px;
    }

    @media screen and (max-width: 380px){
        width: 15px;
        margin-right: 5px;
    }
`

export const HeaderText = styled.h1`
    font-size: 36px;
    font-weight: 500;

    @media screen and (max-width: 1410px){
        font-size: 30px;
    }
    
    @media screen and (max-width: 1210px){
        font-size: 24px;
    }

    @media screen and (max-width: 380px){
        font-size: 18px;
    }
`

export const ParagraphText = styled.p`
    font-size: 16px;
    font-weight: 400;

    @media screen and (max-width: 1210px){
        font-size: 13px;
    }

    @media screen and (max-width: 380px){
        font-size: 12px;
    }
`

export const CallButton = styled.button`
    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: space-between;
    width: 252px;
    height: 60px;
    color: #fff;
    background: -webkit-linear-gradient(360deg, #FF9B2B, #EE8330);
    font-size: 24px;
    font-weight: 500;
    border-radius: 10px;
    border: none;

    @media screen and (max-width: 810px){
        width: 200px;
        height: 40px;
        padding: 0 20px;
        font-size: 20px;
    }

    @media screen and (max-width: 380px){
        width: 180px;
        height: 40px;
        padding: 0 20px;
        font-size: 18px;
    }
`