"use client";
import { repoCount, commitCount } from "../constants/Octokit";
import { length } from "../constants";


const Work = () => {
    return (
        <section className="max-w-screen-xl mx-auto h-full my-20" id="works">
            <div className="relative w-full h-full mx:auto">
                <div className="flex m-6 p-6 max-md:justify-center">
                    <h1 className="text-6xl font-semibold text-[#ffb703] max-w-max text-center cursor-pointer hover:underline underline-offset-8">My Works:</h1>
                </div>
                <ul className="flex flex-row flex-wrap justify-center gap-20 font-semibold text-4xl my-20 mx-5">
                    <li className="list-works">
                        <span>Projects</span>
                        <span className="span">{repoCount}</span>
                    </li>
                    <li className="list-works">
                        <span>Commits</span>
                        <span className="span">{commitCount}</span>
                    </li>
                    <li className="list-works">
                        <span>Technologies</span>
                        <span className="span">{length}</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Work;
