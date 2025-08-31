import Transition from "@/app/components/Transition";


const page = () => {
    return (
        <Transition>
            <section className="max-w-5xl h-max mx-auto mt-20 mb-14">
                <div className="">
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 max-md:gap-x-2 gap-y-8 max-md:gap-y-6 max-y-4 font-semibold max-xl:mx-2 max-md:mx-6 max-sm:mx-4 max-xs:mx-2">
                        <div className="services">
                            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-[#ffb703]">Front-End Developer</h1>
                            <p className="max-md:text-sm mt-4 text-blue-200">
                                I specialize in building fast, responsive, and visually appealing user interfaces with modern technologies. My focus is on creating seamless user experiences that are a pleasure to interact with.
                            </p>
                        </div>
                        <div className="services">
                            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-[#ffb703]">Back-End Developer</h1>
                            <p className="max-md:text-sm mt-4 text-blue-200">
                                My back-end skills are centered on creating robust, secure, and scalable server-side applications to power the front-end. I design and build the unseen architecture that makes applications function flawlessly.
                            </p>
                        </div>
                        <div className="services">
                            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-[#ffb703]">UI/UX Designer</h1>
                            <p className="max-md:text-sm mt-4 text-blue-200">
                            Before writing a single line of code, I work to create a thoughtful and intuitive user experience. My process focuses on understanding your audience to design interfaces that are not only beautiful but also functional and easy to navigate.
                            </p>
                        </div>
                        <div className="services">
                            <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-[#ffb703]">Support & Maintenance</h1>
                            <p className="max-md:text-sm mt-4 text-blue-200">
                                My commitment to your project doesn&apos;t end after launch. I offer ongoing maintenance and support to ensure your application remains secure, up-to-date, and performs at its best.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Transition>
    )
}

export default page