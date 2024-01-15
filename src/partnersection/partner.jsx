import axios from 'axios';
import React, { useEffect, useRef,useState } from 'react'
import Carousel from 'react-multi-carousel';
import Slider from 'react-slick';



function Partner() {

  const [Datapart,setDataPart]=useState([])
  // const settings = {
  //   // dots: true,
  //   infinite: true,
  //   speed: 3000,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   autoplay: true,
  //   autoplaySpeed: 3000, 
  // };

  useEffect(()=>{
    partnerData()
  },[])
  

  const headers = {
  
    "Accept": "application/json",
      
  }
  const partnerData=async()=>
  {
    const resp= await axios.get('/partners',{headers:headers})
    console.log("partner------",resp.data.data)
    setDataPart(resp.data.data)
  }


 

  return (
    <>

      {/* <h2 className="stakes">Our Partner</h2>
      <span className="line-1"></span> */}

      {/* 
<div className="small-container">

<Swiper
  
      ref={swiperRef}
        spaceBetween={20}
        slidesPerView={3}
         pagination={{ clickable: true }}

      loop={true}
      
    > */}


      {/* <section className="half-color-box mars">
    <div className="container spacer por">
      <div className="swiper-container swiper-testimonial">
        <div className="swiper-wrapper chemps">



          {partnerimages.map((value)=>( */}

      {/* <SwiperSlide>
<div className="swiper-slide">
  <div className="review-box-1">
    <div className="media">
      <img className="mr-3-1" src={value} alt="Generic placeholder image"/>

  </div>
</div></div>
</SwiperSlide>

          ))}
        </div>
       
      </div>
     </div>
     </section>

     </Swiper>
     </div> */}
      {/* <Carousel 
        navButtonsAlwaysVisible
        autoPlay={true}
        cycleNavigation={true}
        animation="fade"
        timeout={400}
        swipe="mouse"
      > */}

      {/* <div className="marquee">
<Slider {...settings}>
  <ul className="marquee-content">
    <li>
      <img src= {process.env.PUBLIC_URL + "/image/ashoka-11.png"} />
    </li>

    <li>
      <img src={process.env.PUBLIC_URL + "/image/Tata_Motors_Logo.svg.png"}/>
    </li>
    <li>
      <img src={process.env.PUBLIC_URL + "/image/EICHERMOT.png"} />
    </li>
    <li>
      <img src={ process.env.PUBLIC_URL + "/image/UD_Trucks-Logo.wine-removebg-preview.png"} />
    </li>


  <li>
      <img src={process.env.PUBLIC_URL + "/image/Tata_Motors_Logo.svg.png"} />
    </li><li>
      <img src={ process.env.PUBLIC_URL + "/image/UD_Trucks-Logo.wine-removebg-preview.png"}  />
    </li><li>
      <img src={process.env.PUBLIC_URL + "/image/ashoka-11.png"} />
    </li><li>
      <img src={process.env.PUBLIC_URL + "/image/EICHERMOT.png"} />
    </li><li>
      <img src={process.env.PUBLIC_URL + "/image/EICHERMOT.png"} />
    </li></ul>
    </Slider>
</div> */}

      {/* </Carousel> */}

      {/* <div className="small-container" >
        <div className="marquee  resslide" >
          <div className='resp-width'>
            <Slider {...settings} >
              <div >
                <img src={process.env.PUBLIC_URL + "/image/ashoka-11.png"} alt="Image 1" width="220px" />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/image/Tata_Motors_Logo.svg.png"} alt="Image 2" width="220px" />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/image/EICHERMOT.png"} alt="Image 3" width="220px" />
              </div>
              <div>
             
             
       
     

            </Slider>
          </div>
        </div>
      </div> */}



 <h2 className="stakes">Our Partners</h2>
  <span className="line-1"></span>
  <div className="small-container">
    <div className="part-main-parent-grid">
      {Datapart.map((value,index)=>(
      <div className="part-grid-1" key={index} >
        <img src={value.image}   alt='img-1' width={'100px'}/>
      </div>
      ))}
    </div>

</div>


    </>
  )
}

export default Partner