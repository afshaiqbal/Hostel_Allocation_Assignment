import React from "react";

const Chooseah = () => {
  const abc = (e) => {
    console.log(e, e.target);
  };
  return (
    <>
      <h1 className="heading-image">Choose A Hostel</h1>
      <div className="buttons">
        <div>
          <p className="button">B1</p>
          <p className="button">B2</p>
          <p className="button">B3</p>
        </div>
        <div>
          <p className="button">B4</p>
          <p className="button">B5</p>
          <p className="button">B6</p>
        </div>
      </div>
      <div className="buttons">
        <div>
          <p className="button" value="g1" onClick={abc}>
            G1
          </p>
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
};
export default Chooseah;
