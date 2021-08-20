import React from "react";
import Boy from "./boy";
import Girl from "./girl";


const Chooseyh = () => {
  const [click, setClick] = React.useState("");
  return (
    <>
      <div>
        {!click ? (
          <div>
            <h2 className="heading-image">Choose a Hostel</h2>
            <div className="images">
              <div
                className="girls"
                onClick={() => {
                  setClick("girls");
                }}
              >
                <img
                  className="image girl"
                  src="https://findicons.com/files/icons/1275/naruto_vol_1/128/hyuga_hinita.png"
                />
                <p>Girls Hostels</p>
              </div>
              <div
                className="boys"
                onClick={() => {
                  setClick("boys");
                }}
              >
                <img
                  className="image boy"
                  src="https://findicons.com/files/icons/1275/naruto_vol_1/256/uzumaki_naruto.png"
                />
                <p>Boys Hostels</p>
              </div>
            </div>
          </div>
        ) :(
            click ==="girls"?<Girl/>:<Boy/>
          )}
      </div>
    </>
  );
};
export default Chooseyh;
