import React from "react";
import Footer from "../Footer/footer";
// import "./search.css";

function search() {
  return (
    <>
      {/* <div className="small-container po">
        <div className="search-logo">
          <img src={process.env.PUBLIC_URL + "/image/logo-new.png"} />
        </div>

        <form className="exampleserach">
          <input type="text" placeholder="Type to Search...." name="" />

          <button type="submit" className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>

        <div className="recent">
          <h3>Recent Search</h3>

          <div className="recent-parts-1">
            <a href="" className="wl">
              Logistics
            </a>
            <a href="">
              <i className="fa-solid fa-arrow-up-long"></i>
            </a>
          </div>

          <div className="recent-parts-1">
            <a href="" className="wl">
              Shipping
            </a>
            <a href="">
              <i className="fa-solid fa-arrow-up-long"></i>
            </a>
          </div>

          <div className="recent-parts-1">
            <a href="" className="wl">
              Zero Emission Truck
            </a>
            <a href="">
              <i className="fa-solid fa-arrow-up-long"></i>
            </a>
          </div>
        </div>
      </div> */}


      <div className="small-container po">
        <div className="search-logo">
          <img src="/imagese-Lorry.png" alt="search21" /></div>

        <form className="example" style={{ margin: 'auto', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'unset !important', boxShadow: 'unset !important', padding: '0px !important' }}>

          <input type="text" placeholder="Type to Search...." name="" />&nbsp; &nbsp; &nbsp;

          <button type="submit" className="search-btn"><i className="fa fa-search"></i></button>

        </form>

        <div className="recent">
          <h3>Recent Search</h3>

          <div className="recent-parts-1">
            <a href="" className="wl">Logistics</a>
            <a href=""><i className="fa-solid fa-arrow-up-long"></i></a>
          </div>

          <div className="recent-parts-1">
            <a href="" className="wl">Shipping</a>
            <a href=""><i className="fa-solid fa-arrow-up-long"></i></a>
          </div>

          <div className="recent-parts-1">
            <a href="" className="wl">Zero Emission Truck</a>
            <a href=""><i className="fa-solid fa-arrow-up-long"></i></a>
          </div>

        </div>

      </div>



      <Footer />
    </>
  );
}

export default search;
