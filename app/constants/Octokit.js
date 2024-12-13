import { Octokit } from "octokit"

export const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
    })

const getRepos = await octokit.request('GET /users/{username}/repos', {
    username: "MohamedAbobakr12",
    headers: {
        'X-GitHub-Api-Version': '2022-11-28',
    }
})
const reposArray = getRepos.data;
export const repoCount = reposArray.length;


export let commitCount = 0
const commitCounts = await Promise.all(
    reposArray.map(async (repo) => {
        if (repo.size === 0) {
            return { repoName: repo.name, commitCount: 0 };
        }
        const commits = await octokit.request("GET /repos/{owner}/{repo}/commits", {
            owner: "MohamedAbobakr12",
            repo: repo.name,
        });
        const repoCommitCount = commits.data.length;
        commitCount += repoCommitCount

        return { repoName: repo.name, commitCount: repoCommitCount };
    })
);

