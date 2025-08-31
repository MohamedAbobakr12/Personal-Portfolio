"use client"
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { usePathname } from "next/navigation";


const Header = () => {
    const [isClick, setIsClick] = useState(false);
    const pathname = usePathname();

    const toggleButton = () => {
        setIsClick(!isClick)
    }

    const handleLinkClick = () => {
        setIsClick(false)
    }

    const isActive = (href) => {
        return pathname === href;
    }

    return (
        <dispatchEvent className="flex fixed justify-center w-full h-16 bg-[#219ebc] z-50">
            <nav className="flex h-full max-sm:px-10 max-lg:px-6 max-2xl:px-4 max-w-6xl md:w-full w-full z-50">
                <div className="flex items-center justify-between w-full z-30">
                    <Link href="/" className="min-w-max md:z-30">
                        <Image 
                            src="/assets/imgs/logo.webp" 
                            alt="Logo" 
                            width={50} 
                            height={50} 
                        />
                    </Link>

                    <ul className="flex justify-center items-center w-max h-full gap-x-20 max-lg:gap-x-14 max-md:hidden" id="navMenu">
                        <li className="li">
                            <Link href="/" className={`${isActive("/") ? "text-blue-100": ""}`}>Home</Link>
                        </li>
                        <li className="li">
                            <Link href="/about" className={`${isActive("/about") ? "text-blue-100": ""}`}>About</Link>
                        </li>
                        <li className="li">
                            <Link href="/services" className={`${isActive("/services") ? "text-blue-100": ""}`}>Services</Link>
                        </li>
                        <li className="li">
                            <Link href="/skills" className={`${isActive("/skills") ? "text-blue-100": ""}`}>Skills</Link>
                        </li>
                        <li className="li">
                            <Link href="/works" className={`${isActive("/works") ? "text-blue-100": ""}`}>Works</Link>
                        </li>
                    </ul>

                    <button className="flex relative right-0 text-4xl md:z-20 md:hidden" onClick={toggleButton}>
                        {!isClick ? (
                            <FontAwesomeIcon 
                                icon={faBars} 
                                width={50} 
                                height={50} 
                                className="cursor-pointer text-[#023047] hover:text-white transition-colors duration-300" 
                            />
                        ) : (
                            <FontAwesomeIcon 
                                icon={faClose} 
                                width={50} 
                                height={50} 
                                className="cursor-pointer text-[#023047] hover:text-white transition-colors duration-300" 
                            />
                        )}
                    </button>
                </div>
                {isClick && (
                    <ul className="flex fixed flex-col items-center gap-y-16 left-0 w-full pt-20 pb-12 bg-[#219ebc] shadow-4xl md:hidden">
                        <li className="li">
                            <Link href="/" className={`${isActive("/") ? "text-blue-100": ""}`} onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="li">
                            <Link href="/about" className={`${isActive("/about") ? "text-blue-100": ""}`} onClick={handleLinkClick}>About</Link>
                        </li>
                        <li className="li">
                            <Link href="/services" className={`${isActive("/services") ? "text-blue-100": ""}`} onClick={handleLinkClick}>Services</Link>
                        </li>
                        <li className="li">
                            <Link href="/skills" className={`${isActive("/skills") ? "text-blue-100": ""}`} onClick={handleLinkClick}>Skills</Link>
                        </li>
                        <li className="li">
                            <Link href="/works" className={`${isActive("/works") ? "text-blue-100": ""}`} onClick={handleLinkClick}>Works</Link>
                        </li>
                    </ul>
                    )}
            </nav>
        </dispatchEvent>
    )
}

export default Header