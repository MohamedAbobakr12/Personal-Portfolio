import Transition from "@/app/components/Transition";
import Counter from "@/app/components/Counter";
import { repoCount, commitCount } from "@/app/const/Octokit";
import { length } from "@/app/const/index";


const About = () => {
    return (
        <Transition>
            <section className="max-w-screen-xl max-h-full mx-auto mt-20 mb-14">
                <div className="h-full">
                    <div>
                        <h1 className="text-6xl max-xl:text-5xl max-md:text-4xl text-[#ffb703] font-semibold ml-1 max-lg:ml-2">About Me:</h1>

                        <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs max-xs:text-xs text-blue-300 mx-2 max-lg:mx-6 max-sm:mx-2 my-5">
                            I&apos;m Mohamed Abobakr Mohamed, a dedicated web developer with a strong foundation in <span className="text-yellow">HTML, CSS, and JavaScript.</span> I&apos;m proficient in modern frontend frameworks like <span className="text-yellow">React</span> and <span className="text-yellow">Next.js</span>, and I leverage the power of <span className="text-yellow">Tailwind CSS</span> for rapid and stylish UI development. I&apos;m also well-versed in version control with <span className="text-yellow">Git</span> and <span className="text-yellow">GitHub</span>. I&apos;m eager to contribute my skills to innovative projects and create exceptional user experiences.
                        </p>
                    </div>

                    <h3 className="text-[#ffb703] text-5xl max-lg:text-2xl max-md:text-lg max-sm:text-sm font-semibold ml-2 mt-8">Education:</h3>
                    <ul className="flex flex-col gap-y-6 text-[#ffb703] text-3xl max-lg:text-2xl max-md:text-lg max-sm:text-sm font-semibold ml-4 mt-6">
                        <li>
                            <h3>
                                2019 - 2021:<span className="text-blue-200"> MICA</span>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                2022 - Now:<span className="text-blue-200"> New Cairo Technological University</span>
                            </h3>
                        </li>
                    </ul>
                    <h1 className="text-6xl max-lg:text-5xl max-md:text-4xl text-center text-[#ffb703] font-semibold mt-12 ml-1 max-lg:ml-2">Information</h1>
                    <div className="grid grid-cols-4 max-xl:grid-cols-2 max-xs:grid-cols-1 gap-x-6 max-md:gap-x-4 max-ms:gap-x-2 gap-y-8 max-md:gap-y-6 max-y-4 text-center font-semibold mt-12 mb-14 max-md:mx-2">
                        <div className="list-works">
                            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-blue-200">Years of Experience</h1>
                            <p className="span">+2 Years</p>
                        </div>
                        <div className="list-works">
                            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-blue-200">Projects</h1>
                            <p className="span"><Counter end={repoCount} duration={5} /></p>
                        </div>
                        <div className="list-works">
                            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-blue-200">Commits</h1>
                            <p className="span"><Counter end={commitCount} duration={4} /></p>
                        </div>
                        <div className="list-works">
                            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-blue-200">Technologies</h1>
                            <p className="span"><Counter end={length} duration={6} /></p>
                        </div>
                    </div>   
                </div>
            </section>
        </Transition>
    )
}

export default About