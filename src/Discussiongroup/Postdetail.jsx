import React,{useState,useEffect,useRef } from 'react'
import { useParams } from 'react-router-dom'
import Footer from "../Footer/footer";
import Toggleside from '../sidetoggle/sidetoggle'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useLocation, json } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { TroubleshootOutlined } from "@mui/icons-material";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import Navbars from "../navbar/navbars";
import { GlobalInfo } from "../Allrouter";
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

function Postdetail({value}) {

  const{pid,uid}=useParams();
  // const [clientid,setclientId] =useState([])

 
  // console.log("&&&&&&&&&&&&",uid)
  // setclientId(id)
  const targetRef = useRef();
  // const [show, setShow] = useState(false);
  // const [showevent,setShowevent] = useState(false);
  // const [showshare, setShowshare] = useState(false);
  // const [setpostshow, setSetpostshow] = useState(false);
  // const[passicon,setpassicon] =useState(true)
  const[showemailmodel,setShowemailmodel]=useState(false)
  const[filefromdata,setFileformdata]=useState()
  const [eventprofile,seteventprofile]=useState()
  const [commentsec,setCommentsec] =useState(true)
  const[eventadd,setEventadd] = useState(true)
  const [data,setData] = useState([]);
  const [postdiscuss, setpostDiscuss] = useState([])
  const [toppostdiscuss,setToppostdiscuss] =useState([])
  const [updatepost,setUpdatepost] =useState()
  // const [currentpost,setcurrentpost]=useState()
  const [id, setId] = useState();
  const [eventDisplay, setEventDisplay] = useState([])
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  const [handleclick,sethandleclick] = useState(true)
  const [isLoading, setLoading] = useState(false);
  
  



  const navigate = useNavigate()
  const location = useLocation()
  
  const token = localStorage.getItem("authtoken");

  const headers = {
    // "Content-Type": "application/json",
    "Accept": "application/json",
    'Authorization': `Bearer ${token}`,
  }

  const postDiscuss=async()=>
  {
    const resp= await axios.get(`/posts?uid=${uid}`,{headers:headers})
    console.log("iiiii",resp.data.data)
    setpostDiscuss(resp.data.data.posts)
    setToppostdiscuss(resp.data.data.top_posts)
    setEventDisplay(resp.data.data.events)
    // setcurrent(1)
    //  scrollcls

    const activeElement = document.querySelector('.scrollcls');
    
     if (activeElement) {
       activeElement.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
       });
     }
  }



  const handleLinkClick = (link) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const newTab = window.open(link, '_blank');
    newTab.addEventListener('load', () => {
      setLoading(false);
    });
  };


  const eventhandledata=()=>
  {
    setEventadd(true)
    // console.log('event')
  }

  const posthandledata=() =>
  {
    setEventadd(false)
  }

  const[count,setCount]=useState(1456);
   

  const handlelike= async(post_id) =>
  {
    
      try{
       const statuslike = 1
      const status= statuslike
      const post_id=pid;
      const itemlike={post_id,status,uid}  
      console.log("///////",itemlike)
      const resp= await axios.post('/like-dislike-post',itemlike,{headers:headers})
      setUpdatepost(2)
      console.warn("222222", resp)
      }
      catch(errors)
      {
        toast(errors.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: 'error'
        })
      }
  }

 

  const handledislike= async(post_id) =>
  {
    setDisabledSubmit(true)


    try{
      const statusDislike = 2
      const status= statusDislike 
      const post_id=pid;
     const itemlike={post_id,status,uid}  
     const resp= await axios.post('/like-dislike-post',itemlike,{headers:headers})
     console.warn("111111", itemlike)   
     console.warn("222222", resp)
     setUpdatepost(1)
    }
    catch(error)
    {
      toast(error.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'error'
      })
    }
     setDisabledSubmit(false)
    // }
  }


  const commenthandleapi= async(value)=>
  {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = value.text;
     const plainText = temporaryElement.textContent || temporaryElement.innerText;
     
     const itemcomment = {
      post_id: pid,
      comment: plainText,
      uid:uid,
      };
    const itemcomments= JSON.stringify(itemcomment)
    // console.log("item1111111",itemcomments)
    const resp= await axios.post('/comment-post',itemcomment,{headers:headers})
    // console.log("comment api", resp)
    
  }


  const handleCommentId=(id)=>
  {
    console.warn("hhhhhhhhhhhhhh",id)
    setId(id)
    // setCommentsec(true)
  }



  const emailmodelfun= ()=>
  {
   if(token)
   {
    setShowemailmodel(true)
   }
  }
  
  
  // scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth', 
  //   });
  // }
  
  // const scrollToElement = () => {
  //   const element = document.getElementById('targetElementId');
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // };

  




