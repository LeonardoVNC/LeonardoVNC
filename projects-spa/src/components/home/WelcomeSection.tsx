import { Card, Col, Row, Typography } from "antd";
import ProfileInfo from "../../components/ProfileInfo";
import useProfileInfo from "../../hooks/useProfileInfo";
import { useEffect, useState } from "react";


const { Title, Paragraph } = Typography;

const WelcomeSection = () => {
    const [name, setName] = useState("")
    const [secondaryName, setSecondaryName] = useState("")
    const [avatar, setAvatar] = useState("")
    const [descriptions, setDescriptions] = useState([""])
    const { getName, getSecondaryName, getAvatar, getDescription } = useProfileInfo();

    const loadInfo = () => {
        setName(getName());
        setSecondaryName(getSecondaryName());
        setAvatar(getAvatar());
        setDescriptions(getDescription());
    }

    useEffect(() => {
        loadInfo();
    }, [])

    return (
        <Card style={{ display: "flex", overflow: "hidden", padding: 8 }}>
            <Row gutter={[16, 16]} align="middle">
                <Col>
                    <ProfileInfo
                        photoURL={avatar}
                        name={name}
                        imgSize={120}
                        fontSize={24}
                    />
                </Col>
                <Col>
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                        <Title level={2} style={{ marginRight: 8 }}>
                            Hello there, I'm {secondaryName}
                        </Title>
                        <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35" />
                    </div>
                    {descriptions.map((desc, index) => (
                        <Paragraph key={`desc-${index}`}>
                            {desc}
                        </Paragraph>
                    ))}
                </Col>
            </Row>
        </Card>
    );
}

export default WelcomeSection;