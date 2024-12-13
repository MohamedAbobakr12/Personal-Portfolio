"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import { useState } from "react"


const Header = () => {
    const [isClick, setIsClick] = useState(false)
    const navToggle = document.getElementById("navToggle")

    const toggleButton = () => {
        setIsClick(!isClick)
    }

    const handleLinkClick = () => {
        setIsClick(false)
    }

    return (
        <header className="flex fixed justify-center w-full h-16 bg-[#219ebc] z-50">
            <nav className="flex relative h-full max-sm:px-10 max-lg:px-6 max-2xl:px-4 max-w-6xl md:w-full w-full z-50">
                <div className="flex items-center justify-between w-full z-30">
                    <a href="/" className="md:z-30">
                        <Image 
                            src="/assets/imgs/logo.png" 
                            alt="Logo" 
                            width={50} 
                            height={50} 
                        />
                    </a>

                    <ul className="flex justify-center items-center h-full gap-20 max-lg:gap-16 max-md:hidden w-full" id="navMenu">
                        <li className="li">
                            <a href="#home">Home</a>
                        </li>
                        <li className="li">
                            <a href="#about">About Me</a>
                        </li>
                        <li className="li">
                            <a href="#works">Works</a>
                        </li>
                        <li className="li">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    <button className="flex relative right-0 text-4xl md:z-20 md:hidden" onClick={toggleButton}>
                        {!isClick ? (
                            <FontAwesomeIcon 
                                icon={faBars} 
                                width={50} 
                                height={50} 
                                style={{color: "#023047"}} 
                                className="cursor-pointer" 
                            />
                        ) : (
                            <FontAwesomeIcon 
                                icon={faClose} 
                                width={50} 
                                height={50} 
                                style={{color: "#023047"}} 
                                className="cursor-pointer" 
                            />
                        )}
                    </button>
                </div>
                <div className="flex left-16 items-center max-lg:ml-10 max-md:hidden z-30">
                    <a href="#contact" className="flex max-w-md justify-center items-center w-40 cursor-pointer py-2 border-[3px] rounded-full li text-lg max-lg:text-sm max-lg:py-2.5 hover:bg-blue-100 hover:text-white">Contact Us</a>
                </div>
                {isClick && (
                    <ul className="fixed flex-col items-center left-0 w-full pt-6 bg-[#219ebc] shadow-4xl md:hidden">
                        <li className="li py-2">
                            <a href="#home" onClick={handleLinkClick}>Home</a>
                        </li>
                        <li className="li py-2">
                            <a href="#about" onClick={handleLinkClick}>About Me</a>
                        </li>
                        <li className="li py-2">
                            <a href="#works" onClick={handleLinkClick}>Works</a>
                        </li>
                        <li className="li py-2">
                            <a href="#contact" onClick={handleLinkClick}>Contact</a>
                        </li>
                    </ul>
                    )}
            </nav>
        </header>
    )
}

export default Header