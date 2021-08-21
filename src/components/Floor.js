import React from 'react';
import { BrowserRouter, Route,Link } from 'react-router-dom';
import Popup from "./popup"

 
const Floor=()=>{
    return(
        <>
        <h5 className="heading">Choose a Floor</h5>
        <div className="heading">
            <select className="floor">
                <option value="1st Floor">1st Floor</option>
                <option value="2nd Floor">2nd Floor</option>
                <option value="3rd Floor">3rd Floor</option>
                <option value="4th Floor">4th Floor</option>
                <option value="5th Floor">5th Floor</option>
            </select>
        </div>
    <div className="buttons" >
        <div>
            <p className="button-green">1</p>
            <p className="button-green">2</p>
            <p className="button-green">3</p>
            <p className="button-green">4</p>
            </div>
            <div>
                <p className="button-green">10</p>
                <p className="button-green-white">  </p>
                <p className="button-green-white">  </p>
                <p className="button-green">5</p>
            </div>
            <div>
            <p className="button-green">9</p>
            <p className="button-green">8</p>
            <p className="button-green">7</p>
            <p className="button-green">6</p>
        </div>
        
            <Link to="/Popup" className="book">Book Room</Link>
            </div>
       
        </>
      
    );
}

export default Floor;
