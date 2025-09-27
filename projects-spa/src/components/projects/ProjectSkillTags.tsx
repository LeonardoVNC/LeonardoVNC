import { Space, Typography } from "antd";
import type { SkillTag } from "../../interfaces/Project";
import SkillTagFactory from "./SkillTagFactory";
import { useMemo } from "react";
const { Text } = Typography;

const ProjectSkillTags = ({ tags }: { tags: SkillTag[] }) => {
    const skillTags = useMemo(() => {
        return <Space size={[4, 8]} wrap style={{ justifyContent: "flex-start" }}>
            {tags.slice(0, 5).map((skill) => (
                <SkillTagFactory tag={skill} />
            ))}
        </Space>
    }, [tags])

    return (
        <div style={{ marginBottom: 16 }}>
            <Text strong style={{ display: "block", marginBottom: 4 }}>
                Skills and Tools:
            </Text>
            {skillTags}
        </div>
    )
}

export default ProjectSkillTags;