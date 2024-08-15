import Layout from "./components/layouts/Layout"
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Experience2 from "./components/experience/Experience2";
import Education from "./components/education/Education";
import Contact from "./sectiions/cta/Contact";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="" element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path="experience" element={<Experience2/>}/>
      <Route path="education" element={<Education/>}/>
      <Route path="contact me" element={<Contact/>}/>
      </Route>
    </Routes>
  </Router>
  )
}

export default App
