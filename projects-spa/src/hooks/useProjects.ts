import type { Project } from "../interfaces/Project";
import { getProjects } from "../helpers/validateProjects";
import rawProjects from '../assets/data/projects.json' assert { type: 'json' };
import { useEffect, useState } from "react";

const useProjects = () => {
    const [projectList, setProjectList] = useState<Project[]>([])

    useEffect(() => {
        const projectList: Project[] = getProjects(rawProjects);
        const sortedProjects = projectList.sort((a, b) => a.priority - b.priority)
        setProjectList(sortedProjects)
    }, [])

    const getProjectByID = async (id: string) => {
        const projectList: Project[] = getProjects(rawProjects);
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].id == id) {
                return projectList[i]
            }
        }
        console.error(`Proyecto no encontrado con ID ${id}`)
    }

    return {
        projectList,
        getProjectByID,
    }
}

export default useProjects;