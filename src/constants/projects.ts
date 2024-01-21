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
    description:
      "A full-stack Threads clone crafted with Next.js and Tailwind CSS, allowing users to post their own threads, comment on others, and featuring essential logging functions and much more.",
    project: "https://threads-adx.vercel.app/",
    github: "https://github.com/AndruTRADX/threads",
    image: "https://i.ibb.co/2t5TVtX/Screenshot-2023-08-16-170625.png",
  },
  {
    name: "Airbnb Clone",
    description:
      "Experience the power of a full-stack Airbnb clone built with Next.js. This project features OAuth functionalities and CRUD operations, allowing you to seamlessly list your property or make reservations.",
    project: "https://adxbnb.vercel.app",
    github: "https://github.com/AndruTRADX/airbnb-clone",
    image: "https://i.ibb.co/ysw1RzS/image-2024-01-10-142339062.png",
  },
  {
    name: "DevMarket",
    description:
      "An e-commerce platform designed and developed with React, Tailwind CSS, and Nest.js. It includes logging functionality, CRUD operations, and advanced product search options.",
    project: "https://devmarketadx.vercel.app/",
    github: "https://github.com/AndruTRADX/e-commerce-app",
    image: "https://i.ibb.co/xXYSb4y/image.png",
  },
];
