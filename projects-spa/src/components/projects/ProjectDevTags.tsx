import { Space, Tag, Typography } from "antd";
import type { DevTag } from "../../interfaces/Project";
const { Text } = Typography;

const ProjectDevTags = ({ tags }: { tags: DevTag[] }) => {
    return (
        <div style={{ marginBottom: 12 }}>
            <Text strong style={{ display: "block", marginBottom: 4 }}>
                Project Type:
            </Text>

            {tags.length > 0 ? (
                <Space size={[4, 8]} wrap>
                    {tags.map((tag, index) => (
                        <Tag key={index} color="blue">
                            {tag}
                        </Tag>
                    ))}
                </Space>
            ) : (
                <Tag key="no_tags" color="blue">
                    Other
                </Tag>
            )}
        </div>
    )
}

export default ProjectDevTags;