import React from "react";
import image1 from "../assets/images/1.jpg";
 
const BasicUI1 = function(props) {
  return (
    <div className="col-md-4 d-flex flex-column flex-md-row justify-content-between align-items-start component01">
      <div className="d-flex p-2">
        <img style={{width:"150px"}} src={image1} alt=""/> 
      </div>
      <div className="display-flex">
        <div>
          <p style={{fontSize: "20px", fontWeight: "bold"}}>Clothing & Apparel</p>
        </div>
        <div>
          <p style={{fontSize: "15px", color:"gray"}}>Accessories</p>
          <p style={{fontSize: "15px", color:"gray"}}>Bags</p>
          <p style={{fontSize: "15px", color:"gray"}}>Kid'S Fashion</p>
          <p style={{fontSize: "15px", color:"gray"}}>Mens</p>
        </div>
      </div>
    </div>
  )
}

export default BasicUI1;