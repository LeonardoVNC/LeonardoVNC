import { useEffect, useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import ProjectList from "../../components/projects/ProjectList";
import useProjects from "../../hooks/useProjects";
import { Spin, Typography } from "antd";
import ProjectFilters from "../../components/projects/ProjectFilters";
import type { Project } from "../../interfaces/Project";

const ProjectsPage = () => {
    const { projectList } = useProjects();
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const { Text } = Typography;

    useEffect(() => {
        setLoading(projectList.length == 0)
    }, [projectList])

    return (
        <PageTemplate
            title="Projects"
            subtitle="Take a look at the projects I've worked on."
        >
            {loading ? (
                <>
                    <div
                        className="flex justify-center"
                        style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
                    >
                        <Spin />
                        <Text>
                            Please wait
                        </Text>
                    </div>
                </>
            ) : (
                <>
                    <ProjectFilters projects={projectList} onFilterChange={setFilteredProjects} />
                    <ProjectList projects={filteredProjects} />
                </>
            )}
        </PageTemplate>
    );
};

export default ProjectsPage;
