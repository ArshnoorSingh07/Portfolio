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
          I'm <strong>Arshnoor Singh</strong>, a Computer Science undergraduate at
          <strong> Thapar Institute of Engineering and Technology</strong> with a
          strong interest in full-stack web development and modern software engineering.
        </p>

        <p>
          My primary stack includes <strong>React.js</strong>,
          <strong> Node.js</strong>, <strong>Express.js</strong>,
          <strong> MongoDB</strong>, and <strong>Redux Toolkit</strong>. I build
          responsive web applications, RESTful APIs, and secure authentication
          systems using technologies such as JWT, Cloudinary, and Razorpay.
        </p>

        <p>
          Alongside development, I actively practice
          <strong> Data Structures & Algorithms</strong> and enjoy solving
          challenging problems while continuously exploring scalable backend
          architectures and modern development practices.
        </p>

        <p>
          I'm currently looking for opportunities where I can contribute,
          collaborate with experienced engineers, and grow as a Full Stack
          Software Developer.
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