import { useState } from "react";
import "../styles/navbar.css";

import logo from "../assets/images/userAsset/NavLogo.png";

import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div className="container">

      <div className="navbar">

        {/* Logo */}

        <a
          href="#"
          className="logo-container"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />

          <div className="logo-text">
            rshnoor Singh
          </div>
        </a>

        {/* Desktop Menu */}

        <div className={`nav-right ${menuOpen ? "active" : ""}`}>

          <div className="nav-items">

            <div>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </div>

            <div>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </div>

            <div>
              <a href="#contactme" onClick={() => setMenuOpen(false)}>
                Contact Me
              </a>
            </div>

          </div>

          <div className="nav-icons">

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

        {/* Hamburger */}

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }
        </div>

      </div>

    </div>

  );
};

export default Navbar;