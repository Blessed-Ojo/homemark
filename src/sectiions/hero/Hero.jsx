import "./hero.scss";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/experience");
  };
  return (
    <div className="Hero">
      <div className="right">
        <div className="smimg">
          <img src="smimg.png" alt="" />
        </div>
        <div className="h-texts">
          <h1>Hi,i'm ojo blessed</h1>
          <p>i'm a passionate Frontend-Developer from Nigeria </p>
          <p>I create user-friendly web applications with <br /> a focus on design and functionality</p>
          <blockquote>
            "Coding makes me happy, and even if it's hard, I just can't give
            up".
          </blockquote>
        </div>
        <div className="btns">
          <button className="download-button">
            <a href="/cv.pdf" download>
              Download CV
            </a>
          </button>
          <button className="hero-button" onClick={handleNavigate}>
            See experiences
          </button>
        </div>
        <span className="home-imgover"></span>
      </div>
    </div>
  );
};

export default Hero;
