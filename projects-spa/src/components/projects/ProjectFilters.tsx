import { useEffect, useState } from "react";
import { Flex, Input, Select } from "antd";
import type { DevTag, Project, SkillTag } from "../../interfaces/Project";
import { getDevTagOptions, getSkillTagOptions } from "../../helpers/projectsHelper";
import { filterByWords } from "../../helpers/searchText";

interface ProjectFiltersProps {
    projects: Project[]
    onFilterChange: (filteredProjects: Project[]) => void
}

function ProjectFilters({ projects, onFilterChange }: ProjectFiltersProps) {
    const [searchText, setSearchText] = useState("")
    const [typeSelected, setTypeSelected] = useState<DevTag | null>(null)
    const [skillSelected, setSetskillSelected] = useState<SkillTag | null>(null)

    useEffect(() => {
        const filtered = projects.filter((project) => isProjectFiltered(project))
        onFilterChange(filtered)
    }, [searchText, typeSelected, skillSelected])

    const isProjectFiltered = (project: Project) => {
        return (
            isProjectOnTextFilter(project) &&
            isProjectOnTypeFilter(project) &&
            isProjectOnSkillFilter(project)
        )
    }

    const isProjectOnTextFilter = (project: Project) => {
        return filterByWords(project.title, searchText)
    }

    const isProjectOnTypeFilter = (project: Project) => {
        return typeSelected == null || project.devTag.includes(typeSelected)
    }

    const isProjectOnSkillFilter = (project: Project) => {
        return skillSelected == null || project.skills.includes(skillSelected)
    }

    return (
        <Flex
            wrap
            gap="middle"
            align="center"
            justify="space-around"
            style={{ margin: 4, marginBottom: 16 }}
        >
            <Input.Search
                placeholder="Search Project..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                allowClear
                style={{ width: 420 }}
            />
            <Select
                placeholder="Filter by Project Type..."
                value={typeSelected}
                onChange={setTypeSelected}
                options={getDevTagOptions()}
                allowClear
                style={{ width: 420 }}
            />
            <Select
                placeholder="Filter by Skill..."
                value={skillSelected}
                onChange={setSetskillSelected}
                options={getSkillTagOptions()}
                allowClear
                style={{ width: 420 }}
            />
        </Flex>
    );
}

export default ProjectFilters;