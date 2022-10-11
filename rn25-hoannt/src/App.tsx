import React from "react";
import img from "./assets/images/1.jpg";
import "./App.css";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
function App() {
  let isLogin = true
  return (
    <>
      <div className="container-fluid">
        <Header isLogin = {isLogin}/>
        <div className="row m-3">
          <div className="col-12 col-lg-3">
            <div className="border-bottom text-info bg-gray"><p>text 1</p></div>
            <div className="border-bottom text-info bg-gray"><p>text 1</p></div>
            <div className="border-bottom text-info bg-gray"><p>text 1</p></div>
            <div className="border-bottom text-info bg-gray"><p>text 1</p></div>
          </div>
          <div className="col-12 col-lg-6 text-center pt-3">
            <h1>The Walk</h1>
            <p>text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here text here</p>
            <img className="mainImage" src={img} alt={""}/> 
          </div>
          <div className="col-12 col-lg-3 bg-info h-50">
          <div className="border-bottom">
            <p style={{fontSize: "20px", fontWeight: "bold"}}>text 1</p>
            <p style={{fontSize: "12px",color: "green"}}>text here text here text here text here text here text here text here text here text here text here text here text here </p>
          </div>
          <div className="border-bottom">
            <p style={{fontSize: "20px", fontWeight: "bold"}}>text 1</p>
            <p style={{fontSize: "12px",color: "green"}}>text here text here text here text here text here text here text here text here text here text here text here text here </p>
          </div>
          <div className="border-bottom">
            <p style={{fontSize: "20px", fontWeight: "bold"}}>text 1</p>
            <p style={{fontSize: "12px",color: "green"}}>text here text here text here text here text here text here text here text here text here text here text here text here </p>
          </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
