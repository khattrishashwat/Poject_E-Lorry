import React, { useState,useEffect } from 'react'
import Footer from '../Footer/footer'
import axios from 'axios'
import technoimage from '../techno.png'



function Term() 
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
    const resp= await axios.get("/terms-condition",{headers:headers})
    // console.log("33333",resp.data.data[0])
    setTechnologydata(resp.data.data[0])
  }
  
  

//   const parseHTML = (htmlString) => {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlString, 'text/html');
  
//     const ulItems = doc.querySelectorAll('ul li');
//     ulItems.forEach((li) => {
//       const text = li.textContent;
//       li.textContent = text.replace(/&ndash;/g, '–');
//     });
  
//     return doc.body.innerHTML;
//   };

const parseHTML = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const ulItems = doc.querySelectorAll('ul li');
    ulItems.forEach((li) => {
      const text = li.textContent;
      li.textContent = text.replace(/&ndash;/g, '–');
    });

    const olItems = doc.querySelectorAll('ol li');
    olItems.forEach((li) => {
      const text = li.textContent;
      li.textContent = text.replace(/&ndash;/g, '–');
    });

    return doc.body.innerHTML;
  };



  return (
    <>
      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title">Term & Conditions</h2>
        </div>
      </div>
      <div className="small-container">
        <section className="middle-sec pt-5 pb-3">
          <div className="row posse">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {/* <h1 className="inner-h" style={{textAlign: 'center'}}>{technologyData.page_title}</h1>
            <hr className="inner-hr" style={{marginLeft: '538px'}}></hr> */}
                <div>
              {/* <h1 className="inner-h">  </h1>
              <hr className="inner-hr" /> */}
              <div className="newsdetails-main-s">
                <div className="news-dtls-box enevt-dtls-box">
                  <div className="news-content-inv-s posse">
                    <div className="content-block-extra-inv-s event-block-extra-s myrs">

                   
                     <div class="m-bot-new-1" style={{marginLeft: '40px'}} dangerouslySetInnerHTML={{ __html: parseHTML(technologyData.page_content) }} />

                    </div>
                    <img src={technoimage} className="poli-1" />
                  </div>
                </div>
                </div>
              
              </div>
              


            </div>
            {/* <div className="circle-policy"></div>
            <div className="circle-policy-1"></div> */}
          </div>
        </section>

        {/* <div className="techno-main-parent-grid">
          <div className="techno-grid-1">
            <img src={technologyData.image} style={{width:'1132px'}} />
          </div>
          <div className="techno-grid-2">
              <div dangerouslySetInnerHTML={{ __html: parseHTML(technologyData.image_text) }} />
            <p className="techno-para"></p>
          </div>
        </div> */}
        </div> 



      <Footer />

    </>
  )
}

export default Term