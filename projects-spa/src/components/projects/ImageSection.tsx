import { Typography, Image, Row, Col } from "antd";

const { Title } = Typography;
const { PreviewGroup } = Image;

const baseURL = import.meta.env.BASE_URL;

const ImageSection = ({ title, images }: { title: string; images: string[] }) => {
    const IMAGE_SIZE = 220;

    return (
        <>
            <Title level={4}>
                {title}
            </Title>
            <PreviewGroup>
                <Row gutter={[16, 16]}>
                    {images.map((src, index) => (
                        <Col
                            key={index}
                            style={{ display: "flex" }}
                        >
                            <Image
                                src={`${baseURL}${src}`}
                                alt={`${title} - image ${index + 1}`}
                                style={{
                                    width: IMAGE_SIZE,
                                    height: IMAGE_SIZE,
                                    objectFit: "cover",
                                    borderRadius: 8,
                                }}
                                preview={true}
                            />
                        </Col>
                    ))}
                </Row>
            </PreviewGroup>
        </>
    );
};

export default ImageSection;
