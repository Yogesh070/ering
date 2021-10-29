import React, {useState} from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import HomePage from '../Components/Home';
import About from '../Components/About'
import Services from '../Components/Services/ServicesElement'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
import Image from '../Components/Gallery/Image';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} isVisible={isVisible} toggle={toggle} />
      <HomePage/>
      <About/>
      <Services/>
      <Image/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default Home
