import type { Project, DevTag, SkillTag } from '../interfaces/Project';

const validDevTags: Set<DevTag> = new Set(['Web', 'Mobile', 'Other']);
const validSkillTags: Set<SkillTag> = new Set([
    'NestJS', 'ExpressJS', 'NodeJS', 'PostgreSQL', 'Prisma', 'Knex', 
    'MongoDB', 'Mongoose', 'ReactJS', 'MUI', 'AntDesign', 'Tailwind', 
    'AndroidStudio', 'TypeScript', 'JavaScript', 'Kotlin', 'Java', 'Arduino'
]);

function validateProject(raw: any): raw is Project {
    if (
        typeof raw.title === 'string' &&
        typeof raw.description === 'string' &&
        Array.isArray(raw.devTag) &&
        raw.devTag.every((tag: string) => validDevTags.has(tag as DevTag)) &&
        Array.isArray(raw.skills) &&
        raw.skills.every((tag: string) => validSkillTags.has(tag as SkillTag)) &&
        Array.isArray(raw.repoURLs) &&
        (raw.img === undefined || typeof raw.img === 'string')
    ) {
        return true;
    }
    return false;
}

export function getProjects(rawProjects: any[]): Project[] {
    return rawProjects.filter(validateProject);
}
