import React from "react";
import Carousel from "react-material-ui-carousel";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import 'react-responsive-carousel/lib/styles/main.min.css';



// import "./sliders.css";
export default function Slider() {
  // You can add more styles as needed

  const sliderStyleitem = () =>
    [
      'images/tru.jpg',
      "images/tru.jpg",
      "images/tru.jpg",
    ]
  // console.warn("QQQQ", sliderStyleitem)

  const slideritemUrl = sliderStyleitem();
  // console.warn("WWWWWWW", slideritemUrl)

 

     const customIndicatorStyle = {
            diplay:'flex',
            width: "100%",
            marginTop: "3px",
            textAlign: "center",
            position:'absolute',
            bottom: '30px',
            zIndex: '9999',
        
    
    };



  return (
    <>
      <Carousel
        navButtonsAlwaysVisible
        autoPlay={true}
        cycleNavigation={true}
        animation="slide"
        timeout={400}
        swipe="mouse"
        infiniteLoop={true}
        interval={3000}
        indicatorContainerProps={{ style: customIndicatorStyle }}
        
      >
        {/* {slideritemUrl.map((value,index) => (
          <div
          key={index}
            className="slider"
            style={{
              backgroundImage: `url(${value})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",

            }}
            
          >
            
            {/* <div className="slide">
              <div className="content">
                <div className="head-and-button">
                  <h2 className="font">
                    Transport Your Good Around{" "}
                    <span className="text-break">the World</span>
                  </h2>
                  <p>
                    <span>Dedicated To Deliver</span>
                  </p>
                </div>
              </div>
              <div className="box-1"></div>
            </div> 
          </div>
        ))} */}
        {slideritemUrl.map((value, index) => (
          <div className="carousel-inner" key={index}>
            <div className="carousel-item active">
              <img src={value} className="d-block w-100" alt="..." />
              <div className="new-black"></div>
              <h5>Empowering Tomorrow roads with Electric Trucks</h5>
            </div>
          </div>
        ))} 

 {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/tru.jpg" className="d-block w-100" alt="..." />
          <div className="new-black"></div>
          <h5>Empowering Tomorrow roads with Electric Trucks</h5>
        </div>
        <div className="carousel-item">
          <img src="images/tru.jpg" className="d-block w-100" alt="..." />
          <div className="new-black"></div>
          <h5>Revolutionize the Road with Electric Trucks</h5>
        </div>
        <div className="carousel-item">
          <img src="images/tru.jpg" class="d-block w-100" alt="..."/>
          <div className="new-black"></div>
          <h5>Clean, Quiet, and Powerful: Electric Trucks for Modern Transportation</h5>
        </div>
      </div>
      </div>  */}
       

      </Carousel>
     
     
    </>
  );
}
