import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import sharyco from "/img/sharyco.png";
import googlecloud from "/img/google-cloud.webp";
import portfolio from "/img/portfolio.png";

export const links = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "education",
    hash: "#education",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "degree",
    institution: "university",
    location: "Tucumán, Argentina",
    description: "degree.description",
    icon: React.createElement(LuGraduationCap),
    date: { from: "2016", to: "present" },
  },
  {
    title: "course.title",
    institution: "Argentina Programa",
    location: "Argentina",
    description: "course.description",
    icon: React.createElement(LuGraduationCap),
    date: { from: "2021" },
  },
  {
    title: "school.title",
    institution: "school.institution",
    location: "Tucumán, Argentina",
    description: "school.description",
    icon: React.createElement(LuGraduationCap),
    date: { from: "2009", to: "2015" },
  },
];

export const experiencesData = [
  {
    title: "job1.title",
    company: "job1.company",
    location: "Tucuman, Argentina",
    description: "job1.description",
    icon: React.createElement(CgWorkAlt),
    date: { from: "2022", to: "present" },
  },
] as const;

export const projectsData = [
  {
    title: "project1.title",
    description: "project1.description",
    tags: ["Vite", "React", "TypeScript", "Tailwind", "Framer Motion","i18next"],
    imageUrl: portfolio,
  },
  {
    title: "project2.title",
    description: "project2.description",
    tags: ["React", "ExpressJS", "Tailwind", "Redux", "MySQL"],
    imageUrl: sharyco,
  },
  {
    title: "project3.title",
    description: "project3.description",
    tags: ["Google Cloud", "Cloud Functions"],
    imageUrl: googlecloud,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Tailwind",
  "Framer Motion",
  "Node.js",
  "Express",
  "Prisma",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Java",
  "Python",
  "Git",
  "GitHub",
  "Docker",
] as const;