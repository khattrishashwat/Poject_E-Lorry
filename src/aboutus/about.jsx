import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigate, Location } from "react-router-dom";

function About({ showbtn }) {
  // const [hiddebutton, sethiddenbutton] = useState(true);
  const [hiddenitem,setHiddenitem]=useState(true)

  const navigate = useNavigate();
  const location = useLocation();

  // const readhandle = () => {
  //   navigate("/readmore", { state: { hiddebutton: hiddebutton } });

  //   console.log("@#@###@",location)
  //   sethiddenbutton(false);
  // };



  // const originalText =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,  ";

  // const words = originalText.split(' ');
  // const limitedText = words.slice(0, 120).join(' ');



  return (
    <>
      {/* <div className="small-container">
        <div className="main-about-grid">
          <div className="about-grid-1">
            <div className="about-flex">
              <img src="/imagesabout-new-1.jpg"  alt='aboutimg' className="upd-img" />

              <div className="image-2">
                <img src="/imagesabout-new-2.jpg"  alt='aboutimg1' className="upd-img-1" />

              </div>
            </div>

            <img
              src="/imagesabout-shape2.png"
              className="shape-1"
              alt='aboutimg2'
            />
          </div>

          <div className="about-grid-2">
            <h4>Who We Are</h4>
            <h2>About Us</h2>
            <span className="line"></span>

            <p style={{ textAlign: "left" }}>{limitedText}</p>
          </div>
        </div>
      </div> */}

<div className="small-container">
      <div className="main-about-grid1">
       


        <div className="about-grid-2">
          <h4>Who We Are</h4>
          <h2>About Us</h2>
          <span className="line"></span>
          <p>
            {hiddenitem ? 
            "The electrification of road transport is the need of the hour to reduce the country's overall greenhouse gas emissions. While the electrification of two and three wheelers  cars and buses are gaining momentum, there is a significant push required for the electrification of the medium and heavy-duty trucks in India"
             :      
             "The electrification of road transport is the need of the hour to reduce the country's overall greenhouse gas emissions. While the electrification of two and three wheelers  cars and buses are gaining momentum, there is a significant push required for the electrification of the medium and heavy-duty trucks in India.Trucks represent about 5% of total vehicle fleet in India, but they are responsible for more than 70% of CO2 emissions from road transport.1 In freight transport, trucks constitute 70% share by tonne-km2. The growth of India's truck stock and road freight market is going to increase by four folds through 2050 which shows a steep rise in the demand for zero emission truck (ZET). Given the noise around ZETs globally, many enthusiasts are working" 
             }</p>

          <button onClick={()=>setHiddenitem(!hiddenitem)} id="myBtn">Read more</button>
        </div>


      </div>
    </div>
    </>
  );
}

export default About;
