export interface Project {
    id: string,
    title: string,
    descriptionPar: string[],
    devTag: DevTag[];
    skills: SkillTag[];
    repos: RepoInfo[];
    imgURL?: string[];
}

//No te olvides modificar el helper si agregas nuevas tags aca
export type DevTag = 'Web' | 'Mobile' | 'VideoGame'| 'Other';
//Y aca
export type SkillTag = 'NestJS'
    | 'ExpressJS'
    | 'NodeJS'
    | 'MySQL'
    | 'PostgreSQL'
    | 'Prisma'
    | 'Knex'
    | 'MongoDB'
    | 'Mongoose'
    | 'ReactJS'
    | 'MUI'
    | 'AntDesign'
    | 'Tailwind'
    | 'AndroidStudio'
    | 'TypeScript'
    | 'JavaScript'
    | 'Kotlin'
    | 'Java'
    | 'C++'
    | 'Python'
    | 'Arduino'
    | 'Xtend'
    | 'Godot'

export interface RepoInfo {
    url: string,
    desc: string,
}