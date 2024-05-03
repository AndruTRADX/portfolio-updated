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
    name: "NZ Walks (API)",
    description:
      "A CRUD API built using ASP.NET with C#, allowing users to upload files to create hiking trails across New Zealand with Auth. Deployed on Azure.",
    project: "https://app-nzwalks-eastus-dev-069.azurewebsites.net/api/regions",
    github: "https://github.com/AndruTRADX/NZWalks.API",
    image: "https://i.ibb.co/5WxC5cm/image-2024-05-03-110214547.png",
  },
];
