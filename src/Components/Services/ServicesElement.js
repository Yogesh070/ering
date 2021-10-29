import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import service from '../../images/services.jpg'
import line from '../../images/aboutLine.svg'
import '../Terminology/Terminology.css'

function Services() {
    return (
        <div id='services' className='container-fluid p-0 m-0'>
            <h1 className='small-text color-smoke-white color-black p-0 m-0'><img src={line} alt='Line'/> SERVICES</h1>
            <h1 className='title-text color-black color-smoke-white pb-3 m-0 '> Our Services</h1> 
            <img src={service} alt="services" className='img-fluid  vw-100 ' />
        </div>
    )
}

export default Services
