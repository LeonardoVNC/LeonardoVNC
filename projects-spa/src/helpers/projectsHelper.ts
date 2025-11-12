import type { DevTag, SkillTag } from "../interfaces/Project";

const devTagLabels: Record<DevTag, string> = {
  Web: "Web",
  Mobile: "Mobile",
  VideoGame: "Video Game",
  Other: "Other",
};

const skillTagLabels: Record<SkillTag, string> = {
  NestJS: "NestJS",
  ExpressJS: "ExpressJS",
  NodeJS: "NodeJS",
  MySQL: "MySQL",
  PostgreSQL: "PostgreSQL",
  Prisma: "Prisma",
  Knex: "Knex",
  MongoDB: "MongoDB",
  Mongoose: "Mongoose",
  ReactJS: "ReactJS",
  MUI: "Material UI",
  AntDesign: "Ant Design",
  Tailwind: "Tailwind CSS",
  AndroidStudio: "Android Studio",
  TypeScript: "TypeScript",
  JavaScript: "JavaScript",
  Kotlin: "Kotlin",
  Java: "Java",
  "C++": "C++",
  Python: "Python",
  Arduino: "Arduino",
  Xtend: "Xtend",
  Godot: "Godot",
  ReactNative: "React Native",
  Expo: "Expo",
  Firebase: "Firebase",
};

export function getDevTagOptions() {
  return Object.entries(devTagLabels).map(([value, label]) => ({
    label,
    value: value as DevTag,
  }));
}

export function getSkillTagOptions() {
  return Object.entries(skillTagLabels).map(([value, label]) => ({
    label,
    value: value as SkillTag,
  }));
}

export function getDevTagLabel(tag: DevTag): string {
  return devTagLabels[tag];
}

export function getSkillTagLabel(tag: SkillTag): string {
  return skillTagLabels[tag];
}