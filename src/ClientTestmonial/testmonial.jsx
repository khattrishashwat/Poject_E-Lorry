import React,{useState,useEffect} from "react";
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
      <div className="small-container">
        <h2 className="stakes">What people say <strong>About E-LORRY</strong></h2>
        <span className="line-1"></span>
         <section id="testim" className="testim">
          <div className="wrap">
          {/* <div className="swiper-button-next "></div>
          <div className="swiper-button-prev "></div>   */}
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
              mousewheel
              autoplay={{ delay: '3000', disableOnInteraction: false }}
              pagination={true}
          
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
              {/* <SwiperSlide>
                <div id="testim-content" className="cont">
                  <div className="active">
                    <div className="imgage"><img src='image/im-1.jpg'  alt="xyz" /></div>
                    <h2>Lorem P. Ipsum</h2>
                    <p style={{marginBottom:"40px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="testim-content" className="cont">
                  <div className="active">
                    <div className="imgage"><img  src='image/im-1.jpg' alt="abc" /></div>
                    <h2>Lorem P. Ipsum</h2>
                    <p style={{marginBottom:"40px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  </div>
                </div>
              </SwiperSlide> */}

              
              

            </Swiper>
          </div>
        </section> 

{/* <section id="testim" className="testim">
        
        <div className="wrap">

          <span id="right-arrow" className="arrow right fa fa-chevron-right"></span>
          <span id="left-arrow" className="arrow left fa fa-chevron-left "></span>
          <ul id="testim-dots" className="dots">
            <li className="dot active"></li>
            <li className="dot"></li>
          </ul>

          <div className="testmonial-upper-section">
            <div className="testmonial-middle-box"></div>



          </div>
          <div id="testim-content" className="cont">

            <div className="active">
              <div className="imgage"><img
                  src="/imagesprofile.jpg"
                  alt=""/></div>
              <h2>Ankit Gupta</h2>
              <p>Your climate-controlled storage kept my inventory in perfect condition, and your flexible retrieval system made getting products out a breeze. You're a true partner.</p>
            </div>

            <div >
              <div className="imgage"><img
                  src="/imagesprofile.jpg"
                  alt=""/></div>
              <h2>Arpit Sharma</h2>
              <p>Your streamlined logistics solutions not only saved us time but also significantly reduced our shipping costs. You're a true cost-saver.</p>
            </div>

            <div>
              <div className="imgage"><img
                  src="/imagesprofile.jpg"
                  alt=""/></div>
              <h2>Arpit Sharma</h2>
              <p>Your team went above and beyond to track down a missing package and keep me informed every step of the way. Your dedication to customer satisfaction is truly remarkable.</p>
            </div>

            <div>
              <div className="imgage"><img
                  src="/imagesprofile.jpg"
                  alt=""/></div>
              <h2>Ankit Gupta</h2>
              <p>You treated my business as if it were your own. Your personalized approach and genuine care are what set you apart from the competition.</p>
            </div>

            <div>
              <div className="imgage"><img
                  src="/imagesprofile.jpg"
                  alt=""/></div>
              <h2>Ankit Gupta</h2>
              <p>Your on-time deliveries and friendly drivers made my customers rave about our service. You're the reason we keep exceeding expectations.</p>
            </div>

          </div>

        </div>
    
  </section>
   */}


      </div>
    </>
  );
}

export default Testmonial;
