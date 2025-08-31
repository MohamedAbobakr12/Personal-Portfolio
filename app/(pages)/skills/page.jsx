import Image from "next/image";
import { skills } from "@/app/const/index";
import Transition from "@/app/components/Transition";

const Skills = () => {
    return (
        <Transition>
            <section className="flex flex-col max-w-7xl h-max mx-auto mt-20 mb-14">
                <div className="h-full">
                    <div className="w-full mx-5 max-md:mx-auto">
                        <h1 className="text-blue-200 max-md:text-center text-7xl max-md:text-4xl font-semibold">Golden Skills</h1>
                        <p className="mt-6 max-md:text-center md:text-lg text-blue-300 max-md:mx-2">
                            As a front-end developer, I focus on creating intuitive, responsive, and visually appealing web experiences
                        </p>
                    </div>

                    <div className="flex max-lg:flex-col justify-center max-lg:items-center mt-20 max-lg:mt-14 max-md:mt-12 mx-auto">
                        <div className="w-[40%] max-sm:w-[80%]">
                            <Image 
                                src="/assets/imgs/robot.webp" 
                                width={500} 
                                height={500} 
                                alt="robot image" 
                                className="max-xs:w-60 drop-shadow-[5px_10px_15px_black] hover:drop-shadow-[5px_10px_35px_cyan] transition-all duration-300"
                            />
                        </div>

                        <div className="max-h-max mx-8 max-xl:mx-6 max-md:mx-4 max-sm:mx-1">
                            <div className="grid grid-cols-3 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-x-10 gap-y-4 max-2xl:gap-x-14 max-xl:gap-x-6 max-lg:gap-x-8 max-md:gap-x-8 max-sm:gap-x-4 my-8 mx-auto">
                                {skills.map(({ link, alt, color }, key) => (
                                    <div key={key} className="flex flex-col mx-auto mb-6 px-2">
                                        <div style={{ borderColor: color , backgroundColor: "#F2F2F2" }} className={`p-4 max-sm:p-4 cursor-pointer rounded-xl border-[3px] transition-all duration-300 shadow-2xl mx-auto`}>
                                            <Image 
                                                src={link} 
                                                width={45} 
                                                height={45} 
                                                alt={alt} 
                                                className="w-24 max-md:w-28 max-sm:w-20 drop-shadow-[-8px_5px_8px_gray]" 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Transition>
    )
}

export default Skills