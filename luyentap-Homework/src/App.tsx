import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Basic1 from './Components/Session02/Basic1';
// import Basic2 from './Components/Session02/Basic2';
// import Basic3 from './Components/Session02/Basic3';
// import ChartBar1 from './Components/Session02/ChartBar1';
// import ChartItem from './Components/Session02/ChartItem';
// import Profile from './Components/Session02/Profile';
// import ButtonLike from './Components/Session03/ButtonLike'
// import Buttons from './Components/Session05/Buttons';
// import Rating from './Components/Rating';
// import Form from './Components/Form';
// import { Button } from 'react-bootstrap';
// import ListUser from './Components/ListUser';
import BrowserRouterExample from './Components/Session08/BrowserRouterExample';



function App() {
  return (
    <div>
      {/* <div className="container m-5">
        <div className="row">
          <Basic1 />
          <Basic2 />
          <Basic3 />
        </div>
      </div>
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
        <ChartItem legend="Storage" percent={50} color="green" /> 
        <ChartItem legend="Users" percent={70} color="green" /> 
        <ChartItem legend="Visitors" percent={30} color="green" /> 
        <ChartItem legend="Emails" percent={45} color="green" /> 
        <ChartItem legend="Basic" percent={80} color="green" />
        <ChartItem legend="Others" percent={37} color="green" />      
      </div>
      <div className="container m-5 bg-light">
        <Profile iconName="aaaaaaaaa" text="HTML" color='green' unit='150'/>
        <Profile iconName="aaaaaaaaa" text="HTML" color='green' unit='150'/>
      </div>  */}

      {/* {/* <div className="container m-5 row d-flex">
        <div className="col-2 m-1 flex-fill" style={{border:'1px solid black',height:'200px'}}>
          aaaaaaaaaa
          <div style={{backgroundColor:'gray',border:'1px solid black', margin:'0 -13px'}}>bbbbbbbbb</div>
        </div>
        <div className="col-2 m-1 flex-fill" style={{border:'1px solid black',height:'200px'}}>
          aaaaaaaaaa
        </div>
        <div className="col-2 m-1 flex-fill" style={{border:'1px solid black',height:'200px'}}>
          aaaaaaaaaa
        </div>
        <div className="col-2 m-1 flex-fill" style={{border:'1px solid black',height:'200px'}}>
          aaaaaaaaaa
        </div>
      </div> */}
      {/* <div>
        <ButtonLike/>
      </div> */}
      {/* <div className="m-5 ">
        <Buttons />
      </div> */}
      {/* <div className="m-5 ">
      <Rating />
      </div> */}
      {/* <div className="m-5">
        <ListUser />
      </div> */}
      <div>
        <BrowserRouterExample />
      </div>
    </div>
  );
}

export default App;
