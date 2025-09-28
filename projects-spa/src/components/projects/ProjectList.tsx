import { Empty } from "antd";
import type { Project } from "../../interfaces/Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
    if (projects.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <Empty
                    description="No se han cargado proyectos."
                />
            </div>
        );
    }

    return (
        <div 
            className="flex justify-center" 
            style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}
        >
            {projects.map((project, index) => (
                <ProjectCard
                    key={`${project.title}-${index}`}
                    project={project}
                />
            ))}
        </div>
    );
};

export default ProjectList;
