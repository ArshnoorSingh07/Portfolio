import "../styles/contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    const toastId = toast.loading("Sending message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {

        toast.update(toastId, {
          render: "Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });

        form.current.reset();

      })
      .catch(() => {

        toast.update(toastId, {
          render: "Failed to send message!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });

      });

  };

  return (
    <section className="contact-section" id="contactme">

      <div className="container">

        <h1 className="contact-heading">
          Contact Me
        </h1>

        <h3 className="contact-subheading">
          Questions, thoughts, or just want to say hello?
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Enter your subject"
            required
          />

          <textarea
            rows="8"
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>

          <button
            type="submit"
            className="btn-pink contact-btn"
          >
            Send Message
            <IoSend />
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;