import { Card, Typography } from "antd";
import type { Project } from "../../interfaces/Project";
import ProjectDevTags from "./ProjectDevTags";
import ProjectSkillTags from "./ProjectSkillTags";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const ProjectCard = ({ project }: { project: Project }) => {
    const navigate = useNavigate();

    const goToProject = () => {
        navigate(`${project.id}`)
    }

    return (
        <Card
            style={{
                width: "100%",
                maxWidth: 490,
                borderRadius: 12,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
            onClick={goToProject}
            hoverable
        >
            <Title level={4} >
                {project.title}
            </Title>

            <Paragraph
                ellipsis={{ rows: 2, expandable: false }}
                style={{ marginBottom: 16, color: "#666" }}
            >
                {project.descriptionPar[0]}
            </Paragraph>

            <ProjectDevTags tags={project.devTag} />
            <ProjectSkillTags tags={project.skills} limit={5}/>
        </Card>
    );
};

export default ProjectCard;
