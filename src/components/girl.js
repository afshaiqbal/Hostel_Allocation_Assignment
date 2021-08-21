import React from 'react';
import { BrowserRouter, Link, Route,Switch} from 'react-router-dom';
import Floor from './Floor';

const Girl=()=>{
    return(
        <>
        <h1 className="heading-image">Choose A Hostel</h1>
        <div className="buttons" >
        <div >
            <Link to ="/Floor" className="button">G1</Link>
            {/* <p className="button">G1</p> */}
            <p className="button">G2</p>
            <p className="button">G3</p>
            </div>
            <div>
            <p className="button">G4</p>
            <p className="button">G5</p>
            <p className="button">G6</p>
        </div>
        </div>
        </>
    
    );
}
export default Girl;
