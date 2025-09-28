import { Card, Typography, Space } from "antd";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import useProfileInfo from "../../hooks/useProfileInfo";

const { Title, Paragraph } = Typography;

const ContactSection = () => {
    const [github, setGithub] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const { getGitHub, getLinkedIn } = useProfileInfo();

    const getContactInfo = () => {
        const githubURL = getGitHub();
        if (!githubURL) return

        const linkedInURL = getLinkedIn();
        if (!linkedInURL) return

        setGithub(githubURL)
        setLinkedin(linkedInURL)
    }

    useEffect(() => {
        getContactInfo()
    }, [])

    return (
        <Card style={{
            overflow: "hidden",
            width: "100%",
            height: "100%",
            padding: 12,
            margin: "auto",
        }}>
            <Title level={3} style={{ textAlign: "center" }}>
                Contact Me
            </Title>
            <Paragraph style={{ textAlign: "center", marginBottom: 16, color: "#AAA" }}>
                If you are interested in my work, feel free to reach out to me through any of the following platforms:
            </Paragraph>
            <Space size="large" style={{ display: "flex", justifyContent: "center" }}>
                <a
                    href={linkedin}
                    target="_blank"
                    aria-label="LinkedIn"
                >
                    <LinkedinOutlined style={{ fontSize: 32, color: "#0A66C2" }} />
                </a>
                <a
                    href={github}
                    target="_blank"
                    aria-label="GitHub"
                >
                    <GithubOutlined style={{ fontSize: 32, color: "#000" }} />
                </a>
            </Space>
        </Card>
    );
};

export default ContactSection;
