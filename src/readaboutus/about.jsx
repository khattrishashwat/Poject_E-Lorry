import React from "react";
import { useLocation } from "react-router-dom";
import Aboutitem from "../aboutus/about";
import Footer from "../Footer/footer";
// import "../aboutus/about.css";

function Abouts({ hiddebutton }) {
  const location = useLocation();

  return (
    <>
      <Aboutitem showbtn={true} />

      <div className="main-about-grid-1 mt-6">
        <div className="about-grid-3">
          <h2>The Trucking Brand</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text,
          </p>
        </div>
        <div className="about-grid-4">
          <img  src={`${process.env.REACT_APP_IMAGE_MODE}image/img-bkg01.jpg`} alt="about21"/>
        </div>

        <div className="about-grid-4">
          <img  src={`${process.env.REACT_APP_IMAGE_MODE}image/truck-13.jpg`} alt="about22" />
        </div>

        <div className="about-grid-3">
          <h2>WHY CHOOSE TRUCKING</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text,
          </p>

          {/* <!-- <ul>
                    <li>Operating Worldwide</li>
                       <li>Professional Personnel</li>
                            <li>End-to-end Solutions</li>
                                  <li>Flexible Services</li>
                </ul> --> */}
        </div>
      </div>

      <h2 className="stakes">Our Partner</h2>
      <span className="line-1"></span>

      <div className="marquee">
        <ul className="marquee-content">
          <li>
            <img
               src={`${process.env.REACT_APP_IMAGE_MODE}image/Tata_Motors_Logo.svg.png`} alt="about23"
            />
          </li>

          <li>
            <img
            
              src={`${process.env.REACT_APP_IMAGE_MODE}image/EICHERMOT.NS_BIG-373d4aae-removebg-preview.png`}
              alt="about24"
            />
          </li>
          <li>
            <img
            
              src={`${process.env.REACT_APP_IMAGE_MODE}image/UD_Trucks-Logo.wine-removebg-preview.png`}
              alt="about17"
            />
          </li>
          <li>
            <img
             
              src={`${process.env.REACT_APP_IMAGE_MODE}image/ashoka-removebg-preview.png}`}
              alt="about28"
            />
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Abouts;
