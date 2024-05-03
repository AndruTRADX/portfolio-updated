import Github from "../assets/svg/social/github.svg"
import LinkedIn from "../assets/svg/social/linkedin.svg"
import Instagram from "../assets/svg/social/instagram.svg"
import Email from "../assets/svg/social/envelope.svg"

export interface MediaType {
  name: string;
  link: string;
  icon: string;
}

export const Media: MediaType[] = [
  {
    name: "GitHub",
    link: "https://github.com/AndruTRADX",
    icon: Github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/andrutradx/",
    icon: LinkedIn,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/andru_adx/",
    icon: Instagram,
  },
  {
    name: "Email",
    link: "https://mailto:adxcontacto@gmail.com",
    icon: Email,
  },
];