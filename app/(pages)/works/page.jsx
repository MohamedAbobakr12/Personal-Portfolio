import Transition from "@/app/components/Transition";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/const";

const Works = () => {
    return (
        <Transition>
            <section className="flex max-w-6xl mx-auto h-max mt-20 mb-14">
                <div className="w-full h-full mx-4">
                    <h1 className="text-blue-200 max-lg:text-center text-7xl max-md:text-4xl font-semibold">Projects</h1>
                    <div className="flex flex-col w-full gap-y-24 mt-12">
                        {projects.map(({ title, technologies, source, url, thumb, alt}, key ) => (
                            <ProjectCard key={key} title={title} technologies={technologies} source={source} url={url} thumb={thumb} alt={alt} />
                        ))}
                    </div>
                </div>
            </section>
        </Transition>
    )
}

export default Works;