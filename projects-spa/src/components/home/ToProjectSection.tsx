import { FolderOpenOutlined } from "@ant-design/icons";
import { Button, Card, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";


const { Title, Paragraph } = Typography;

const ToProjectSection = () => {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate('/projects')
    }

    return (
        <Card style={{
            overflow: "hidden",
            width: "100%",
            height: "100%",
            padding: 12,
            margin: "auto"
        }}>
            <Title level={3} style={{ textAlign: "center" }}>
                Check my Projects!
            </Title>
            <Paragraph style={{ textAlign: "center", marginBottom: 16, color: "#AAA" }}>
                Mobile, Web and other projects I've worked on, each one have details of the skills and tools I've learned. It also haves a link to the GitHub Repository of the project.
            </Paragraph>

            <Space size="large" style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    type="primary"
                    onClick={goToProjects}
                    icon={<FolderOpenOutlined />}
                >
                    Go to Projects
                </Button>
            </Space>
        </Card>
    );
}

export default ToProjectSection;