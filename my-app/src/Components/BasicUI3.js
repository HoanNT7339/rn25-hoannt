import React from "react";
import image3 from "../assets/images/3.jpg";
 
const BasicUI3 = function(props) {
  return (
    <div className="col-md-4 component03">
            <div className="text-center">
              <img style={{width:"100%",height:"40%"}} src={image3} alt=""/> 
            </div>
            <div>
            <p style={{color:"gray", padding:""}}>Technology</p>
            <p style={{fontSize:"20px", fontWeight:"bold"}}>Harman Kadon Onyx Studio Mini, Reviews & Experiences</p>
            <p style={{color:"gray"}}>Feb 21,2021 by drfurion</p>
            </div>
          </div>
  )
}

export default BasicUI3;