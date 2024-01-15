import React,{useState,useEffect} from "react";
// import './event.css'
import axios from "axios";

import Footer from "../Footer/footer";

function Announcement()
 {

  const[dataitem,setDataitem]=useState([])

  const headers={
    "Content-Type":"application/json",
    "Accept":"application/json",
  }




  useEffect(() => {
   newsDetail()
   document.title = 'Announcements Page';
  }, []);

 const newsDetail= async()=>
 {
    const respo= await axios.get("/news-announcements",{headers:headers})
    console.log("========================>",respo.data.data)
    setDataitem(respo.data.data)
 }
  

  return (
    <>
      <div className="innerhead">
        <div className="container mt-104">

          <h2 className="innerhead-title">New at E-Lorry</h2>


        </div>
      </div>
      <div className="small-announce">
        <div className="col-sm-4 col-lg-4 col-md-4 col-xs-12 widws">
          <h1 className="inner-h">News & Announcements</h1>
          <hr className="inner-hr" />
          <div className="newsarea">


             { dataitem && dataitem.map((value,index)=>(
              <div key={index}>
            <div className="divnotice rows rowing">
              <div className="date_text_wrap col-md-4">
                <div className="date_wrapper">
                <img src={value.image}  alt="CVB"/>
                </div>
              </div>
              <div className="ps-0 pt-2 col-md-8">
                <p>{value.content}</p>
              </div>
              
            </div>
            
            <hr />
            </div>
             )
            )}

           
          </div>

        </div>
      </div>


      <Footer />
    </>
  );
}

export default Announcement;
