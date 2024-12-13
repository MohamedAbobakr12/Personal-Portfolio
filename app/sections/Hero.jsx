"use client"
import Image from "next/image"
import TypewriterComponent from "typewriter-effect"


const Hero = () => {
    return (
        <section className="max-w-screen-xl max-md:max-w-screen-sm mx-auto h-[675px] mt-20" id="home">
            <div className="h-full">
                <div className="flex h-full md:items-center max-md:block mx-4">
                    <h1 className="font-semibold max-md:mt-16 w-full text-5xl max-md:text-4xl max-md:text-center max-md:font-semibold linear">
                        Hi, I'm <TypewriterComponent options={{loop: true}} onInit={(typewriter) => {
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

                    <div className="flex max-md:mx-auto w-full pointer-events-none pt-10 max-md:w-[75%] max-md:my-24">
                        <Image 
                            src="/assets/imgs/Me.png" 
                            width={550} 
                            height={550} 
                            alt="me" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero