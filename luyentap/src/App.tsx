import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChartBar1 from './Components/ChartBar1';
import ChartItem from './Components/ChartItem';
import Profile from './Components/Profile';

function App() {
  return (
    <div>
      <div className="container">
        <ChartBar1 text="BANDWIDTH" color1="red" colors="pink" percentage={20}/>
        <ChartBar1 text="STORAGE" color1="blue" colors="green" percentage={50}/>
        <ChartBar1 text="USERS" color1="green" colors="pink" percentage={70}/>
        <ChartBar1 text="VISITORS" color1="yellow" colors="lightyellow" percentage={30}/>
        <ChartBar1 text="EMAILS" color1="puper" colors="green" percentage={45}/>
        <ChartBar1 text="BASIC" color1="violet" colors="yellow" percentage={80}/>
        <ChartBar1 text="OTHERS" color1="red" colors="green" percentage={37}/>
      </div>
      <br></br>

      <div className="container text-white-20 bg-gray">
        <ChartItem legend="Bandwidth" percent={20} color="red" />
        <ChartItem legend="storage" percent={50} color="green" />     
      </div>
      <div className="container m-5 bg-light">
        <Profile iconName="aaaaaaaaa" text="HTML" color='green' unit='150'/>
        <Profile iconName="aaaaaaaaa" text="HTML" color='green' unit='150'/>
      </div>
    </div>
  );
}

export default App;
