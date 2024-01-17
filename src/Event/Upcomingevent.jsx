import React, { useEffect, useState } from 'react'
import Footer from '../Footer/footer'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function Upcomingevent() {

  const [eventDetails,setEventDetails]=useState({})
  const [recentDetail,setRecentDetails] =useState([])
  const location = useLocation()
  // const { from } = location.state
  console.log(location.state.from,"fromm")
  const eventId =location.state.from
  const headers={
    "Content-Type":"application/json",
    "Accept":"application/json",
  }
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`/event-detail?event_id=${eventId}`,{headers:headers});
        console.log("eventDetails data", response.data.data.recent);
        setEventDetails(response?.data?.data)
        setRecentDetails(response.data.data.recent)
      } catch (e) {
        console.error(e, "error from upcoming");
      }
    };
  
    fetchEventDetails();
  
  }, [eventId]);
  
  return (
    <>

    <div className="innerhead">
      <div className="container mt-104">
        {/* <h2 className="innerhead-title"> Upcoming Event Detail</h2> */}
        <h2 className="innerhead-title"> {eventDetails?.title}</h2>
      </div>
    </div>


    <section className="middle-sec pt-5 pb-3" >
      <div className="small-container" >
        <div className="row rowees ">
          <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
            <h1 className="inner-h">FDP on NEP 2020 - Pedagogical Reforms...</h1>
            <hr className="inner-hr" />
            <img src="images/1.png" className="w-100" />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div className="widget-news-inv">
              <header className="header-news-inv for-eventsdtls">
                <h5>Latest Events</h5>
              </header>
              <div className="content-news-inv">
                <ul>
                  {recentDetail.map((value,index)=>(
                  <li key={index}>
                    <a href="#">
                      <div className="widget-wrapper-news-inv">
                        <div className="detail-news-inv details-event-s">
                          <h6 className='textdes-over'>{value.long_description} </h6>
                          <p className=""><i className="fa fa-calendar" aria-hidden="true"></i>{value.post_date}</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  ))}
                 
                
                 

                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>

  <Footer />
    </>
  )
}

export default Upcomingevent