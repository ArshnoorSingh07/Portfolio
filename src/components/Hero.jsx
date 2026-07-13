import "../styles/hero.css";

import { TypeAnimation } from "react-type-animation";

import dots from "../assets/images/userAsset/dots.png";
import cube from "../assets/images/userAsset/cube.png";
import circle from "../assets/images/userAsset/circle.png";
import zigzags from "../assets/images/userAsset/zigzags.png";
import plus from "../assets/images/userAsset/plus.png";
import userImage from "../assets/images/userAsset/UserImage.png";

const Hero = () => {
  return (
    <div className="container">

      <div className="hero-section">

        {/* Faded Text */}

        <div className="absolute faded-text">
          Arshnoor Singh
        </div>

        {/* Left Section */}

        <div className="hero-section-left">

          <div className="hero-section-heading">
            Hi! Arshnoor Singh
          </div>

          <div className="hero-section-heading hero-section-sub-heading">
            I am a{" "}
            <span className="role">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Coder",
                  2000,
                ]}
                speed={60}
                repeat={Infinity}
              />
            </span>
          </div>

          <div className="hero-section-description">
            I'm a software developer and here is my portfolio website.
            Here you'll learn about my journey as a software developer.
          </div>

          <a href="#contactme" className="btn-pink" id="btn">
            Hire Me
          </a>

        </div>

        {/* Right Section */}

        <div className="hero-section-right">

          <div className="absolute icons icon-dots">
            <img src={dots} alt="" />
          </div>

          <div className="absolute icons icon-cube">
            <img src={cube} alt="" />
          </div>

          <div className="absolute icons icon-circle">
            <img src={circle} alt="" />
          </div>

          <div className="absolute icons icon-zigzag">
            <img src={zigzags} alt="" />
          </div>

          <div className="absolute icons icon-plus">
            <img src={plus} alt="" />
          </div>

          <div className="user-image">
            <img src={userImage} alt="User" />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;