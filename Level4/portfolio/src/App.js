import Navbar from "./components/Navbar";
import { Route, Routes} from "react-router-dom";
import AllProjects from "./components/AllProjects";
import Everything from "./components/Everything";

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <Everything /> */}
      
        <Routes>
          <Route index element={<Everything />} />
          <Route path="/" element={<Everything />} />
          <Route path='allprojects' element={<AllProjects />} />
        </Routes>
      
    </div>
  );
}

export default App;
