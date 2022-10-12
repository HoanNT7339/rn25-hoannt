import './App.css';
import BasicUI1 from './Components/BasicUI1'
import BasicUI2 from './Components/BasicUI2'
import BasicUI3 from './Components/BasicUI3'

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <BasicUI1 />
          <BasicUI2 />
          <BasicUI3 />
        </div>
      </div>
    </>
  );
}

export default App;
