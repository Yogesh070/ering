import styled from "styled-components";
import { ImCross } from "@react-icons/all-files/im/ImCross";
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 34px;
    cursor: pointer;
    outline: none;

    @media screen and (max-width:750px){
        top: 2px;
    }
`

export const CloseIcon = styled(ImCross)`
    color: #fff;
`

export const SidebarWrapper = styled.div`
    display: ${({isVisible}) => (isVisible ? 'block' : 'none')};
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 100px);
    text-align: center;
    align-items: center;
    padding: 0;

    @media screen and (max-width:960px){
        grid-template-rows: repeat(7, 70px);
    }
    
    @media screen and (max-width:960px){
        grid-template-rows: repeat(7, 70px);
    }

    @media screen and (max-height:700px){
        grid-template-rows: repeat(7, 50px);
    }
    
    @media screen and (max-height:550px){
        grid-template-rows: repeat(7, 40px);
    }
    
    @media screen and (max-height:480px){
        grid-template-rows: repeat(7, 30px);
    }
    
    @media screen and (max-height:400px){
        grid-template-rows: repeat(7, 25px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #FA5C38;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-height:480px){
        font-size: 18px;
    }
`;

export const SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SocialIconLink = styled.a`
    color: #fff;
`

export const Img = styled.img`
    margin: 0 10px;
    height: 34px;
    width: 34px;

    @media screen and (max-height:480px){
        height: 24px;
        width: 24px;
    }
    
    @media screen and (max-height:480px){
        height: 22px;
        width: 22px;
    }    
`
export const SocialRowList = styled.ul`
    display: list-item;
    justify-content: center;
    align-items: center;
    list-style: none;
    list-style-type: none;
    padding: 0;
    
    @media screen and (min-width:960px){
        display: none;
    }
`