import { useState } from "react";
import Title from "../layouts/title";
import ContactLeft from "./contactLeft";
import { motion } from "framer-motion"; // Import motion from Framer Motion

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const [message, setMessage] = useState("");

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = "okparafavour202@gmail.com";
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(message);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section id="contacts" className="w-full py-20">
        <div className="text-center">
          <Title title="Contact me" des="Do you Want to Talk/Reach out?" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
            <ContactLeft />
            <motion.div
              className="w-full lg:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-8 shadow-shadowOne flex flex-col gap-8 dark:bg-gradient-to-r dark:from-transparent dark:to-transparent"
              initial={{ opacity: 0, y: 20 }} // Initial state
              whileInView={{ opacity: 1, y: 0 }} // While in view to full opacity and slide up
              exit={{ opacity: 0, y: 20 }} // Exit animation
              transition={{ duration: 0.5 }} // Transition duration
            >
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6 py-5"
              >
                <div className="w-full flex flex-col lg:flex-row items-center gap-10">
                  <motion.label
                    htmlFor="name"
                    className="w-full lg:w-1/2 flex flex-col gap-4"
                    initial={{ opacity: 0, x: -20 }} // Slide in from left
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-sm font-medium uppercase tracking-wide">
                      Your Name
                    </p>
                    <input
                      className="contact-input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleForm}
                      id="name"
                      placeholder="Favour"
                      required
                    />
                  </motion.label>
                  <motion.label
                    htmlFor="phone"
                    className="w-full lg:w-1/2 flex flex-col gap-4"
                    initial={{ opacity: 0, x: -20 }} // Slide in from left
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }} // Slight delay for the second label
                  >
                    <p className="text-sm font-medium uppercase tracking-wide">
                      Phone Number (optional)
                    </p>
                    <input
                      className="contact-input"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleForm}
                      id="phone"
                      placeholder="09123495859"
                    />
                  </motion.label>
                </div>
                <div className="w-full gap-10">
                  <motion.label
                    htmlFor="email"
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-sm font-medium uppercase tracking-wide">
                      Email
                    </p>
                    <input
                      className="contact-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleForm}
                      id="email"
                      placeholder="favour@gmail.com"
                      required
                    />
                  </motion.label>
                </div>
                <div className="w-full gap-10">
                  <motion.label
                    htmlFor="subject"
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-sm font-medium uppercase tracking-wide">
                      Subject
                    </p>
                    <input
                      className="contact-input"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleForm}
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </motion.label>
                </div>
                <div className="w-full gap-10">
                  <motion.label
                    htmlFor="message"
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <p className="text-sm font-medium uppercase tracking-wide">
                      Message
                    </p>
                    <textarea
                      rows={10}
                      className="contact-textarea"
                      id="message"
                      name="message"
                      required
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                  </motion.label>
                </div>
                <div className="text-center">
                  <motion.button
                    className="bg-amber-500 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300 px-10 py-2 border-2 border-amber-500"
                    initial={{ scale: 1 }} // Initial scale
                    whileHover={{ scale: 1.05 }} // Scale on hover
                    transition={{ duration: 0.3 }}
                  >
                    Email me
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
