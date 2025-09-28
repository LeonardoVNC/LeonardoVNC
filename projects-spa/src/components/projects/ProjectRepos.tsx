import { Button, Space } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import type { RepoInfo } from "../../interfaces/Project";

const ProjectRepos = ({ repos }: { repos: RepoInfo[] }) => {

    return (
        <div>
            <Space wrap>
                {repos.map((repo, index) => (
                    <>
                    <Button
                        key={index}
                        type="link"
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<GithubOutlined />}
                        style={{ padding: 0 }}
                    >
                        {repos.length > 1 ? repo.desc : "View Repo"}
                    </Button></>
                ))}
            </Space>
        </div>
    )
}

export default ProjectRepos;