import React, { useState, useEffect } from 'react'
// import './resource.css'
import Footer from '../Footer/footer'
import Toggleicon from '../sidetoggle/sidetoggle'
import axios from 'axios'
import * as DOMPurify from 'dompurify';

function Zetpolicy() 
{

  const [policeData,setPolicedata]=useState([])

  useEffect(()=>{
    policeitem()
   document.title = 'Policies Page';

  },[])

  const headers={
    "Content-Type":"application/json",
    "Accept":"application/json",
  }

  const policeitem=async()=>{
    // console.warn("this is police api")
    const resp= await axios.get("/zet-policies",{headers:headers})
    // console.log("33333",resp.data.data)
    setPolicedata(resp.data.data)
  }

  const parseHTML = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const olItems = doc.querySelectorAll('ol li');
    olItems.forEach((li) => {
      const text = li.textContent;
      li.textContent = text.replace(/&ndash;/g, '–');
    });

    return doc.body.innerHTML;
  };

  return (
    <>
    <Toggleicon />

      {/* <div className="innerhead">
    <div className="container mt-104">
          <h2 className="innerhead-title"> ZET Policy</h2>
    </div>
  </div>
  
  
  <section className="middle-sec pt-5 pb-3">
    <div className="small-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h1 className="inner-h">ZET Policy</h1>
          <hr className="inner-hr" />
          <div className="newsdetails-main-s">
            <div className="news-dtls-box enevt-dtls-box">
                <div className="news-content-inv-s">
                    <div className="content-block-extra-inv-s event-block-extra-s">
                        <h3>E-Lorry Web Portal</h3>
                        <p>Latin words, combined with a handful of model sentence structures, 
                          toLatin words, combined with a handful of model sentence structures, 
                          toLatin words, combined with a handful of model sentence structures, 
                          toLatin words, combined with a handful of model sentence structures, 
                          toLatin words, combined with a handful of model sentence structures, to</p>
                          <p>Latin words, combined with a handful of model sentence structures, 
                            toLatin words, combined with a handful of model sentence structures, 
                            toLatin words, combined with a handful of model sentence structures, 
                            toLatin words, combined with a handful of model sentence structures, 
                            toLatin words, combined with a handful of model sentence structures, to</p>
                            <h3>E-Lorry  Mobile Application</h3>
                            <p>Latin words, combined with a handful of model sentence structures, 
                              toLatin words, combined with a handful of model sentence structures, 
                              toLatin words, combined with a handful of model sentence structures, 
                              toLatin words, combined with a handful of model sentence structures, 
                              toLatin words, combined with a handful of model sentence structures, to</p>
                              <h3>User Provided Information</h3>
                              <p>Latin words, combined with a handful of model sentence structures, 
                                toLatin words, combined with a handful of model sentence structures, 
                                toLatin words, combined with a handful of model sentence structures, 
                                toLatin words, combined with a handful of model sentence structures, 
                                toLatin words, combined with a handful of model sentence structures, to</p>

                    </div>
                </div>
            </div>
        </div>
       

      </div>
    
  </div>
  </div>
  </section> */}



      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title">ZET Policies</h2>
        </div>
      </div>

      <section className="middle-sec pt-5 pb-3">
        <div className="small-container">

          <div className="row posse">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="inner-h"><div dangerouslySetInnerHTML={{ __html: parseHTML(policeData.page_title) }} /></h1>
              <hr className="inner-hr" />
              <div className="newsdetails-main-s">
                <div className="news-dtls-box enevt-dtls-box">
                  <div className="news-content-inv-s posse">
                    <div className="content-block-extra-inv-s event-block-extra-s">
                      <h3>E-Lorry Web Portal</h3>
                      <div dangerouslySetInnerHTML={{ __html: parseHTML(policeData.page_content) }} />



                    </div>
                    <img src="/e_lorry/web/images/Policy-1.png" className="poli"  alt="zetp34"  />
                  </div>
                </div>
              </div>


            </div>
            {/* <div className="policy-container posse"> */}
        <div className="main-parent-grid-policy">
          <div className="policy-grid-1">
            <h3 style={{marginLeft:'50px'}}>Advantages</h3>
            <ul>
            <div dangerouslySetInnerHTML={{ __html: parseHTML(policeData.advantages) }} />
            </ul>
          </div>
          <div className="policy-grid-1">
            <h3 style={{marginLeft:'50px'}}>Challenges</h3>
            <ul>  
              <div dangerouslySetInnerHTML={{ __html: parseHTML(policeData.challanges) }} />
            </ul>
          </div>
        </div>
      {/* </div> */}

       {/* static data  section  */}
       
      <div className="row posse">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="newsdetails-main-s">
            <div className="news-dtls-box enevt-dtls-box">
              <div className="news-content-inv-s posse">
                <div className="content-block-extra-inv-s event-block-extra-s myrs">

                  <ul>
                    <li className="m-bot-new">One of the most common adoption policies for electric vehicles is purchase
                      subsidies,
                      which lower the initial cost of ownership at the expense of high costs on the government.
                      Though the upfront cost of an electric vehicle is much more than that of an internal combustion
                      vehicle, the operational and maintenance cost of an electric vehicle is much less than the latter.
                      In this way, by implementing policies that further cut operational costs in addition to the
                      purchase
                      incentive, governments can further persuade people to buy electric vehicles. For ZETs, the
                      government
                      is yet to announce favorable policies.</li>

                    <li className="m-bot-new">In 2017, the Government of India passed a regulation defining the first-ever
                      fuel consumption
                      standards
                      for heavy-duty vehicles (HDVs), which include HDT's and buses; it took effect on April 1, 2023.
                    </li>

                    <li className="m-bot-new">With supportive polices ZETs can achieve an 85% sales penetration by 2050.
                      With cost
                      competitiveness,
                      and technology maturity, nearly 9 in 10 trucks sold in 2050 can be ZETs. Demand-side policies to
                      increase
                      consumer demand, such as purchase subsidies, feebates, interest subvention, scrappage -
                      incentives, zero-emissions zones, and fleet purchase requirements.
                      <br />
                      <a href="https://www.niti.gov.in/sites/default/files/2023-02/ZETReport09092022.pdf">Please access
                        the report here</a>
                    </li>



                    <li className="m-bot-new">Supply-side policies will encourage traditional OEMs to innovate and start-ups
                      to enter ZET
                      manufacturing,
                      such as original equipment manufacturer (OEM) ZET credit schemes, ZET production targets, air
                      quality regulations,
                      and fuel efficiency standards that promote ZETs and improve air quality.</li>

                  </ul>
                </div>
              </div>
            </div>



          </div>

          <img src="/e_lorry/web/images/Policy-1.png" className="poli-11"/>
        </div>


        <div className="circle-policy"></div>
        <div className="circle-policy-1"></div> 
     
    </div>

      
          </div>
        </div>
       
      </section>
     


   




   



      <Footer />

    </>
  )
}

export default Zetpolicy