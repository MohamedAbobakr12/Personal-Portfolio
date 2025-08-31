import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, technologies, source, url, thumb, alt }) => {
    return (
        <div className="flex max-lg:flex-col justify-between max-lg:items-center">
            <div className="flex justify-center max-lg:items-center flex-col max-lg:order-1 mt-4">
                <h1 className="text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-xl text-[#ffb703] max-md:text-center font-semibold">{title}</h1>
                <div className="flex max-md:justify-center flex-wrap gap-x-4 gap-y-6 max-lg:gap-y-2 max-sm:gap-y-0">
                    {technologies.map(( tech, key) => (
                        <p key={key} className="max-lg:text-sm max-sm:text-xs text-blue-950 font-medium bg-[#ffb703] border-2 border-blue-200 rounded-lg p-4 max-lg:p-2 mt-4">{tech}</p>
                    ))}
                </div>
                <ul className="flex gap-x-4 mt-6">
                    <li className="border-2 rounded-2xl cursor-pointer p-3">
                        <Link href={source} target="_blank"><FontAwesomeIcon size={"xl"} icon={faGithub} className="text-[#ffb703]" /></Link>
                    </li>
                    <li className="border-2 rounded-2xl cursor-pointer p-3">
                        <Link href={url} target="_blank"><FontAwesomeIcon size={"xl"} icon={faLink} className="text-[#ffb703]" /></Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center items-center border rounded-lg p-8 shadow-2xl drop-shadow-[5px_10px_15px_black] pointer-events-none">
                <Image width={400} height={200} src={thumb} alt={alt} />
            </div>
        </div>
    )
}

export default ProjectCard