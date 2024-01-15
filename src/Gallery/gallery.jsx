import React, { useState,useEffect } from "react";
import Footer from "../Footer/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import axios from "axios";
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";

function Gallery() 
{
  const [galleryevent, setgalleryevent] = useState(false);
  const[galleryvideoitem,setGalleryvideoitem] = useState([])



  useEffect(()=>{
      videoitems()
      document.title = 'Gallery Page';
  },[])

  const headers={
    "Content-Type":"application/json",
    "Accept":"application/json",
  }


  const videoitems=async()=>
  {
    const resp=await axios.get('/gallery', {headers:headers})
    // console.log(resp.data.data)
    setGalleryvideoitem(resp.data.data)
  }


  const opengalley = () => {
    setgalleryevent(true);
  };

  const openvideo = () => {
    setgalleryevent(false);
  };

  return (
    <>
      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title"> Gallery </h2>
        </div>
      </div>

      <div className="Galler_section">
        <div className="small-container">
          <div className="Galler-section-div">
            <div className="tab-flex">
              <div className="tab">
                <button className={galleryevent ? "tablinks active" : "tablinks"} onClick={opengalley}>
                  Photos Gallery
                </button>
                <button className={galleryevent ? "tablinks " : "tablinks active"} onClick={openvideo}>
                  Video Gallery
                </button>
              </div>
            </div>

            <div className="Galler-section-div">
              <div className="carousel-gallery">
                <div className="swiper-container">
                  {/* <div className="swiper-wrapper"> */}
                    {galleryevent ? (

                      <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={10}
                        slidesPerView={14}
                        navigation={false}
                        simulateTouch={true}
                      >
                        <div id="photos" className="tabcontent active">
                          {galleryvideoitem.map((value,index) => (
                            <SwiperSlide >
                              <div className="swiper-wrapper swiperimageonly" key={index}>
                             {value.type === "image" && (
                                <div>  
                              <div className="swiper-slide" >
                                <div className="ttemp"
                                  data-fancybox="gallery"
                                  title="Event-1"
                                  style={{ width: "211px"}}
                                >
                                  <div
                                    className="image"
                                    // style={{
                                    //   backgroundImage: `url(${value.filename_url})`,
                                    // }}
                                  >

                                    <img src={value.filename_url} alt="imgx-1" width='207px' height='200px' />
                                    <div className="overlay">
                                      <em className="mdi mdi-magnify-plus"></em>
                                    </div>
                                  </div>
                                </div>
                                <span className="Captioni">Event-1</span>
                              </div>

                              </div>
                             )}
                             </div>
                            </SwiperSlide>
                          ))} 


               

                        </div>
                      </Swiper>
                    ) : (
                      <div
                        id="videos"
                        className="tabcontent active"
                        style={{ width: '100%' }}
                      >
                        <Swiper
                          modules={[Navigation, Pagination, A11y]}
                          spaceBetween={20}
                          slidesPerView={5}
                          navigation={false}
                          simulateTouch={true}

                        >
                          {galleryvideoitem.map((value,index) => (
                            <div className="Event-videos" >
                              <div className=""key={index} >
                                <SwiperSlide >
                                  {/* <iframe
                                    src={value.filename_url}
                                    title="Eicher Electric Truck: छोटे व्यापारियों का मुनाफा बढ़ाने आई  Eicher की ई-ट्रक | NBT Life"
                                    frameborder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                  ></iframe> */}
                                  <div className="swiper-wrapper">
                                    {value.type === "youtube_link" && (
                                     <div>
                                  <ReactPlayer url={value.filename_url}
                                    controls
                                    width="100%"
                                    height="100%"
                                    config={{
                                      youtube: {
                                        playerVars: { showinfo: 1 },
                                      },
                                    }}

                                    fullscreen={true} />
                                  <span className="Captionv">Video-1</span>
                                  </div>)}
                                  </div>
                                </SwiperSlide>
                              </div>
                            </div>
                          ))}
                        </Swiper>
                      </div>
                    )}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
