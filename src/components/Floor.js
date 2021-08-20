import React from 'react';
 
const Floor=()=>{
    return(
        <>
        <h5>Choose a Floor</h5>
        <div>
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
        <div>
                <button value="1st Floor">1</button>
                <button value="2nd Floor">2</button>
                <button value="3rd Floor">3</button>
                <button value="4th Floor">4</button>
                <button value="5th Floor">5</button>
                <button value="6th Floor">6</button>
                <button value="7th Floor">7</button>
                <button value="8th Floor">8</button>
                <button value="9th Floor">9</button>
                <button value="10th Floor">10</button>
        </div>
        <div>
            <button>Book Room</button>
        </div>
        </>
    );
}

export default Floor;