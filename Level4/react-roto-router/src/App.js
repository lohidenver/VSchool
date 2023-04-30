import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import {Route, Routes} from "react-router-dom";
import Careers from "./components/Careers";


function App() {
  return (
    <>
      <Navbar />
      
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/careers" element={<Careers/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
