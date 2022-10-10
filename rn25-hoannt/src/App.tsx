import React from "react";
import img from "./assets/images/1.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="title_header">
          <h1>The Pulpit Rock</h1>
        </div>
        <div className="row m-3">
          <div className="col-md-3">
            <div className="border-bottom text-info bg-gray"><p>text 1</p></div>
            <div className="border-bottom text-info bg-gray"><p>text 1</p></div>
            <div className="border-bottom text-info bg-gray"><p>text 1</p></div>
            <div className="border-bottom text-info bg-gray"><p>text 1</p></div>
          </div>
          <div className="col-md-6 text-center pt-3">
            <h1>The Walk</h1>
            <p>text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here</p>
            <img className="mainImage" src={img} alt={""}/> 
          </div>
          <div className="col-md-3 bg-info h-50">
          <div className="border-bottom">
            <p>text 1</p>
            <p style={{fontSize: "12px",color: "green"}}>text here text here text here text here text here text here text here text here text here text here text here text here </p>
          </div>
          <div className="border-bottom">
            <p>text 1</p>
            <p style={{fontSize: "12px",color: "green"}}>text here text here text here text here text here text here text here text here text here text here text here text here </p>
          </div>
          <div className="border-bottom">
            <p>text 1</p>
            <p style={{fontSize: "12px",color: "green"}}>text here text here text here text here text here text here text here text here text here text here text here text here </p>
          </div>
          </div>
        </div>
        <div className="footer d-block">
          <p className="text-center pt-4">text here text here text here text here text here text here text here text here text here text here text here text here text here </p>
        </div>
      </div>
    </>
  );
}

export default App;
