import PageTemplate from "../../components/PageTemplate";
import rawProjects from '../../assets/data/projects.json' assert { type: 'json' };
import type { Project } from "../../interfaces/Project";
import { getProjects } from "../../helpers/validateProjects";
import ProjectList from "../../components/projects/ProjectList";
import useProjects from "../../hooks/useProjects";

const ProjectsPage = () => {
    // const projectList: Project[] = getProjects(rawProjects);
    const { projectList } = useProjects();
    
    if (projectList.length < rawProjects.length) {
        console.warn('Algunos proyectos fueron filtrados por tags inválidos, verifica la estructura');
    }

    return (
        <PageTemplate
            title="Projects"
            subtitle="Take a look at the projects I've worked on."
        >
            <ProjectList projects={projectList}/>
        </PageTemplate>
    );
};

export default ProjectsPage;
