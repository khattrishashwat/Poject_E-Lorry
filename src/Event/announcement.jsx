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
  console.log(dataitem,"dataItem")

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


             {/* { dataitem && dataitem.map((value,index)=>(
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
            )} */}
          {dataitem && dataitem.map((value, index) => {
  // Parse the create_at value
  const createDate = new Date(value.created_at);

  // Format the date as "Mon YY"
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[createDate.getMonth()];
  const year = createDate.getFullYear().toString().slice(-2); 

  const formattedDate = `${month} ${year}`;
   

  return (
    <div key={index}>
      <hr />
      <div className="divnotice rows rowing">
        <div className="ps-0 pt-2 col-md-9">
          <a href={value.url} target="_blank"><p style={{cursor:"pointer"}}>{value.content}</p></a>
        </div>
        <div className="col-md-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",  marginBottom: "1rem", fontWeight: "bold" }}>
          
          <span className="datecal"  style={{ border: "0.5px solid lightgrey", textAlign: "center",  }}>{createDate.getDate()}</span>
          <span className="datecal" style={{ backgroundColor: "#632672", color: "white", fontSize: "12px", fontWeight: "bold", textAlign: "center",  }}>{formattedDate}</span>
        </div>
      </div>
      <hr />
    </div>
    
  );
})}


           
          </div>

        </div>
      </div>


      <Footer />
    </>
  );
}

export default Announcement;
