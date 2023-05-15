import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import AiGPT from "./Components/AiGPT";
import AiDallE from "./Components/AiDallE";

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />

        <Route path='/aigpt' element={<AiGPT />} />
        <Route path="/aidalle" element={<AiDallE/>}/>
      </Routes>
    </div>
  );
}

export default App;
