"use client";
import Transition from "./components/Transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"
import Link from "next/link";
import TypewriterComponent from "typewriter-effect"
import { socials } from "./const/index";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Hero =  () => {
    return (
        <Transition>
            <section className="max-w-screen-xl mx-auto h-max mt-20">
                <div className="h-full">
                    <div className="flex max-lg:flex-col justify-between max-md:justify-center md:items-center mx-4">
                        <div className="flex flex-col w-full max-lg:mt-6 max-lg:mb-8">
                        <h1 className="font-semibold max-md:mt-2 w-full text-5xl max-md:text-4xl max-sm:text-3xl max-xs:text-xl max-lg:text-center max-md:font-semibold linear">
                            Hi, I&apos;m <TypewriterComponent options={{loop: true}} onInit={(typewriter) => {
                                        typewriter.typeString("Mohamed Abobakr")
                                        .pauseFor(100)
                                        .deleteAll()
                                        .typeString("Front End Developer")
                                        .pauseFor(100)
                                        .deleteAll()
                                        .start();
                                    }}
                                    />
                        </h1>
                        <div className="flex flex-col max-lg:items-center mt-16 max-lg:mt-12">
                            <ul className="flex items-center gap-8">
                                {socials.map(({ name, href }, key) => (
                                    <li key={key} className="text-white hover:text-[#ffb703] transition-colors duration-300">
                                        <Link href={href}><FontAwesomeIcon size={"2x"} icon={name} /></Link>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-max cursor-pointer py-2 px-6 border-[3px] rounded-3xl li text-lg max-lg:text-sm max-lg:py-2.5 hover:bg-[#ffb703] hover:text-black mt-8">
                                <Link href={"/assets/CV.pdf"} download={"CV"} target="_blank" className="flex gap-x-2 justify-center items-center">
                                    <FontAwesomeIcon size="md" icon={faDownload} className="relative bottom-[.8px]" />
                                    CV
                                </Link>
                            </button>
                        </div>
                        </div>
                        <div className="flex justify-center w-full pointer-events-none max-lg:-order-1 max-2xl:mb-4 max-lg:mb-0">
                            <Image 
                                src="/assets/imgs/Me.webp" 
                                width={600} 
                                height={550} 
                                alt="me" 
                                className="max-lg:w-[70%] max-md:w-[50%] border-orange-700"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Transition>
    )
}

export default Hero
