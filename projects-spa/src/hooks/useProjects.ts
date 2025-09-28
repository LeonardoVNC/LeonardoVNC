import type { Project } from "../interfaces/Project";
import { getProjects } from "../helpers/validateProjects";
import rawProjects from '../../public/data/projects.json' assert { type: 'json' };

const useProjects = () => {
    const getProjectByID = async (id: string) => {
        const projectList: Project[] = getProjects(rawProjects);
        for (let i = 0; i < projectList.length; i++) {
            if(projectList[i].id == id) {
                return projectList[i]
            }
        }
        console.error(`Proyecto no encontrado con ID ${id}`)
    }

    return {
        getProjectByID,
    }
}

export default useProjects;