import "../styles/skills.css";

import skills from "../data/skills";
import blobVector from "../assets/images/userAsset/blob vector.png";

const Skills = () => {
  return (
    <section id="skills" className="container skills-container">

      <div className="skill-fade-text">
        Skills
      </div>

      <div className="skill-container-left">

        <h2 className="skill-heading">
          <span className="caps">M</span>e and
          <br />
          My Tech Stack
        </h2>

        <div className="skill-subHeading">

          <p>
            Hi! I'm <strong>Arshnoor Singh</strong>, a Full Stack MERN Developer
            and Computer Science undergraduate at <strong>Thapar Institute of
            Engineering & Technology</strong>. I enjoy building scalable,
            responsive, and user-friendly web applications.
          </p>

          <p>
            My core tech stack includes <strong>React.js</strong>,
            <strong> Node.js</strong>, <strong>Express.js</strong>,
            <strong> MongoDB</strong>, and <strong>Redux Toolkit</strong>.
            I also have hands-on experience with REST APIs, JWT Authentication,
            Razorpay, Cloudinary, Git/GitHub, and modern MVC architecture.
          </p>

          <p>
            Beyond full-stack development, I actively practice
            <strong> Data Structures & Algorithms</strong> and enjoy solving
            real-world problems while continuously learning modern web
            technologies and best development practices.
          </p>

        </div>

      </div>

      <div className="skill-container-right">

        <img
          src={blobVector}
          className="blob-style"
          alt="Blob"
        />

        {skills.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="skills-logo"
            alt="Technology Logo"
          />
        ))}

      </div>

    </section>
  );
};

export default Skills;