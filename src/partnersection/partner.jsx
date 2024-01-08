import React, { useEffect, useRef } from 'react'
import Carousel from 'react-multi-carousel';
import Slider from 'react-slick';



function Partner() {

  // const settings = {
  //   // dots: true,
  //   infinite: true,
  //   speed: 3000,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   autoplay: true,
  //   autoplaySpeed: 3000, 
  // };


 

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
                <img src={process.env.PUBLIC_URL + "/image/UD_Trucks-Logo.wine-removebg-preview.png"} alt="Image 1" width="220px" />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/image/ashoka-11.png"} alt="Image 2" width="220px" />
              </div>
              <div>
                <img src={process.env.PUBLIC_URL + "/image/EICHERMOT.png"} alt="Image 3" width="220px" />
              </div>
              <div>
                 <img src={process.env.PUBLIC_URL +"/imagesshakti.png"} alt="Image 4" width="220px" />
               </div>
               <div>
                 <img src={process.env.PUBLIC_URL +"/imagesteri.png"} alt="Image 5" width="220px" />
                </div>
                 
                <div>
                 <img src={process.env.PUBLIC_URL +"/imageswri.png"}  alt="Image 6"  width="220px" height='50px' />
                 </div>

                 <div>
                 <img src={process.env.PUBLIC_URL +"/imagesshakti.png"} alt="Image 7"  width="220px"/>
                 </div>

                 <div>
                 <img src={process.env.PUBLIC_URL +"/imageswri.png"} alt="Image 8" width="220px" height='50px' />
                 </div>

       
     

            </Slider>
          </div>
        </div>
      </div> */}


 <h2 className="stakes">Our Partners</h2>
  <span className="line-1"></span>
  <div className="small-container">
    <div className="part-main-parent-grid">

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-1.png`}   alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-2.png`}  />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-3.png`}  alt='img-1' />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-4.png`}  alt='img-1'  />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-5.png`}  alt='img-1'  />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-6.png`}  alt='img-1'  />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-7.png`}  alt='img-1'  />
      </div>

      <div className="part-grid-1">
        <img src="images/logo-1/img-8.png" alt='img-1' />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-9.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-10.png`}  alt='img-1' />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-11.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-14.png`}  alt='img-1' />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-13.png`}  alt='img-1' />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-14.png`}  alt='img-1' />
      </div>


      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-15.png`}  alt='img-1' />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-16.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-17.png`}  alt='img-1'  />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-18.png`}  />
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-19.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-20.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-21.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-22.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-23.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-24.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-25.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-26.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-27.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-28.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-29.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-30.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-31.png`}  alt='img-1'/>
      </div>

      <div className="part-grid-1">
        <img src={`${process.env.REACT_APP_IMAGE_MODE}images/logo-1/img-32.png`}  alt='img-1'/>
      </div>
    </div>
  </div> 



    </>
  )
}

export default Partner