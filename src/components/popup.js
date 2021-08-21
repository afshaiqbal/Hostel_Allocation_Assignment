import React from 'react';

const Popup=()=>{
    return(
        <>
        <div class="modal-hidden">
        <button class="close-modal">&times;</button>
        <h1 className="heading">Success</h1>
        
        <p className="success">
         Your room has been booked<br></br> 
         successfully.
        </p>

        <h4>Your room details are as follows:</h4>
        <h5>Hostel No.G1</h5>
        <h5>Room No.7</h5>
      </div>
      </>
    );
}

export default Popup;
