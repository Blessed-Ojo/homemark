import  './tools.scss'
import { FaReact,FaFigma,FaBootstrap,FaAppStore,FaNodeJs    } from "react-icons/fa";
import { TbBrandVite,TbBrandReactNative,TbBrandTypescript,TbBrandJavascript  } from "react-icons/tb";
import { SiJest,SiGithubactions } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Tools = () => {
  
  return (
    <div className='Tool-card' >
        <div className="cards">
          <h1>Publications in both stores</h1>
          <p><FaAppStore color='#B292FF' size={35}/> App Store</p>
          <p><IoLogoGooglePlaystore  color='#B292FF' size={35} /> Play Store</p>
        </div>
        <div className="cards">
          <h1>Front-end Engineer Design</h1>
          <p><FaReact size={35} color='#B292FF' /> React JS</p>
          <p><TbBrandReactNative size={35} color='#B292FF'  /> React Native</p>
          <p><FaNodeJs size={35} color='#B292FF' /> Next.JS</p>
          <p><TbBrandVite size={35} color='#B292FF' /> Vite</p>
          <p><FaFigma size={35} color='#B292FF' /> Figma</p>
          <p><SiJest size={35} color='#B292FF' /> Jest</p>
          <p><FaBootstrap size={35} color='#B292FF' /> Bootstrap</p>
        </div>
        <div className="cards">
          <h1>Languages</h1>
          <p><TbBrandJavascript size={35}color='#B292FF'  /> JavaScript</p>
          <p><TbBrandTypescript size={35} color='#B292FF' /> Typescript</p>
        </div>
        <div className="cards">
          <h1>Devops</h1>
          <p><SiGithubactions size={35} color='#B292FF' /> Github Actions</p>
        </div>
    </div>
  )
}

export default Tools