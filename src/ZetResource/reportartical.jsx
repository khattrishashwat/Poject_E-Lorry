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


const downloadfile=(fileurl) =>
{
  FileSaver.saveAs(fileurl);
  console.log("cbhsbchsbcvhs", fileurl)
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
            <h1 className="inner-h" style={{textAlign:'center'}}>Reports & Articles</h1>
              <hr className="inner-hr" style={{marginLeft:'538px' }} />
              <div className="boxshadow-flex">
                {articleData.map((value, index) => (
                  <div className="boxShadow2 sectionra syte" key={index}>
                    <div className="text">
                      <div className="title-flex">
                        <h1>{value.title}</h1>
                      </div>
                      <div className="title-flex-1">
                        <h3>Type:&nbsp;&nbsp;Blog</h3>
                        <h3>Owner:&nbsp;&nbsp;ICCT</h3>
                      </div>
                      {/* <a href="" className="download-btn">Download &nbsp;&nbsp;<i className="fa-solid fa-download"></i></a> */}
                     
                    <button onClick={()=>downloadfile(value.article_file)} className="download-btn downart">Download &nbsp;&nbsp;<i className="fa-solid fa-download"></i></button> 
                    </div>
                    <div className="img">
                      <figure className="boxShadow2"><img src={value.image} alt="img" className="my-new" />
                      </figure>
                    </div>
                    <span className="date boxShadow1">{moment(value.created_at).format('DD MMM')}</span>
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
