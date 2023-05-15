import Home from "./Home";

import Projects from "./Projects";
import AllProjects from "./AllProjects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import {Route, Routes} from "react-router-dom";

function Everything() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Projects />

      <Skills />
      <Contact />
      <Footer />
      <Routes>
        <Route path='AllProducts' element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default Everything;
