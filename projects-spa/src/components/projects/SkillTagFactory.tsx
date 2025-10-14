import type { SkillTag } from "../../interfaces/Project";

const skillBadgeUrls: Record<SkillTag, string> = {
    NestJS: "https://img.shields.io/badge/Nest.js-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white",
    ExpressJS: "https://img.shields.io/badge/Express.js-%23000000.svg?style=for-the-badge&logo=express&logoColor=%234479A1",
    NodeJS: "https://img.shields.io/badge/node.js-%235FA04E.svg?style=for-the-badge&logo=node.js&logoColor=white",
    MySQL: "https://img.shields.io/badge/MySQL-white.svg?style=for-the-badge&logo=mysql&logoColor=#4479A1",
    PostgreSQL: "https://img.shields.io/badge/Postgre_SQL-%234169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    Prisma: "https://img.shields.io/badge/Prisma-%232D3748.svg?style=for-the-badge&logo=prisma&logoColor=white",
    Knex: "https://img.shields.io/badge/Knex-%23D26B38.svg?style=for-the-badge&logo=knex.js&logoColor=white",
    MongoDB: "https://img.shields.io/badge/Mongo_DB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    Mongoose: "https://img.shields.io/badge/Mongoose-%23880000.svg?style=for-the-badge&logo=mongoose&logoColor=white",
    ReactJS: "https://img.shields.io/badge/React.JS-black.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    MUI: "https://img.shields.io/badge/MUI-%23007FFF.svg?style=for-the-badge&logo=mui&logoColor=white",
    AntDesign: "https://img.shields.io/badge/Ant_Design-%230170FE.svg?style=for-the-badge&logo=antdesign&logoColor=white",
    Tailwind: "https://img.shields.io/badge/Tailwind-%2306B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white",
    AndroidStudio: "https://img.shields.io/badge/Android_Studio-white.svg?style=for-the-badge&logo=android&logoColor=%233DDC84",
    TypeScript: "https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    JavaScript: "https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black",
    Kotlin: "https://img.shields.io/badge/Kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white",
    Java: "https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=black",
    Arduino: "https://img.shields.io/badge/Arduino-%2300878F.svg?style=for-the-badge&logo=arduino&logoColor=white",
    "C++": "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=cplusplus&logoColor=white",
    Python: "https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white",
    Xtend: "https://img.shields.io/badge/Xtend-100000?style=for-the-badge",
    Godot: "https://img.shields.io/badge/Godot_Engine-%23478CBF.svg?style=for-the-badge&logo=godotengine&logoColor=white"
} as const;

const SkillTagFactory = ({ tag }: { tag: SkillTag }) => {
    const badgeUrl = skillBadgeUrls[tag];

    if (!badgeUrl) {
        console.warn(`Badge no encontrado para: ${tag}`);
        return null;
    }

    return (
        <img
            src={badgeUrl}
            alt={`${tag} badge`}
            style={{ height: 25 }}
            loading="lazy"
        />
    );
};

export default SkillTagFactory;
