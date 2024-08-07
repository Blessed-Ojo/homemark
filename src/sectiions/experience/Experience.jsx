import Silder from "../../components/silder/Silder";
import "./experience.scss";

const Experience = () => {
  return (
    <div className="Experience">
      <div className="E-right">
        <div className="e-text">
          <div className="blur-bg blur"></div>
          <p>2 years of</p>
          <h1>xP</h1>
          <p>
            with the most popular ecosystem <br />
            frontend
          </p>
        </div>
      </div>
      <div className="E-left">
        <Silder />
      </div>
    </div>
  );
};

export default Experience;
