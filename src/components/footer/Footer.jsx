import "./footer.scss";
import {
    FaGithub,
    FaLinkedin,
    FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <h1>Fellow me</h1>
      <div className="icons">
        <a
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={25} color="#B292FF"/>
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={25} color="#B292FF"/>
        </a>
        <a
          href="https://discord.com/invite/your-invite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={28}color="#B292FF" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
