import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
