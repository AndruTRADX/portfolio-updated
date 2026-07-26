import ContactCard from "./components/ContactCard";
import { contactMethods } from "./contact.data";

const ContactSection = () => {
  return (
    <>
      <aside id="contact" className="flex-col flex pt-14 justify-between gap-2">
        <div className="flex items-center">
          <h2 className="subtitle-p-1 m-0">Contact</h2>
        </div>

        <div className="grid grid-cols-1 max-[500px]:grid-cols-1 gap-2 ">
        {
          contactMethods.map((contact) => (
              <ContactCard
                contactMethod={contact}
                key={`contact-method-card-${contact.link}`}
              />
            ))
        }
      </div>
      </aside>
    </>
  );
};

export default ContactSection;
