import Experience from "../../sectiions/experience/Experience";
import Frame from "../../sectiions/frame/Frame";
import Hero from "../../sectiions/hero/Hero";
import Worktool from "../../sectiions/worktools/Worktool";
import "./home.scss";

const Home = () => {
  return (
    <section>
      <section className="Home">
        <Hero />
      </section>
      <section className="experience">
        <Experience />
        <Frame/>
      </section>
      <section className="work">
        <Worktool/>
      </section>
      
    </section>
  );
};

export default Home;
