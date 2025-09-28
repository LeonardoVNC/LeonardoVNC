import { Card, Typography,  Divider } from "antd";
import type { Project } from "../../interfaces/Project";
import ProjectDevTags from "./ProjectDevTags";
import ProjectSkillTags from "./ProjectSkillTags";
import ProjectRepos from "./ProjectRepos";

const { Title, Paragraph } = Typography;

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Card
            style={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 12,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
            hoverable
        >
            <Title level={4} >
                {project.title}
            </Title>

            <Paragraph
                ellipsis={{ rows: 2, expandable: true }}
                style={{ marginBottom: 16, color: "#666" }}
            >
                {project.description}
            </Paragraph>

            <ProjectDevTags tags={project.devTag} />
            <ProjectSkillTags tags={project.skills} />

            <Divider style={{ margin: "12px 0" }} plain />

            <ProjectRepos repos={project.repos}/>
        </Card>
    );
};

export default ProjectCard;
