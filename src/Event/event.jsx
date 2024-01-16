import React, { useState,useEffect } from "react";
// import "./event.css";
import Footer from "../Footer/footer";
import Toggleside from '../sidetoggle/sidetoggle'
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";

function Event() {

  const [newsarea, setNewsarea] = useState(true)
  const [newcontaint, setnewcontaint] = useState(true)
  const [eventdata,setEventdata] = useState([])
  const[pasteventitem,setPasteventItem]=useState([])

  const navigate = useNavigate();

  const handleAnnounment = () => {
    navigate('/annoucement')
  }


  // const eventemp=async ()=>
  // {
  //   const resp=await axios.get('/event-detail?event_id=1',{headers:headers})
  //   console.log("[[[[[[[[[[[[[[[[[[[[",resp)
  // }

  useEffect(()=>{
   upcomingevent()
  //  eventemp()
   document.title = 'Events Page';

  },[])

  const headers={
    "Content-Type":"application/json",
    "Accept":"application/json",
  }

  const upcomingevent= async() =>
  {
    const resp= await axios.get("/events",{headers:headers})
    console.log("======+++++",resp.data.data.upcoming)
    setEventdata(resp.data.data.upcoming)
    setPasteventItem(resp.data.data.past)
  }
console.log(eventdata,"eventdata")
console.log(pasteventitem,"past ")
  return (
    <>
      <Toggleside />
      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title">What's New </h2>
        </div>
      </div>

      <div>

        <section className="middle-sec pt-5 pb-3">
          <div className="small-container">
            <div className="row row-as" style={{ flexWrap: "nowrap" }}>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 plate">
                <h1 className="inner-h">Past Events</h1>
                <hr className="inner-hr" />


                {/* {pasteventitem.map((value,index)=>( */}
                <ul  className="media-list main-list">
                {pasteventitem.map((value,index)=>(

                  <li className="media"  key={index}>
                  <Link class="" to='/upcomingEvent' state={{ from: value?.id }}>
                      <img
                        className="media-object"
                        src={value.image}
                        alt="..."
                        style={{ height: "80px", width: "80px" }}
                      />
                      <div className="media-boddy">
                        <h4 className="media-heading">
                         {value.title}
                        </h4>
                        <p className="by-author">
                       {value.description}
                        </p>
                      </div>
                      </Link>
                  </li>
                  ))}
                </ul>
                
              </div>

              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 plate">
                <h1 className="inner-h">Upcoming Events</h1>
                <hr className="inner-hr" />

               {/* {eventdata.map((value,index)=>(
                <ul  key={index} className="media-list main-list">
                  <li className="media">
                   
                      <img
                        className="media-object"
                        src={value.image}
                        alt="..."
                        style={{ height: "80px", width: "80px" }}
                      />
                      <div className="media-boddy">
                        <h4 className="media-heading">
                          {value.title}
                        </h4>
                        <p className="by-author">
                         {value.description}
                        </p>
                      </div>
                    
                  </li>
                </ul>
                ))} */}
                {eventdata ? (
                  eventdata.length > 0 ? (
                    // eventdata.map((value, index) => (
                      <ul  className="media-list main-list">
                    { eventdata.map((value, index) => (

                        <li className="media" key={index}>
                          <img
                            className="media-object"
                            src={value.image}
                            alt="..."
                            style={{ height: "80px", width: "80px" }}
                          />
                          <div className="media-boddy">
                            <h4 className="media-heading">{value.title}</h4>
                            <p className="by-author">{value.description}</p>
                          </div>
                        </li>
                        ))}
                      </ul>
                    
                  ) : (
                    <div className="media-list main-list">
                    <h4 className="upcs">No Upcoming Events Yet</h4>
                  </div>
                  )
                ) : (
                  <p>Loading...</p>
                )
                }
              </div>
              
            </div>
          </div>
        </section>
      </div>

     


      <Footer />
    </>
  );
}

export default Event;
