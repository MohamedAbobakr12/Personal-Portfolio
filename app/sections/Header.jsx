"use client"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
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
                    <Link href="/" className="md:z-30">
                        <Image 
                            src="/assets/imgs/logo.png" 
                            alt="Logo" 
                            width={50} 
                            height={50} 
                        />
                    </Link>

                    <ul className="flex justify-center items-center h-full gap-20 max-lg:gap-16 max-md:hidden w-full" id="navMenu">
                        <li className="li">
                            <Link href="#home">Home</Link>
                        </li>
                        <li className="li">
                            <Link href="#about">About Me</Link>
                        </li>
                        <li className="li">
                            <Link href="#works">Works</Link>
                        </li>
                        <li className="li">
                            <Link href="#contact">Contact</Link>
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
                    <Link href="#contact" className="flex max-w-md justify-center items-center w-40 cursor-pointer py-2 border-[3px] rounded-full li text-lg max-lg:text-sm max-lg:py-2.5 hover:bg-blue-100 hover:text-white">Contact Us</Link>
                </div>
                {isClick && (
                    <ul className="fixed flex-col items-center left-0 w-full pt-6 bg-[#219ebc] shadow-4xl md:hidden">
                        <li className="li py-2">
                            <Link href="#home" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="li py-2">
                            <Link href="#about" onClick={handleLinkClick}>About Me</Link>
                        </li>
                        <li className="li py-2">
                            <Link href="#works" onClick={handleLinkClick}>Works</Link>
                        </li>
                        <li className="li py-2">
                            <Link href="#contact" onClick={handleLinkClick}>Contact</Link>
                        </li>
                    </ul>
                    )}
            </nav>
        </header>
    )
}

export default Header