import Generator from "./components/Generator";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='container-title'>
          <h1>CSS Gradient Code Generator</h1>
        </div>
        <div className='container-content'>
          <Generator />
        </div>
      </div>
    </div>
  );
}

export default App;
