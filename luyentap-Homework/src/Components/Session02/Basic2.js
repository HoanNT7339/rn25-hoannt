import React from "react";
import image2 from "../../Assets/images/2.jpg";
import { Star, StarFill } from 'react-bootstrap-icons';
 
const Basic2 = function(props) {
  return (
    <div className="col-md-4" style={{border :'1px solid gray'}}>
        <div className="text-center">
            <img style={{width:"60%"}} src={image2} alt=""/> 
        </div>
        <div className="border-bottom">
            <p>Young Shop</p>
        </div>
        <div>
            <p style={{color:"blue"}}>Samsung UHD TC 24inch</p>
        </div>
        <div className="star-rating">
            <StarFill size="15" color="#ff0" />
            <StarFill size="15" color="#ff0" />
            <StarFill size="15" color="#ff0" />
            <StarFill size="15" color="#ff0" />
            <Star size="15" />
        </div>
        <div>
              $599
        </div>
    </div>
  )
}

export default Basic2;