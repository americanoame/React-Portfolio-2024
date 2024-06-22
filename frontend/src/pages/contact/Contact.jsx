import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_8psczw5", "template_k6ekitf", form.current, "u7hOZUVFyMCNa-6L5").then(
      (result) => {
        console.log(result.text);
        toast.success("Thank you for getting in touch!", {
          position: "top-center",
        });
      },
      (error) => {
        console.log(error.text);
        toast.error("Failed to send message. Please try again later.", {
          position: "top-center",
        });
      }
    );

    e.target.reset();
    setFormData({ user_name: "", user_email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-head-text"> Contact me. Let&apos;s talk </h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form ">
        <div className="contact-flex">
          <input className="p-text" type="text" placeholder="Your Name" name="user_name" value={formData.user_name} onChange={handleChange} />
        </div>
        <div className="contact-flex">
          <input className="p-text" type="email" placeholder="Your Email" name="user_email" value={formData.user_email} onChange={handleChange} />
        </div>
        <div className="contact-flex">
          <textarea className="p-text" placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} />
        </div>
        <button type="submit" className="p-text" disabled={!formData.message.trim()}>
          Send Message
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Contact;
