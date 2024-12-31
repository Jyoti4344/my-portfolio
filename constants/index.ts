import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaXTwitter } from "react-icons/fa6";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Framer Motion",
  //   image: "framer.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "linkedin.com/in/jyoti-goel-8a91b2269",
  },
  {
    name: "X",
    icon: FaXTwitter,
    link: "https://x.com/JyotiGoel2407",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Material UI",
  //   image: "mui.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "sql",
    image: "sql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Prisma",
  //   image: "prisma.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Tauri",
  //   image: "tauri.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Docker",
  //   image: "docker.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Supabase",
    image: "supabase.jpg",
    width: 68,
    height: 60,
  },
  {
    skill_name: "Clerk",
    image: "clerk.png",
    width: 68,
    height: 65,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "c",//c++
    image: "c.svg",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Quick-hire",
    description:
      'A web application where candidates can practice mock interviews, featuring dynamic question generation, audio recording and transcription of responses, and AI-driven feedback to enhance interview performance and confidence. Implemented WebRTC for real-time communication and AI APIs for speech-to-text conversion.',
    image: "/projects/project-1.png",
    techStack: ["React.js", "Node.js" ,"Express.js", "MongoDB", "WebRTC", "OpenAI APIs", "TailwindCSS"],
    link: "https://github.com/Jyoti4344/Quick-Hire",
  },
  {
    title: "Job Portal",
    description:
      'Developed a full-stack web application where candidates can explore and apply for jobs, while recruiters can post openings and manage applications. Integrated external APIs like Supabase for database management, Clerk for user authentication, and ShadCN for UI components, ensuring a seamless and efficient user experience.',
    image: "/projects/project-2.png",
    techStack: ["React.js", "Node.js", "Express.js" , "Supabase", "Clerk", "ShadCN", "Tailwind CSS"],
    link: "https://github.com/Jyoti4344/Job-Portal",
  },
  {
    title: "Portfolio Website",
    description:
      'Created a personal portfolio website to showcase projects, skills, and achievements. Built with responsive design principles to ensure accessibility across devices. Incorporated interactive elements to provide an engaging user experience.',
    image: "/projects/project-3.png",
    techStack: ["React.js", "Next.js" , "Typescript", "Tailwind CSS", "Three.js"],
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Jyoti4344",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/jyoti0056",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Twitter",
        icon: FaXTwitter,
        link: "https://x.com/JyotiGoel2407",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/jyoti-goel-8a91b2269",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Learning about me",
        icon: null,
        link: "https://www.linkedin.com/in/jyoti-goel-8a91b2269",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "jyotigoyal4344@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Algos",
    link: "#encryption",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Jyoti4344",
};
