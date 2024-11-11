import Chatins from "@/public/Chatins.png";
import Hantoko from "@/public/Hantoko.png";
import WingsOn from "@/public/WIngsOn.png";
import PasswordGenerator from "@/public/PasswordGenerator.png";
import MTSWebsite from "@/public/MTSWebsite.png";
import Snake from "@/public/Snake.png";
import { link } from "fs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Hantoko",
    description:
      "Creating a simple personal online store website using React, Next.js, TypeScript, Tailwind, and Firebase.",
    tags: ["React", "Next.js", "Typescript", "Firebase", "Tailwind"],
    imageUrl: Hantoko,
    link: "https://hantoko.vercel.app",
  },
  {
    title: "Chatins",
    description:
      "Creating a simple chat website using TypeScript, Next.js, Tailwind, Prisma, MongoDB, and Pusher.",
    tags: [
      "React",
      "Typescript",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Prisma",
      "Pusher",
    ],
    imageUrl: Chatins,
    link: "https://chatins.vercel.app",
  },
  {
    title: "WingsOn",
    description:
      "Final Project for Synrgy Academy Batch 6 Fullstack Web Developer Bootcamp: an online ticket booking website.",
    tags: ["React", "Vite", "Typescript", "Tailwind"],
    imageUrl: WingsOn,
    link: "https://wings-on.netlify.app/",
  },
  {
    title: "Password Generator",
    description: "Creating a simple password generator website.",
    tags: ["HTML", "Javascript", "Tailwind"],
    imageUrl: PasswordGenerator,
    link: "https://raihannooriman.github.io/password-generator/",
  },
  {
    title: "MTS Website",
    description: "Solving bugs on school website",
    tags: ["React", "ChakraUi", "Firebase", "Tailwind"],
    imageUrl: MTSWebsite,
    link: "https://mts-miftahul-ulum.web.app/",
  },
  {
    title: "Snake",
    description: "Creating a simple snake game with React Native.",
    tags: ["React Native", "Typescript", "Expo"],
    imageUrl: Snake,
    link: "https://github.com/raihannooriman/snake-react-native",
  },
] as const;

export const skillsData = [
  "NodeJS",
  "NextJS",
  "Tailwind",
  "Typescript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Prisma",
  "Docker",
  "Elasticsearch",
  "Go",
  "Python",
  "Tex"
] as const;
