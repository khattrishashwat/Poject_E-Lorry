import React from "react";
// import "./zetmarket.css";

function zetmarket() {
  return (
    <>
      {/* <div className="small-container">
        <h2 className="stakes">Statistics ZET Market</h2>
        <span className="line-1"></span>
        <div className="main-parent-grid-2 mt-70">
          <div className="gri-1">
            <div className="hovicon effect-4 sub-b">
              <img
                src={process.env.PUBLIC_URL + "/image/ev-sale-01.png"}
                className="circle-1"
              />
              <h2 className="goals">34,885</h2>
              <p>Loreum Ipsum Dol Sit Amet Constectur</p>
            </div>
          </div>

          <div className="gri-1">
            <div className="hovicon effect-4 sub-b">
              <img
                src={process.env.PUBLIC_URL + "/image/ev-sale-02.png"}
                className="circle-1"
              />
              <h2 className="goals">45+</h2>
              <p>Loreum Ipsum Dol Sit Amet Constectur</p>
            </div>
          </div>

          <div className="gri-1">
            <div className="hovicon effect-4 sub-b">
              <img
                src={process.env.PUBLIC_URL + "/image/ev-sale-03.png"}
                className="circle-1"
              />
              <h2 className="goals">136</h2>
              <p>Loreum Ipsum Dol Sit Amet Constectur</p>
            </div>
          </div>

          <div className="gri-1">
            <div className="hovicon effect-4 sub-b">
              <img
                src={process.env.PUBLIC_URL + "/image/ev-sale-04.png"}
                className="circle-1"
              />
              <h2 className="goals">61</h2>
              <p>Loreum Ipsum Dol Sit Amet Constectur</p>
            </div>
          </div>
        </div>
      </div> */}

<div className="small-container" >
  
    <h2 className="stakes" style={{marginLeft:"3rem"}}>Key ZET Statistics</h2>
    <span className="line-1" ></span>
    <div className="main-parent-grid-2 mt-70" style={{display:"flex",alignItems:"center",gap:"4rem",justifyContent:"space-between",padding:"0 7px"}}>

      <div className="gri-1">
        <div className="hovicon effect-4 sub-b">
          <img src='images/ev-sale-01.png' className="circle-1"/>
          <h2 className="goals">15 Mt</h2>
          <p>Annual savings of CO2 emissions</p>
        </div>
      </div>

      <div className="gri-1">
        <div className="hovicon effect-4 sub-b">
          <img  src='images/ev-sale-02.png'  className="circle-1" />
          <h2 className="goals">6900 mil. ltrs </h2>
          <p>Annual savings of fuels</p>
        </div>
      </div>

      <div className="gri-1">
        <div className="hovicon effect-4 sub-b">
          <img  src='images/ev-sale-03.png' className="circle-1" />
          <h2 className="goals">INR 51800 Cr.</h2>
          <p>Annual savings fuel cost</p>
        </div>
      </div>

      <div className="gri-1">
        <div className="hovicon effect-4 sub-b">
          <img  src='images/ev-sale-04.png' className="circle-1" />
          <h2 className="goals">INR 11 lakhs </h2>
          <p>Annual savings in operating costs of MGV and HGV.</p>
        </div>
      </div>

    </div>
    <p className="key-statics">The above figures show the forecast for electrification of fleet transport with 5% EVs in Medium Goods Vehicle (MGV) and Heavy Goods Vehicle (HGV) by 2030.</p>
  </div>



    </>
  );
}

export default zetmarket;
