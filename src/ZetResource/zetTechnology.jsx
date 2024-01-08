import React, { useState,useEffect } from 'react'
import Footer from '../Footer/footer'
import axios from 'axios'

function ZetTechnology() 
{

  const [technologyData,setTechnologydata]=useState([])

  useEffect(()=>{
    technologyItem()
   document.title = 'Technology Page';

  },[])
  
  const headers={
    "Content-Type":"application/json",
    "Accept":"application/json",
  }

  const technologyItem=async()=>
  {
    // console.warn("technology api")
    const resp= await axios.get("/zet-technologies",{headers:headers})
    // console.log("33333",resp.data.data)
    setTechnologydata(resp.data.data)
  }
  const parseHTML = (htmlString) => {
    const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Extract content inside <p> tags
  const pTags = doc.querySelectorAll('p');
  const extractedContent = Array.from(pTags).map((p) => p.innerHTML).join('');

  return extractedContent;
  };

  return (
    <>
      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title">ZET Technologies</h2>
        </div>
      </div>
      <div className="small-container">
        <section className="middle-sec pt-5 pb-3">
          <div className="row posse">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               
                <div>
              <h1 className="inner-h">  {technologyData.page_title}</h1>
              <hr className="inner-hr" />
              <div className="newsdetails-main-s">
                <div className="news-dtls-box enevt-dtls-box">
                  <div className="news-content-inv-s posse">
                    <div className="content-block-extra-inv-s event-block-extra-s">

                   
                     <div dangerouslySetInnerHTML={{ __html: parseHTML(technologyData.page_content) }} />

                    </div>
                    <img src="/imagestechno.png" className="poli-1" />
                  </div>
                </div>
                </div>
              
              </div>
              


            </div>
            <div className="circle-policy"></div>
            <div className="circle-policy-1"></div>
          </div>
        </section>

        <div className="techno-main-parent-grid">
          <div className="techno-grid-1">
            <img src={technologyData.image} />
          </div>
          <div className="techno-grid-2">
              <div dangerouslySetInnerHTML={{ __html: parseHTML(technologyData.image_text) }} />
            <p className="techno-para"></p>
          </div>
        </div></div>



      <Footer />

    </>
  )
}

export default ZetTechnology