import "./navbar.scss";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
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
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/invite/your-invite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={25} />
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={25} />
          </a>
        </li>
        <li>
          <a href="mailto:your-email@example.com">
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
    </nav>
  );
};

export default Navbar;
