import { ProjectDataType } from "./projects.types";

export const ProjectsData: ProjectDataType[] = [
  {
    name: "Reactivities App",
    description:
      "A React 19 + TypeScript frontend for a Meetup-style activity scheduling platform, built with Vite, TanStack Query, React Hook Form + Zod, and shadcn/ui. Includes paginated lists, optimistic updates, address autocomplete via LocationIQ, skeleton loading states, and a global confirm-dialog system. The kind of polish you'd expect from a production client app.",
    project: "https://github.com/AndruTRADX/Reactivities-App",
    github: "https://github.com/AndruTRADX/Reactivities-App",
    image: "https://i.ibb.co/TxfGWqwm/image-2026-07-26-112922612.png",
  },
  {
    name: "Reactivities Api",
    description:
      "The .NET backend powering Reactivities App, structured as a Clean Architecture solution split into API, Application, Domain, and Infrastructure projects, with CQRS driving its use cases. Built to be modular, testable, and scalable, matching the standards of a real production API.",
    project: "https://github.com/AndruTRADX/Reactivities-Api",
    github: "https://github.com/AndruTRADX/Reactivities-Api",
    image: "https://i.ibb.co/BVZYCcwR/image-2026-07-26-113037492.png",
  },
  {
    name: "Cat blogs",
    description:
      "A small blog about cats split into two containerized services, a Python backend and an HTML/CSS/JS frontend orchestrated with Docker Compose, which builds both images, spins up an isolated network, and starts the containers so they can talk to each other by name. Built as a university project to practice container orchestration.",
    project: "https://github.com/AndruTRADX/docker_cat_blog",
    github: "https://github.com/AndruTRADX/docker_cat_blog",
    image: "https://i.ibb.co/MD3bkHyM/image-2026-07-26-113537862.png",
  },
  {
    name: "Real-time chat",
    description:
      "A real-time chat app built with Flask and Flask-SocketIO, backed by MySQL. Users create or join chat rooms with a room code and exchange messages instantly over WebSockets, with full history persisted and reloaded whenever someone re-enters a room. Built as a university project.",
    project: "https://github.com/AndruTRADX/realtime-chat-python",
    github: "https://github.com/AndruTRADX/realtime-chat-python",
    image: "https://i.ibb.co/9HYp7nSZ/image-2026-07-26-141650964.png",
  },
];
