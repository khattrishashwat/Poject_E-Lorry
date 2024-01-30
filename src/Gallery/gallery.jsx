import React, { useState,useEffect } from "react";
import Footer from "../Footer/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import axios from "axios";
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Gallery() 
{
  const [galleryevent, setgalleryevent] = useState(false);
  const[galleryvideoitem,setGalleryvideoitem] = useState([])
  const [open, setOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleOpen = (index) => { setCurrentImageIndex(index);setOpen(true)};
  const handleClose = () => setOpen(false);
  const imageItems = galleryvideoitem.filter((item) => item.type === "image");
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageItems.length);
  };

  const characterLimit =12;

  // Truncate the text if it exceeds the character limit
  

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageItems.length - 1 : prevIndex - 1
    );
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
    console.log(resp.data.data,"gallery")
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
      <div>
      
     
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:"50%"
    }}
  >
    <Typography variant="h6" component="h2" style={{color:"white"}}>
      Image {currentImageIndex + 1}
    </Typography>
    {/* <ArrowBackIosNewIcon  onClick={handlePrev}
        style={{
          position: 'absolute',
          right: "50%",
          top: '50%',
          fontSize: "130px",
          transform: 'translateY(-50%)',
        }} /> */}
    <div>
      <Button
        onClick={handlePrev}
        variant="contained"
        color="error"
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        Prev
      </Button>
       
      <img
        src={imageItems[currentImageIndex]?.filename_url}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ maxWidth: '100%' ,alignSelf:'center'}}
      />
      <Button
        onClick={handleNext}
        variant="contained"
        color="error"
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        Next
      </Button>
      {/* <ArrowForwardIosIcon  onClick={handleNext}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }} /> */}
    </div>
  </Box>
</Modal>
    </div>
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
                  
                    {galleryevent ? (
                      <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y]}
                        // spaceBetween={10}
                        slidesPerView={5}
                        navigation={false}
                        simulateTouch={true}
                      >
                        <div id="photos" className="tabcontent active">
                          {imageItems.map((value,index) => (
                            <SwiperSlide >
                              <div className="swiper-wrapper swiperimageonly" key={index}>
                             {value.type === "image" && (
                                <div>  
                              <div className="swiper-slide" >
                                <div
                                  // href={value.filename_url}
                                  //  data-fancybox="gallery"
                                  // title="Event-1"
                                  className="image-containers"
                                  // style={{ width: "211px"}}
                                >
                                  <div
                                    className="image"
                                    style={{
                                      // backgroundImage: `url(${value.filename_url})`,
                                      width: "211px",
                                      height: "171px",
                                      objectFit:"cover"
                                      
                                    }}
                                    
                                  >
                                    <em onClick={() => handleOpen(index,value.title)} className="mdi mdi-magnify-pluss"></em>
                                    <img  onClick={() => handleOpen(index,value.title)} src={value.filename_url} alt="" style={{ objectFit:"cover", width:"210px",height:"165px"}} className="image"/>
                                   
                                    <div className="overlays" >
                                  </div>
                                  </div>
                                </div>
                                <span className="Captioni">{value.title.length > characterLimit
                                   ? value.title.substring(0, characterLimit) + '...'
                                    : value.title}</span>
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
                          spaceBetween={10}
                          slidesPerView={5}
                          navigation={false}
                          simulateTouch={true}

                        >
                          {galleryvideoitem.map((value,index) => (
                            <div className="Event-videos" >
                              {value.type === "youtube_link" && (
                              <div className=""key={index} >
                                <SwiperSlide >
                                  {/* <iframe
                                    src={value.filename_url}
                                    title="Eicher Electric Truck: छोटे व्यापारियों का मुनाफा बढ़ाने आई  Eicher की ई-ट्रक | NBT Life"
                                    frameborder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                  ></iframe>  */}
                                  <div className="swiper-wrapper">
                                    
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
                                  <span className="Captionv">{value.title.length > characterLimit
                                   ? value.title.substring(0, characterLimit) + '...'
                                    : value.title}</span>
                                  </div>
                                  </div>
                                </SwiperSlide>
                              </div>)}
                            </div>
                          ))}
                        </Swiper>
                      </div>
                    )}
                  
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