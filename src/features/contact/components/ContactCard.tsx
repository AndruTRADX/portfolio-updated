import { ContactType } from "../contact.types";

type ContactCardProps = {
  contactMethod: ContactType;
};

const ContactCard = ({ contactMethod }: ContactCardProps) => {
  return (
    <a
      href={contactMethod.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 items-center rounded-xl transition duration-300 group hover:scale-103"
    >
      <img
        src={contactMethod.icon}
        alt={contactMethod.name}
        className="w-16 h-16 opacity-70 transition group-hover:opacity-100"
      />

      <div className="flex flex-col overflow-hidden">
        <p className="text-p-1-focus truncate group-hover:underline">
          {contactMethod.name}
        </p>
        <p className="text-p-2">{contactMethod.description}</p>
      </div>
    </a>
  );
};

export default ContactCard;
