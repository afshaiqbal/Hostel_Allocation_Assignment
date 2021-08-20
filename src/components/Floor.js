import React from 'react';
 
const Floor=()=>{
    return(
        <>
        <h5 className="heading">Choose a Floor</h5>
        <div className="heading">
            <select>
                <option value="1st Floor">1st Floor</option>
                <option value="2nd Floor">2nd Floor</option>
                <option value="3rd Floor">3rd Floor</option>
                <option value="4th Floor">4th Floor</option>
                <option value="5th Floor">5th Floor</option>
                <option value="6th Floor">6th Floor</option>
                <option value="7th Floor">7th Floor</option>
                <option value="8th Floor">8th Floor</option>
                <option value="9th Floor">9th Floor</option>
                <option value="10th Floor">10th Floor</option>
            </select>
        </div>
        <div className="buttons">
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
        </div>
        <div>
            <button>Book Room</button>
        </div>
        </>
    );
}

export default Floor;