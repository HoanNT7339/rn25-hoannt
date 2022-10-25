import React from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import List from "./List";
import RegisterForm from "./RegisterForm";
import Detail from "./Detail";
import Nav from "./Nav";
import InputUser from "./InputUser";

//ListPage , Form , Detail


function BrowserRouterExample() {
  return (
    <BrowserRouter>
    <Nav />
        <Routes>
          <Route path='/' element={<div><List /></div>}></Route>
          <Route path='/list' element={<div><List /></div>}></Route>
          <Route path='/form' element={<div><RegisterForm /></div>}></Route>
          <Route path='/detail' element={<div><Detail /></div>}></Route>
          <Route path='/input' element={<div><InputUser /></div>}></Route>
          <Route path='*' element={<div style={{ textAlign:'center'}}><h1>Page not found!</h1></div>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default BrowserRouterExample;
