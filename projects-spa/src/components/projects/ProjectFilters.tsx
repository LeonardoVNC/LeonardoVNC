import { useState } from "react";
import { Flex, Input, Select } from "antd";
import type { DevTag, SkillTag } from "../../interfaces/Project";
import { getDevTagOptions, getSkillTagOptions } from "../../helpers/projectsHelper";

function ProjectFilters() {
    const [searchText, setSearchText] = useState("")
    const [typeSelected, setTypeSelected] = useState<DevTag | null>(null)
    const [skillSelected, setSetskillSelected] = useState<SkillTag | null>(null)
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