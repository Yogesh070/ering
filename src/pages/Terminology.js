import React, {useState} from 'react'
import Ter from '../Components/Terminology/TerminologyElement.js'
import TerNavbar from '../Components/TerNavbar'
import TerSidebar from '../Components/TerSidebar'
import TerFooter from '../Components/TerFooter'

const Terminology = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () =>{
    setIsOpen(!isOpen);
    setIsVisible(!isVisible);
    }

    return (
        <>
        <TerSidebar isOpen={isOpen} isVisible={isVisible} toggle={toggle}/>
        <TerNavbar toggle={toggle}/>
        <Ter/>
        <TerFooter/>
        </>
    )
}

export default Terminology
