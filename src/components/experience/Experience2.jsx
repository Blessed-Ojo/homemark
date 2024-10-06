import "./experince.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { xpdata } from "../../lib/xp";
const Experience2 = () => {
  
  
  return (
    <div className="Experience2">
      <div className="Experience-text">
        {"<"} Here, you can know me a little more and see my
        <br />
        whole experience as a <span>Front-End Software Engineer</span>. {"/>"}
      </div>
      <div className="experince-wapper">
        {xpdata.map((item, i) => (
          <div
            key={i}
            className="experince-item"
            
          >
            <div className="left">
              <h1>{item.name}</h1>
              <p>{item.xp}</p>
              <h4>{item.title}</h4>
            </div>
            <div className="right">
              <p>{item.text}</p>
              <LazyLoadImage
                src={item.image}
                alt=""
                effect="blur" 
              />
              <button>
                <a href={item.link}>Demo</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience2;
