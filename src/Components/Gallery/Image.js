import React, { Component } from 'react'
import Slider from 'react-slick'

import './Image.css'
import Image1 from '../../images/slider/image1.jpg'
import Image2 from '../../images/slider/image2.jpg'
import Image3 from '../../images/slider/image3.jpg'

export default class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
            });
        }

    render() {
        return (
            <>
                <div id='gallery' className='container-fluid p-0 m-0 bg-black'>
                    <div id="video-section">
                        <Slider
                            arrows={false}
                            swipe={false}
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                        >
                            <div className='container-fluid m-0 p-0'>
                                <img src={Image1} alt="" className='img-fluid vw-100'/>
                            </div>

                            <div className='container-fluid m-0 p-0'>
                                <img src={Image2} className='img-fluid vw-100' alt=""/>
                            </div>
                            <div className='container-fluid m-0 p-0'>
                                <img src={Image3} class="img-fluid vw-100" alt=""/>
                            </div>
                            <div className='container-fluid p-0 m-0'>
                            <img src={Image1} class="img-fluid vw-100" alt=""/>
                            </div>
                        </Slider>
                    
                    </div>
                    <div className="container padding bottomDiv">
                        <Slider 
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={3}
                        swipe={false}
                        swipeToSlide={false}
                        focusOnSelect={true}
                        >
                            <div class="container" >
                                <div class="card" >
                                    <img src={Image1} class="card-img-top" alt=""/>
                                </div>
                            </div>

                            <div class="container">
                                <div class="card" >
                                    <img src= {Image2} class="card-img-top" alt=""/>
                                </div>
                            </div>
                            <div class="container">
                                <div class="card" >
                                    <img src={Image3} class="card-img-top" alt=""/>
                                </div>
                            </div>
                            <div class="container">
                                <div class="card" >
                                    <img src={Image1} class="card-img-top" alt=""/>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </>
        )
    }
}
