export interface ProjectDataType {
  name: string;
  description: string;
  project: string;
  github: string;
  image: string;
}

export const ProjectsData: ProjectDataType[] = [
  {
    name: "Threads",
    description: "A full-stack Threads clone crafted with Next.js and Tailwind CSS, allowing users to post their own threads, comment on others, and featuring essential logging functions and much more.",
    project: "https://threads-adx.vercel.app/",
    github: "https://github.com/AndruTRADX/threads",
    image: "https://i.ibb.co/2t5TVtX/Screenshot-2023-08-16-170625.png",
  },
  {
    name: "DevMarket",
    description: "An e-commerce platform designed and developed with React, Tailwind CSS, and Nest.js. It includes logging functionality, CRUD operations, and advanced product search options.",
    project: "https://devmarketadx.vercel.app/",
    github: "https://github.com/AndruTRADX/e-commerce-app",
    image: "https://i.ibb.co/xXYSb4y/image.png",
  },
  {
    name: "Products CRUD",
    description: "Product CRUD functionality implemented with Next.js and Tailwind CSS, empowering users to effortlessly manage and edit their own products.",
    project: "https://fullstack-products-crud.vercel.app/",
    github: "https://github.com/AndruTRADX/fullstack-products-crud",
    image: "https://i.ibb.co/TL7QJ8L/imagen-2023-06-23-105521126.png",
  },
  {
    name: "Metaversus",
    description: "Join us in an interactive and fun Metaverse experience, complete with captivating animations and a stunning interface.",
    project: "https://metaversus-andrutradx.vercel.app/",
    github: "https://github.com/AndruTRADX/metaversus",
    image: "https://i.ibb.co/SBS1Gff/imagen-2023-06-23-105633430.png",
  },
];
