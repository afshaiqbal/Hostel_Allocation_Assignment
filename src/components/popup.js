import React from 'react';

const Popup=()=>{
    return(
        <>
        <div class="modal hidden">
        <button class="close-modal">&times;</button>
        <h1>Success</h1>
        <p>
         Your room has been booked successfully.
        </p>

        <h5>Your room details are as follows:</h5>
        <h6>Hostel No.</h6>
        <h6>Room No.</h6>
      </div>
      <div class="overlay hidden"></div>
      </>
    );
}

export default Popup;