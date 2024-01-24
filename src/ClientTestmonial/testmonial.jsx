import React,{useState,useEffect,useRef } from "react";
// import "./testmonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from "swiper/modules";
import axios from "axios";

function Testmonial() 
{


  


  const [dataItem ,setDataItem]=useState([])

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
      innerHeight:300,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    innerHeight:'300px'

  };
  

  const navigationStyles = {
    color: 'red', // Set the color as per your requirement
    fontSize: '24px', // Set the font size as per your requirement
  };


  useEffect(()=>{
    datatest();
  },[])

  const headers={
    // "Content-Type":"application/json",
    "Accept":"application/json",
  }



  const datatest= async()=>
  {
    const resp= await axios.get('/testimonial',{headers:headers})
    console.log("user---------------->" , resp.data.data)
    setDataItem(resp.data.data)
  }


  return (
    <>
      {/* <div className="big-container bg"> */}
        <div className="small-container">
          <h2 className="stakes">What people say <strong>About E-LORRY</strong></h2>
          <span className="line-1"></span>
          <section id="testim" className="testim">
            <div className="wrap">
       
            <span id="right-arrow" className="arrow right fa fa-chevron-right"></span>
            <span id="left-arrow" className="arrow left fa fa-chevron-left "></span>
        
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{  
                  nextEl: '.right-arrow', 
                  prevEl: '.left-arrow',
                }}
                // navigation={true}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                mousewheel={true}
                autoplay={{ delay: '4000', disableOnInteraction: false, pauseOnMouseEnter: true}}
                pagination={{ clickable: true }}
                
              >
              
              {dataItem.map((value, index)=>(
                <SwiperSlide>                
                  <div id="testim-content" className="cont" key={index}>
                  <div className="active">
                    <div className="imgage"><img  src={value.filename_url}  alt="img"/></div>
                    <h2>{value.title}</h2>
                    <p style={{marginBottom:"40px"}} >{value.description}</p>
                  </div>
                  </div>
                </SwiperSlide>
                ))}
                

              </Swiper>
            </div>
          </section> 


        </div>
      

    </>
  );
}

export default Testmonial;
