import styled from "styled-components";
import {Link} from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    height: 116px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width:750px){
        height: 50px;
    }
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1636px;

    @media screen and (max-width:750px){
        height: 40px;
    }
`

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
`

export const CompanyLogo = styled.img`
    height: 100%;
    margin: 0;
    padding: 0;
    
`

export const MenuIcon = styled.div`
    font-size: 34px;
    cursor: pointer;
    color: #fff;
    padding-left: 56px;
`

export const MenuIconResponsive = styled.div`
    display: none;
    color: #fff;
    font-size: 34px;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 960px){
        display: flex;
    }

    @media screen and (max-width: 750px){
        font-size: 28px;
    }
`

export const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 724px;

    @media screen and (max-width:960px){
        display: none;
    }
`

export const SocialIconLink = styled.a`
    color: #fff;
`

export const Img = styled.img`
    margin: 0;
    padding: 0;
    height: 34px;
    width: 34px;
`

export const NavLanguage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
`

export const WorldImage = styled.img`
    padding: 0;
    margin: 0;
    height: 46px;
    width: 95px;
    cursor: pointer;
`

export const WorldWide = styled.span`
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    width: 130px;
    text-align: center;
    cursor: pointer;
`