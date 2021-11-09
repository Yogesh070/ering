import React, {useState, useEffect} from 'react'
import home from '../../images/home.png'
import homeScroll from '../../images/homeScroll.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs';
import { HomeContainer, HomeWrapper, HomeImage, ContentWrapper, ScrollImageLink,ScrollButton} from './HomeElements'


const Home = () => {

    const scrolls={
        UP:"up",
        DOWN:"down",
        TOP:"top"
    }
    function scrollPage(direction) {
        switch (direction) {
            case scrolls.UP:
                window.scrollBy(0, -window.innerHeight);
                break;
            case scrolls.DOWN:
                window.scrollBy(0, window.innerHeight);
                break;
            case scrolls.TOP:
                window.scrollTo(0,0);
            default:
                break;
        }
    }

    return (
        <HomeContainer id='home'>
            <HomeWrapper>
                <HomeImage src={home} alt='Home'/>

                <ContentWrapper>
                <Fade top> <h1>ARE<br/>YOU A<br/>WINNER?</h1></Fade>
                    <ScrollImageLink>
                    {/* <ScrollImageLink activeClass='active' to="about" offset={-116} exact='true'> */}
                        {/* <ScrollImage src={homeScroll} alt='Home Scroll'/> */}
                        <ScrollButton bgcolor='#F07832' onClick={()=>scrollPage(scrolls.TOP)}><BsChevronLeft color='white'/></ScrollButton>
                        <ScrollButton bgcolor='#1E2C39' onClick={()=>scrollPage(scrolls.DOWN)}><BsChevronRight  color='white'/></ScrollButton>
                    </ScrollImageLink>
                </ContentWrapper>

            </HomeWrapper>
        </HomeContainer>
    )
}

export default Home
