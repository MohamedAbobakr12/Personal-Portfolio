"use client";
import { useEffect, useState } from "react";
import { socials } from "../constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
    const [year, setYear] = useState(null);
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    }, [])

    return (
        <footer className="bg-blue-200 h-[150px] mt-20">
            <div className="flex justify-between max-w-screen-xl w-full h-full mt-8 mx-auto">
                <div className="grid text-blue-100 my-auto ml-6 gap-4">
                    <p className="text-lg max-md:text-sm font-semibold">&copy; Copyright Mohamed Abobakr. All rights reserved.</p>
                    <p className="text-lg max-md:text-sm font-semibold">{year} Made by Mohamed Abobakr.</p>
                </div>
                <ul className="flex items-center m-4 ml-6 gap-10">
                    {socials.map(({ key, name, href }) => (
                        <li key={key} className="text-4xl max-md:text-2xl text-white hover:text-blue-100 transition-all duration-300 hover:-translate-y-3">
                            <a href={href}><FontAwesomeIcon icon={name} /></a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer