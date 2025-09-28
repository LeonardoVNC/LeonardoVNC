import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import type { Project } from "../../interfaces/Project";
import useProjects from "../../hooks/useProjects";
import PageTemplate from "../../components/PageTemplate";
import { Card, Divider, Spin, Typography } from "antd";
import ProjectRepos from "../../components/projects/ProjectRepos";
import ProjectSkillTags from "../../components/projects/ProjectSkillTags";

const { Title, Paragraph, Text } = Typography;

function ProjectDetailPage() {
    const [loading, setLoading] = useState(true)
    const [project, setProject] = useState<Project>()
    const { getProjectByID } = useProjects();

    const { id } = useParams();

    const fetchProject = async () => {
        if (!id) return

        setLoading(true)
        const project = await getProjectByID(id);
        if (!project) return

        setProject(project)
        setLoading(false)
    }

    useEffect(() => {
        fetchProject();
    }, [id])

    const mainImage = useMemo(() => {
        if (!project?.imgURL) return <></>

        return <>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                margin: 20,
            }}>
                <img
                    src={project?.imgURL[0]}
                    style={{
                        height: "auto",
                        maxWidth: "35%",
                        maxHeight: "40%",
                    }}
                    alt={`${project?.title || "Proyecto"} - Imagen de vista previa`}
                    loading="lazy"
                />
            </div>
        </>

    }, [project])

    const description = useMemo(() => {
        if (!project) return <></>

        return <>
            <Title level={4}>
                Description:
            </Title>
            {project.descriptionPar.map((descPar, index) => (
                <Paragraph key={`${project.title}-DescPar${index}`}>
                    {descPar}
                </Paragraph>
            ))}
            <Divider style={{ margin: "12px 0" }} plain />
        </>
    }, [project])

    if (loading) {
        return (
            <PageTemplate
                title="Loading"
                subtitle="Loading project info"
            >
                <div
                    className="flex justify-center"
                    style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
                >
                    <Spin />
                    <Text>
                        Please wait
                    </Text>
                </div>
            </PageTemplate>
        )
    }

    return (
        <PageTemplate
            title={project?.title}
            subtitle={`Check more info about ${project?.title}`}
        >
            <Card
                style={{ width: "100%", overflow: "hidden", margin: "8", padding: "16" }}>
                <Title level={3}>
                    {project?.title}
                </Title>

                {mainImage}

                <ProjectSkillTags tags={project?.skills || []} />
                <Divider style={{ margin: "12px 0" }} plain />

                {description}

                <ProjectRepos repos={project?.repos || []} />
            </Card>
        </PageTemplate>
    );
}

export default ProjectDetailPage;