useEffect(()=>{
  document.title = 'Chatroom Page';
},[])

useEffect(()=>{
  postDiscuss()
},[updatepost])

// console.warn("vvvvv", isVisible)

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
     
      <Toggleside />
      <div className="small-container">
         
        {/* update code  */}
        <h2 className="thread-main-head">Top Discussion Threads</h2>
        <span className="line-1"></span>

        
        {/* update code  */}
         
        <div className="discuss-main-parentcl">
          <div className="discuss-grid-1">
            {postdiscuss.map((value,index)=>(
            <div ref={targetRef} className={`group-section-1 ${value.unique_code!==pid?'blur-sty':'scrollcls'}`} key={index}>
              <div className="imag-text">
                <img src={value.user_avator} alt="dicimg4"/>
                <div className="under-text-flex">
                  <div className="boths">
                    <h4>{value.name}</h4>
                    <h5>Aug 17</h5>
                  </div>
                </div>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <img
                src={value.post_image}
                className="tru-img"
                alt="dicimg5"
              />
              <div className="mainsflexings">
                <div className="like">
                  <i  onClick={(e)=>handlelike(value.id)} className={value.you_like_post == 1 ? "fa-solid fa-thumbs-up thumbcolor  pointmu" : "fa-solid fa-thumbs-up pointmu"} ></i>
                  <h4>{value.you_like_post}</h4>
                </div>
                <div className="like">
                  <i  onClick={(e)=>handledislike(value.id)} className={value.you_dislike_post == 1 ? "fa-solid fa-thumbs-down thumbcolor pointmu" : "fa-solid fa-thumbs-down pointmu"}></i>
                  <h4>{value.you_dislike_post}</h4>
                </div>
                <div className="like">
                  <i className="fa-solid fa-comment pointmu" onClick={()=>handleCommentId(value.id)}></i>
                  <h4>{value.post_comments_count}</h4>
                </div>
                {/* <div className="like"> 
                    <i className="fa-solid fa-share pointmu"></i> 
                </div> */}
               
              </div>
              {data}
              {(value.id === id) ?  <>            
                <CommentSection
                     currentUser=
                     {{
                       currentUserId: value.id,
                       currentUserImg:value.user_avator,
                       currentUserProfile:value.user_avator,
                       currentUserFullName: value.name,
                     }}
                    
                     commentData={data}
                     customImg={value.user_avator}
                     inputStyle={{ border: "1px solid rgb(208 208 208)" }}
                     formStyle={{ backgroundColor: "white" }}
                     submitBtnStyle={{ backgroundColor: "blue", padding: "7px 15px",  position: 'relative', left: '-1px;' }}
                     cancelBtnStyle={{ border: "1px solid gray", backgroundColor: "gray", color: "white", padding: "7px 15px"}}
                     replyInputStyle={{ borderBottom: "1px solid black", color: "black" }}
                     onSubmitAction={(data) =>commenthandleapi(data)}
                     
                     currentData={(data) => {
                      console.log('current data', data);
                    }}

                    />
              </> : null}
            </div>
            ))}
          </div>
      
        </div>
      
      </div>

      <Footer />
    </>
  );
 
}

export default Postdetail