import "../styles/footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container footer-wrapper">

        <div className="footer-left">

          <h2 className="footer-logo">
            Arshnoor Singh
          </h2>

          <p className="footer-desc">
            Full Stack MERN Developer passionate about building
            scalable, responsive and user-friendly web applications.
          </p>

        </div>

        <div className="footer-center">

          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contactme">Contact</a>

        </div>

        <div className="footer-right">

          <a
            href="https://github.com/ArshnoorSingh07"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/arshnoor-singh1/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:arshnoorsingh.05@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://www.instagram.com/arshnoorsingh.1/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Arshnoor Singh. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;