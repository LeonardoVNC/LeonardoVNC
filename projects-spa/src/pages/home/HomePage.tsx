import { Row, Col } from "antd";
import ContactSection from "../../components/home/ContactSection";
import ToProjectSection from "../../components/home/ToProjectSection";
import WelcomeSection from "../../components/home/WelcomeSection";
import PageTemplate from "../../components/PageTemplate";

const HomePage = () => {
    return (
        <PageTemplate title="Home" subtitle="Welcome to my portfolio page">
            <Row gutter={[16, 16]} style={{ alignItems: "stretch" }}>
                <Col xs={24}>
                    <WelcomeSection />
                </Col>

                <Col xs={24} md={12}>
                    <ToProjectSection />
                </Col>
                <Col xs={24} md={12}>
                    <ContactSection />
                </Col>
            </Row>
        </PageTemplate>
    );
};

export default HomePage;
