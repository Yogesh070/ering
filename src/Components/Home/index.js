import React from 'react'
import home from '../../images/home.png'
import homeScroll from '../../images/homeScroll.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeContainer, HomeWrapper, HomeImage, ContentWrapper, ScrollImageLink, ScrollImage} from './HomeElements'


const Home = () => {
    return (
        <HomeContainer id='home'>
            <HomeWrapper>
                <HomeImage src={home} alt='Home'/>

                <ContentWrapper>
                    <h1>ARE<br/>YOU A<br/>WINNER?</h1>
                    <ScrollImageLink activeClass='active' to="about" offset={-116} exact='true'>
                        <ScrollImage src={homeScroll} alt='Home Scroll'/>
                    </ScrollImageLink>
                </ContentWrapper>
            </HomeWrapper>
        </HomeContainer>
    )
}

export default Home
