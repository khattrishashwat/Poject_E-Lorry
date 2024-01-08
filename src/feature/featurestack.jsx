import React from "react";
// import "./featurestack.css";
import { Link } from "react-router-dom";

function featurestack() {
  return (
    <>
      <div className="big-container bg">
        <div className="small-container">
          <div className="stakeholder">
            <h2 className="stakes">Featured</h2>
            <span className="line-1"></span>
            <div className="stake-main-parent-grid">
              <div className="stake-1">
                <img  src={`${process.env.REACT_APP_IMAGE_MODE}images/new-upd-logo.png`}  alt="upload1" />
                <h2>Reports & Articles</h2>
                <p>Explore our comprehensive collection of reports and articles that delve deep into the world of electric
                  trucks. Stay informed and up-to-date on the latest industry trends and technological advancements from
                  the realm of electric trucking.</p>

                <Link to="/zet-resource/reportartical" className="about-btn-1">Read More &nbsp;&nbsp;<i
                  className="fa-solid fa-arrow-right"></i></Link>
              </div>



              <div className="stake-1">
                <img  src={`${process.env.REACT_APP_IMAGE_MODE}images/new-upd-logo-1.png`} className="travel"  alt="upload2"/>
                <h2>ZET Vehicle Models</h2>
                <p>Explore the diverse range of electric truck models available in India with their specifications.</p>

                <Link to="/zet-resource/zetvehical" className="about-btn-1">Read More &nbsp;&nbsp;<i
                  className="fa-solid fa-arrow-right"></i></Link>
              </div>



              <div className="stake-1">
                <img  src={`${process.env.REACT_APP_IMAGE_MODE}images/new-upd-logo-2.png`}  alt="upload3" />
                <h2> ZET Policy</h2>
                <p>Know about the relevant policies giving boost to electric trucks adoption in India.</p>
                <Link to="/zetresource/zetpolicy" className="about-btn-1">Read More &nbsp;&nbsp;<i
                  className="fa-solid fa-arrow-right"></i></Link>
              </div>

              <div className="stake-1">

                <img src={`${process.env.REACT_APP_IMAGE_MODE}images/new-upd-logo-3.png`} alt="upload4" />
                <h2> ZET Technologies</h2>
                <p>Discover here about the role of latest advancements in battery technology, electric drivetrains, and
                  intelligent telematics in the development of ZET Roadmap</p>
                <Link to="/zet-resource/zettechnology" className="about-btn-1">Read More &nbsp;&nbsp;<i
                  className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
}

export default featurestack;
