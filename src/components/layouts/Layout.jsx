import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./layout.scss";
import Footer from "../footer/Footer";
const Layout = () => {
  return (
    <div className="layout">
      <div className="nav">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <div className="footer">
      <Footer/>
      </div>
    </div>
  );
};

export default Layout;
