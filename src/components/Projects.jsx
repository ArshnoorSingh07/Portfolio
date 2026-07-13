import "../styles/project.css";

import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

// Project Images
import project1 from "../assets/images/projects/Project1.png";
import project2 from "../assets/images/projects/Project2.png";
import project3 from "../assets/images/projects/Project3.png";
import project4 from "../assets/images/projects/Project4.png";

// Stack Icons
import HTML from "../assets/images/stack/HTML.png";
import CSS from "../assets/images/stack/CSS.png";
import JavaScript from "../assets/images/stack/Javascript.svg";
import ReactLogo from "../assets/images/stack/React.png";
import Express from "../assets/images/stack/Express.png";
import Tailwind from "../assets/images/stack/Tailwind.png";
import NodeJs from "../assets/images/stack/NodeJs.svg";
import MongoDB from "../assets/images/stack/MongoDB.svg";
import Redux from "../assets/images/stack/Redux.svg";
import Vercel from "../assets/images/stack/Vercel.svg";
import Git from "../assets/images/stack/Git.svg";
import Github from "../assets/images/stack/Github.svg";

const Projects = () => {
  return (
    <section className="project-section" id="projects">

      <h2 className="page-header">
        Projects
      </h2>

      <div className="project-container">

              {/* ================= Project 1 ================= */}

        <div
          className="project-card"
          id="project1"
          style={{ backgroundImage: `url(${project1})` }}
        >

          <div className="project-number project-number-right">
            01
          </div>

          <div className="project-content project-content-left">

            <div className="project-skills-container">

              <img src={HTML} className="project-skill" alt="" />
              <img src={CSS} className="project-skill" alt="" />
              <img src={JavaScript} className="project-skill" alt="" />
              <img src={ReactLogo} className="project-skill" alt="" />
              <img src={Express} className="project-skill" alt="" />
              <img src={Tailwind} className="project-skill" alt="" />
              <img src={MongoDB} className="project-skill" alt="" />
              <img src={NodeJs} className="project-skill" alt="" />
              <img src={Redux} className="project-skill" alt="" />
              <img src={Vercel} className="project-skill" alt="" />

            </div>

            <h2 className="project-heading">
              StudyNotion
            </h2>

            <p className="project-subHeading">
              A full-stack MERN Learning Management System with JWT authentication,
              Razorpay payments, Cloudinary integration and instructor dashboards.
            </p>

            <div className="btn-grp">

              <a
                href="https://github.com/ArshnoorSingh07/StudyNotion/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink btn-project"
              >
                Read More
              </a>

              <a
                href="https://github.com/ArshnoorSingh07/StudyNotion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>

              <a
                href="https://study-notion-app-rho.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink className="icon" />
              </a>

            </div>

          </div>

        </div>


                {/* ================= Project 2 ================= */}

        <div
          className="project-card"
          id="project2"
          style={{ backgroundImage: `url(${project2})` }}
        >

          <div className="project-number project-number-left">
            02
          </div>

          <div className="project-content project-content-right">

            <div className="project-skills-container">

              <img src={HTML} className="project-skill" alt="" />
              <img src={CSS} className="project-skill" alt="" />
              <img src={JavaScript} className="project-skill" alt="" />
              <img src={ReactLogo} className="project-skill" alt="" />
              <img src={Tailwind} className="project-skill" alt="" />
              <img src={Redux} className="project-skill" alt="" />
              <img src={Git} className="project-skill" alt="" />
              <img src={Github} className="project-skill" alt="" />
              <img src={Vercel} className="project-skill" alt="" />

            </div>

            <h2 className="project-heading">
              Shopping Cart
            </h2>

            <p className="project-subHeading">
              A responsive React shopping cart using Redux Toolkit and Fake Store API
              with efficient state management.
            </p>

            <div className="btn-grp">

              <a
                href="https://github.com/ArshnoorSingh07/Shopping-Cart-App/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink btn-project"
              >
                Read More
              </a>

              <a
                href="https://github.com/ArshnoorSingh07/Shopping-Cart-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>

              <a
                href="https://shopping-cart-app-eta-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink className="icon" />
              </a>

            </div>

          </div>

        </div>

                {/* ================= Project 3 ================= */}

        <div
          className="project-card"
          id="project3"
          style={{ backgroundImage: `url(${project3})` }}
        >

          <div className="project-number project-number-right">
            03
          </div>

          <div className="project-content project-content-left">

            <div className="project-skills-container">

              <img className="project-skill" src={NodeJs} alt="" />
              <img className="project-skill" src={Express} alt="" />
              <img className="project-skill" src={MongoDB} alt="" />
              <img className="project-skill" src={Git} alt="" />
              <img className="project-skill" src={Github} alt="" />

            </div>

            <h2 className="project-heading">
              Blog Backend API
            </h2>

            <p className="project-subHeading">
              RESTful Blog API built using Node.js, Express.js and MongoDB with
              CRUD operations, MVC architecture and Mongoose relationships.
            </p>

            <div className="btn-grp">

              <a
                href="https://github.com/ArshnoorSingh07/BlogsApp_backend/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink btn-project"
              >
                Read More
              </a>

              <a
                href="https://github.com/ArshnoorSingh07/BlogsApp_backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>

            </div>

          </div>

        </div>

        {/* ================= Project 4 ================= */}

        <div
          className="project-card"
          id="project4"
          style={{ backgroundImage: `url(${project4})` }}
        >

          <div className="project-number project-number-left">
            04
          </div>

          <div className="project-content project-content-right">

            <div className="project-skills-container">

              <img className="project-skill" src={HTML} alt="" />
              <img className="project-skill" src={CSS} alt="" />
              <img className="project-skill" src={JavaScript} alt="" />
              <img className="project-skill" src={Tailwind} alt="" />
              <img className="project-skill" src={Git} alt="" />
              <img className="project-skill" src={Github} alt="" />
              <img className="project-skill" src={Vercel} alt="" />

            </div>

            <h2 className="project-heading">
              Razorpay Clone
            </h2>

            <p className="project-subHeading">
              Responsive Razorpay landing page clone built with HTML, Tailwind CSS
              and JavaScript featuring a modern UI.
            </p>

            <div className="btn-grp">

              <a
                href="https://github.com/ArshnoorSingh07/Razorpay-Clone-Project/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink btn-project"
              >
                Read More
              </a>

              <a
                href="https://github.com/ArshnoorSingh07/Razorpay-Clone-Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>

              <a
                href="https://razorpay-clone-project-kappa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink className="icon" />
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;