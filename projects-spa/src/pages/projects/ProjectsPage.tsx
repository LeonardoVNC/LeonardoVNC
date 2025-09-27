import PageTemplate from "../../components/PageTemplate";
import rawProjects from '../../../public/data/projects.json' assert { type: 'json' };
import type { Project } from "../../interfaces/Project";
import { getProjects } from "../../helpers/validateProjects";
import ProjectCard from "../../components/projects/ProjectCard";

const ProjectsPage = () => {
    const projectList: Project[] = getProjects(rawProjects);
    
    if (projectList.length < rawProjects.length) {
        console.warn('Algunos proyectos fueron filtrados por tags inválidos, verifica la estructura');
    }

    return (
        <PageTemplate
            title="Projects"
            subtitle="Take a look at the projects I've worked on."
        >
            {projectList.map((project: Project) => (
                <ProjectCard
                    project={project}
                />
            ))}
        </PageTemplate>
    );
};

export default ProjectsPage;
