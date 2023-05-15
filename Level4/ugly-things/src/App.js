
import {UglyProvider} from "./Components/UglyContext";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import UglyList from "./Components/UglyList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <UglyProvider>
        <Navbar />
        <Form />
        <UglyList />
        <Footer/>
      </UglyProvider>
    </div>
  );
}

export default App;
