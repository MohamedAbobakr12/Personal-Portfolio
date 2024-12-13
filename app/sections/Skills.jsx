import Image from "next/image"
import { skills } from "../constants"


const Skills = () => {
    return (
        <section className="max-w-screen-xl max-md:max-w-screen-sm max-h-max mx-auto mt-20">
            <div className="w-full h-full">
                <div className="w-full mx-5 max-md:mx-auto">
                    <h1 className="text-blue-200 text-7xl max-md:text-center max-md:text-4xl font-semibold linear">Golden Skills</h1>
                    <p className="mt-6 max-md:text-center text-lg text-blue-300 ">As a front-end developer, I focus on creating intuitive, responsive, and visually appealing web experiences</p>
                </div>

                <div className="w-full max-w-max my-12 mx-auto rounded-full border-4 border-blue-200 max-md:max-w-sm">
                    <Image 
                        src="/assets/imgs/robot.png" 
                        width={500} 
                        height={500} 
                        alt="robot image" 
                        className="flex items-center justify-center drop-shadow-[5px_10px_35px_black]"
                    />
                </div>

                <div className="max-h-max my-12 mx-8">
                    <div className="flex items-center flex-wrap my-8 mx-4 gap-x-16">
                        {skills.map(({ key, link, name, alt, color }) => (
                            <div key={key} className="mx-auto mb-6 px-2">
                            <div style={{ borderColor: color , backgroundColor: "#F2F2F2"}} className="mx-auto my-4 p-12 cursor-pointer rounded-full border-4 hover:shadow-3xl hover:-translate-y-6 transition-all">
                                <Image 
                                    src={link} 
                                    width={115} 
                                    height={115} 
                                    alt={alt} 
                                    className="drop-shadow-[-8px_5px_8px_gray]" 
                                />
                            </div>
                                <h1 style={{color: color}} className="text-center pb-2 mb-2 text-2xl font-semibold">{name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills