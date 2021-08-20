import React from 'react';
import Chooseyh from './Chooseyh';
import Floor from './Floor';
import { BrowserRouter, Link, Route} from 'react-router-dom';

const Boy=()=>{
    return(
        <BrowserRouter>
        <>
        <h1 className="heading-image">Choose A Hostel</h1>
        <div className="buttons"  >
        <div onClick={()=>(
                <Chooseyh/>
            )}>
            <Link to ="/Floor" className="button">B1</Link>
            <p className="button">B2</p>
            <p className="button">B3</p>
            </div>
            <div>
            <p className="button">B4</p>
            <p className="button">B5</p>
            <p className="button">B6</p>
        </div>
        <Route exact path="/Floor" component={Floor}/>
        </div>
       
        </>
        </BrowserRouter>
    );
}
export default Boy;