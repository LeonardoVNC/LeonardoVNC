import { Button, Space } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const ProjectRepos = ({ repos }: { repos: string[] }) => {

    return (
        <div>
            <Space wrap>
                {repos.map((url, index) => (
                    <Button
                        key={index}
                        type="link"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<GithubOutlined />}
                        style={{ padding: 0 }}
                    >
                        View Repo
                    </Button>
                ))}
            </Space>
        </div>
    )
}

export default ProjectRepos;