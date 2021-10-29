import styled from 'styled-components';
import {Link} from 'react-scroll'

export const HomeContainer = styled.div`
    height: 100vh;
    max-height: 1030px;
    min-height: 600px;
    position: relative;
    overflow: hidden;
`

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    align-items: center;
    justify-content: center;
`

export const HomeImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ContentWrapper = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1636px;
    height: 100%;
    max-height: 507px;
    width: calc(100% - 50px);
    padding-left: 24px;

    @media screen and (max-width: 1660px){
        padding-left: 0;
    }

    h1{
        font-size: 144px;
        font-weight: 900;
        background: -webkit-linear-gradient(#F48834, #E84824);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media screen and (max-width: 860px){
            font-size: 120px;
        }
        @media screen and (max-width: 600px){
            font-size: 100px;
        }
        @media screen and (max-width: 478px){
            font-size: 80px;
        }
        @media screen and (max-width: 400px){
            font-size: 60px;
        }
        @media screen and (max-width: 310px){
            font-size: 50px;
        }
    }
`

export const ScrollImageLink = styled(Link)`
    width: 130px;
    height: 66px;
    right: 0;
    bottom: 0;
    position: absolute;
    margin-bottom: 24px;
    margin-right: 24px;
    cursor: pointer;

    @media screen and (max-width: 1660px){
        margin-right: 0;
    }
`

export const ScrollImage = styled.img`
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`