import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./type";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> and <b>AWS</b>",
  },

  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "I know how to use all available resources to solve any type of error",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Stunning user interface designer using <b>Figma</b>, <b>Photoshop</b>  and  <b>Illustrator</b> ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Databases",
    level: "25",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "20",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
];


export const projects:IProject[] = [
  { 
    id:1,
    name: "Smart Brain",
    description:
      "In this application we have implemented a face-recognition Api together with a server and a database called on AWS. To work, download the repository and run npm start.",
    image_path: "/images/smartbrain.jpg",
    deployed_url: "https://ilyionut.github.io/facerecognition/",
    github_url: "https://github.com/IlyIonut/facerecognition.git",
    category: ["React"],
    key_techs: ["React"],
  },
  {
    id:2,
    name: "RoboFriends",
    image_path: "/images/RoboFriends.jpg",
    deployed_url: "https://robofriends-flax.vercel.app/",
    github_url: "https://github.com/IlyIonut/robofriends",
    category: ["React"],
    description:
      "An application that implements a search bar and generates images from an external site.",
    key_techs: ["React"],
  },
  {
    id:3,
    name: "ZeroWaste",
    image_path: "/images/A3_Prezentare.png",
    deployed_url: "/",
    github_url: "https://github.com/IlyIonut/ZeroWaste.git",
    category: ["Photoshop"],
    description:
      "Zero Waste is a startup that I work on together with some students and here I have uploaded some design elements made by me for the website and application.",
    key_techs: ["Photoshop"],
  },
];
