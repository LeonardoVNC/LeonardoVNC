export interface Project {
    title: string,
    description: string,
    devTag: DevTag[];
    skills: SkillTag[];
    repoURLs: string[];
}

//No te olvides modificar el helper si agregas nuevas tags aca
export type DevTag = 'Web' | 'Mobile' | 'Other';
//Y aca
export type SkillTag = 'NestJS'
    | 'ExpressJS'
    | 'NodeJS'
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
    | 'Arduino'