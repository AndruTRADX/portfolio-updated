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
    name: "Twitter Clone API",
    description:
      "Explore the functionalities of a Twitter-like API developed using C# and .NET technologies. This API enables users to create tweets, interact with comments, manage profiles, and more, all while emphasizing scalability and security.",
    project: "https://app-twitterclone-eastus-dev-001.azurewebsites.net/api/tweets",
    github: "https://github.com/AndruTRADX/TwitterClone.API",
    image: "https://i.ibb.co/WxtzkL6/image-2024-05-13-162416450.png",
  },
];
