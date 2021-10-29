import React from 'react'
import line from '../../images/aboutLine.svg'
import circle from '../../images/aboutCircle.svg'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {PageContainer, ImageContainer, Image, ContentContainer, Topic, TopicVisible, TwoCardsContainer, CardWrapper, CardFront, CardBack, TextWrapper, Line, Header, Paragraph, OneCardContainer, CardWrapper2, CardFront2, CardBack2, ContentWrapper, ContentHeader, ContentButton, Line2, HeaderText, ParagraphText, CallButton} from './AboutElements'

const About = () => {
    return (
            <PageContainer id='about'>
                <ImageContainer>
                    <Image src={circle} alt='Circle'/>
                    <ContentContainer>

                        <Topic>THE ENGAGEMENT RING TRANSLATION</Topic>
                        <TopicVisible>THE ENGAGEMENT<br/>RING TRANSLATION</TopicVisible>

                        <TwoCardsContainer>
                            <CardWrapper>
                                <CardFront>
                                    <TextWrapper>
                                        <Header>
                                            <Line src={line} alt='Line'/>ARE YOU A WINNER? 
                                        </Header>
                                        <Paragraph>Connect if our superlative approach to excellence in language services resonates with your profound awareness of what high quality means for advancing your growth, prestige, product, solution, revenue, return on investment, brand image, peace of mind, or project. We match if you seek the best for yourself, your business, your project, your product.
                                        </Paragraph>
                                    </TextWrapper>
                                </CardFront>
                                <CardBack/>
                            </CardWrapper>

                            <CardWrapper>
                                <CardFront>
                                    <TextWrapper>
                                        <Header>
                                            <Line src={line} alt='Line'/>NOT A WINNER? 
                                        </Header>
                                        <Paragraph>Keep searching if you are that business, woman or man of average stuffs. We are here not for everybody but for winners. We help you move to the next level of achievement if you are an ambitious, self-demanding, and success-driven business, organization, or individual. We hope to attract ONLY a handful of you who are aware of the power of investing in quality for dramatic business, project, product, solution, or career outcomes.
                                        </Paragraph>
                                    </TextWrapper>
                                </CardFront>
                                <CardBack/>
                            </CardWrapper>
                        </TwoCardsContainer>

                        <OneCardContainer>
                            <CardWrapper2>
                                <CardFront2>
                                    <ContentWrapper>
                                        <ContentHeader>
                                            <HeaderText>
                                                <Line2 src={line} alt='Line'/>REACH OUT TO US NOW
                                            </HeaderText>
                                            <ParagraphText>Still sure about reaching out to The Engagement Ring Translations Ltd to have your translation, interpreting, voiceover, dubbing, copywriting and other language services problems solved for more success? If so, congratulations! You are a winner, we have the same mindset, and we speak your language.
                                            </ParagraphText>
                                        </ContentHeader>
                                        <ContentButton>
                                            <CallButton><BsFillTelephoneFill/>Talk to us now</CallButton>
                                        </ContentButton>
                                    </ContentWrapper>
                                </CardFront2>
                                <CardBack2/>
                            </CardWrapper2>
                        </OneCardContainer>

                    </ContentContainer>
                </ImageContainer>
            </PageContainer>
    )
}

export default About
