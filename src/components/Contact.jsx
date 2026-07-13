import "../styles/contact.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";

import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { IoSend } from "react-icons/io5";
import { HiArrowDownTray } from "react-icons/hi2";

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

        <div className="contact-title">

          <h1>Let's Work Together 🚀</h1>

          <p>
            Have a project in mind, an opportunity, or just want to say hello?
            Feel free to reach out.
          </p>

        </div>

        <div className="contact-wrapper">

          {/* LEFT CARD */}

          <div className="contact-info">

            <div className="availability">

              <span className="status-dot"></span>

              Open to Opportunities

            </div>

            <div className="info-box">

              <FaMapMarkerAlt className="info-icon" />

              <div>

                <h4>Location</h4>

                <p>Patiala, Punjab, India</p>

              </div>

            </div>

            <div className="info-box">

              <MdEmail className="info-icon" />

              <div>

                <h4>Email</h4>

                <p>arshnoorsingh.05@gmail.com</p>

              </div>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/ArshnoorSingh07"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/arshnoor-singh-785b5a2aa/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/weEf2py0fV/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode />
              </a>

            </div>

          </div>

          {/* FORM */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
          >

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              rows="8"
              name="message"
              placeholder="Write your message..."
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

      </div>

    </section>

  );

};

export default Contact;