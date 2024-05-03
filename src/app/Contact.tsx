import { useState, useRef, ChangeEventHandler } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import Modal from "../components/modal/modal";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);
  const [modalMessage, setModalMessage] = useState([
    "Something went wrong",
    "Seems like something went wrong, please try again later",
  ]);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit: ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Andrés Rodríguez",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAILJS_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setModalMessage([
          "Message sent succesfully",
          "Your message has been sent succesfully, I'll answer as soon as posible.",
        ]);
        setSended(true);

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setSended(true);
      });
  };

  return (
    <>
      <aside id="contact" className="flex-col flex pt-14 justify-between gap-4">
        <div className="flex items-center gap-3">
        <h2 className="subtitle-p-1 m-0">Contact</h2>
        <span className="text-light-1/50 font-semibold mb-3">adxcontacto@gmail.com</span>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-light-1/70 font-semibold mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-dark-2 py-2.5 px-3.5 focus:border-primary placeholder:text-light-2 rounded outline-none border border-dark-3 font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-light-1/70 font-semibold mb-4">Your email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ryangosling@acme.com"
              className="bg-dark-2 py-2.5 px-3.5 focus:border-primary placeholder:text-light-2 rounded outline-none border border-dark-3 font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-light-1/70 font-semibold mb-4">Your message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-dark-2 py-2.5 px-3.5 focus:border-primary placeholder:text-light-2 rounded outline-none border border-dark-3 font-medium min-h-[160px] max-h-[365px]"
            />
          </label>

          <div className="flex justify-end">
            <Button text="Send" state={loading} textState="Sending..." />
          </div>
        </form>
      </aside>

      <Modal
        isOpen={sended}
        onClose={() => setSended(false)}
        onSubmit={() => setSended(false)}
        title={modalMessage[0]}
        body={<>{modalMessage[1]}</>}
        actionLabel={"Accept"}
      />
    </>
  );
};

export default Contact;
