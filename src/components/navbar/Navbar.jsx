import "./navbar.scss";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Blessed Ojo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="experience"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <a
            href="https://github.com/Blessed-Ojo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/ojo-blessed-01571731a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
        </li>
        <li>
          <a href="mailto:ojoblessed533@gmail.com">
            <FaEnvelope size={25} />
          </a>
        </li>
      </ul>
      <ul className="cta">
        <NavLink
          to="contact me"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contact me
        </NavLink>
      </ul>
      {/* moblie menu */}
      <div className="menuIcon">
      <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
      </div>
      <div className={open ? "menu active" : "menu"
      }>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          BlessedOjo
        </NavLink>
        <NavLink
          to="/education"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Education
        </NavLink>
        <NavLink
          to="experience"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Experience
        </NavLink>
        <a
          href="https://github.com/Blessed-Ojo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://linkedin.com/in/ojo-blessed-01571731a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
        </a>
        <a href="mailto:ojoblessed533@gmail.com">
          <FaEnvelope size={40} />
        </a>
        <NavLink
          to="contact me"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
        Contactme
        </NavLink>
      </div>
     
    </nav>
  );
};

export default Navbar;
