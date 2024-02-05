import React, { useState, useEffect } from "react";
// import "./resource.css";
import Footer from "../Footer/footer";
import Toggleside from "../sidetoggle/sidetoggle";
import axios from "axios";
import moment from 'moment';
// import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';

function Reportartical() {

  const [articleData, setArticleData] = useState([])
  const [reportData, setReportData] = useState([])
  const characterLimit = 50;

const downloadfile=(filename, url,event) =>
{
 
  // FileSaver.saveAs(fileurl);


  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  event.preventDefault();
  const newTab = window.open(link, '_blank');
  newTab.addEventListener('load', () => {
    // setLoading(false);
  });
  console.log("cbhsbchsbcvhs", url)
}  

  useEffect(() => {
    dataitem()
   document.title = 'Articles Page';

  }, [])

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
  const dataitem = async () => {
    // console.warn('this is api section')
    const resp = await axios.get('/article-reports', { headers: headers })
    // console.log("*****", resp.data.data.reports)
    setArticleData(resp.data.data.articles)
    setReportData(resp.data.data.reports)

  }


  const originalText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet, r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,r adipiscing elit. Suspendisse at justo blandit, suscipit tortor ut, congue est. In consequat libero id sodales euismod. Aliquam erat volutpat. Maecenas vel auctor leo. Integer efficitur ligula nulla, et tincidunt leo porta in. Proin lacinia sollicitudin ligula eget aliquet. Lorem ipsum dolor sit amet,  ";

  const words = originalText.split(' ');
  const limitedText = words.slice(0, 50).join(' ');


  return (
    <>
      <Toggleside />
      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title"> Reports & Articles</h2>
        </div>
      </div>

      <section className="middle-sec pt-5 pb-3">
        <div className="small-container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {/* <h1 className="inner-h" style={{textAlign:'center'}}>Reports & Articles</h1>
              <hr className="inner-hr" style={{marginLeft:'538px' }} /> */}
              <div className="boxshadow-flex">
                {articleData.map((value, index) => (
                  <div className="boxShadow2 sectionra syte" key={index}>
                    <div className="text textabc">
                      <div className="title-flex">
                        {/* <h1>{value.title}</h1> */}
                        <h1>{value.title.length > characterLimit
                                    ? value.title.substring(0, characterLimit) + '...'
                                    : value.title}</h1>
                      </div>
                      <div className="title-flex-1 d-block">
                        <h3>Type:&nbsp;&nbsp;{value.type}</h3> 
                        {/* <h3>Owner:&nbsp;&nbsp;{value.owner}</h3> */} 
                        <div className="d-flex gap"><h3>Owner:</h3><h3>{value.owner}</h3></div>
                      </div>
                      {/* <a href="" className="download-btn">Download &nbsp;&nbsp;<i className="fa-solid fa-download"></i></a> */}
                     
                    <button onClick={(event)=>downloadfile(value.title,value.article_file, event)}  style={{color:"#0909cc"}} className="download-btn downart">Click Here &nbsp;&nbsp;</button> 
                    </div>


                    <div className="img">
                      <figure className="boxShadow2"><img src={value.image} alt="img" className="my-new" />
                      </figure>
                    </div>
                    <span className="date boxShadow1">{moment(value.article_date).format('DD MMM YYYY')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Reportartical;
