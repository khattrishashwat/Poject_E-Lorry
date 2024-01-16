import React, { useState, useEffect,createContext,useContext } from "react";
// import "./discuss.css";
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



function Discuss( {isVisible} ) {

  const [show, setShow] = useState(false);
  const [showevent,setShowevent] = useState(false);
  const [showshare, setShowshare] = useState(false);
  const [setpostshow, setSetpostshow] = useState(false);
  const[passicon,setpassicon] =useState(true)
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

  const navcolor=useContext(GlobalInfo)
  console.log("appcolor",navcolor.appcolor)


  const headers = {
    // "Content-Type": "application/json",
    "Accept": "application/json",
    'Authorization': `Bearer ${token}`,
  }


 


  const postDiscuss=async()=>
  {
    const resp= await axios.get('/posts',{headers:headers})
    console.log("iiiii",resp.data.data)
    setpostDiscuss(resp.data.data.posts)
    setToppostdiscuss(resp.data.data.top_posts)
    setEventDisplay(resp.data.data.events)
    // setcurrent(1)

  }

  const calendarLink = ()=>
  {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const linkcal='https://www.google.com/calendar/render?action=TEMPLATE&text=Your+Event+Title&dates=20240101T010000Z/20240101T020000Z&details=Event+Details&location=Event+Location'

    const newTab = window.open(linkcal, '_blank');
    newTab.addEventListener('load', () => {
      setLoading(false);
    });
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
    if(token == null)
    {
      Swal.fire({
        title: 'please login!',
        showConfirmButton: false, // Hide the confirm button
        timer: 3000,
      })
      setTimeout(() => {
        const parameterValue = -1; // Replace this with the actual value of your parameter
        const path = '/auth/login';
        navigate(path, { state: { parameterValue } })
       }, 2000); 

    }else
    {
      try{
       const statuslike = 1
      const status= statuslike
      const itemlike={post_id,status}  
     const resp= await axios.post('/like-dislike-post',itemlike,{headers:headers})
     setUpdatepost(2)
    //  console.warn("222222", resp)
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

     
  }

 

  const handledislike= async(post_id) =>
  {
    setDisabledSubmit(true)
    if(token == null)
    {
      Swal.fire({
        title: 'please login!',
        showConfirmButton: false, // Hide the confirm button
        timer: 3000,
      })
     
    setTimeout(() => {
    const parameterValue = -1; // Replace this with the actual value of your parameter
    const path = '/auth/login';
    navigate(path, { state: { parameterValue } })
   }, 2000); 
    }
    else 
    {
    try{
      const statusDislike = 2
      const status= statusDislike 
     const itemlike={post_id,status}  
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
  }
  }


  const commenthandleapi= async(value)=>
  {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = value.text;
     const plainText = temporaryElement.textContent || temporaryElement.innerText;
     const itemcomment = {
      post_id: value.userId,
      comment: plainText
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





  const initial = {
    // post_announcement_update: '',
    title: '',
    post_date: '',
    uploaded_file: null,
    meeting_link: '',
    long_description: '',
  }

  const validated = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('please enter title'),
    // post_announcement_update: Yup.string().min(5, 'Too Short!').max(100, 'Too Long').required('Please enter Post'),
    post_date: Yup.date().required('Date is required').nullable(),
    // uploaded_file: Yup.mixed().required('Image is required'),
    uploaded_file: Yup.mixed().required('File is required').test('fileSize', 'File size is too large', (value) => {
          // You can add your custom file size validation logic here
          return value && value.size <= 10485760; // 10 MB
        }),
    meeting_link: Yup.string().required('Plese enter link').test('is-https', 'URL must be HTTPS', (value) => {
      if (!value) return true; // Allow empty values
      return value.startsWith('https://');
    }),
    long_description: Yup.string().min(10, 'Too Short!').max(1000, 'Too Long').required('please enter description'),
  });

  const eventsubmit = async (values, {resetForm}) => {
    setDisabledSubmit(true)
    const tokenlogin = localStorage.getItem("authtoken")
    // console.warn("event ",event)
    const itemevent = values
    const itemsevent = JSON.stringify(itemevent)
    const headers = {
      // "Content-Type": "application/json",
      "Accept": "application/json",
      'Authorization': `Bearer ${tokenlogin}`,
    }

    try {
 
      let frms=new FormData()
      // frms.append('post_announcement_update', values.post_announcement_updat)
      frms.append('title', values.title)
      frms.append('post_date',values.post_date)
      frms.append('uploaded_file',eventprofile)
      frms.append('meeting_link',values.meeting_link)
      frms.append('long_description',values.long_description)
      const respon = await axios.post("/add-event", frms, { headers: headers });
      console.log("event", respon.data)
      toast(respon.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    
    }
    catch (errors) {
      // console.warn("xajnxjsanxja", errors.response)
    
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
    setDisabledSubmit(false)
    setShowevent(false)
    resetForm()
    setTimeout(() => {
      window.location.reload()
     }, 1000);
  }

  const formik = useFormik({
    initialValues: initial,
    onSubmit: eventsubmit,
    validationSchema: validated

  })

  // login formiklog section 

  const initiallogvalue = {
    email: '',
    password: ''
  }


  const validation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),

  })



  const submitlog = async (values) => {
    const itemlog = values
    const itemslog = JSON.stringify(itemlog)
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  

    try {
      const resp = await axios.post("/signin", `${itemslog}`,
        { headers: headers })
      const tokenele = (resp.data.data.token)
      // console.warn("token login ###", tokenele)
      localStorage.setItem("authtoken", (resp.data.data.token))


      // console.warn("login @#@", resp)
      toast(resp.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })


      setTimeout(() => {
        // history.push('/new-page');
        // navigate('/' )
        window.location.reload();
      }, 2000);
      // navigation('/')

    }
    catch (errors) {

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

  const formiklog = useFormik({
    initialValues: initiallogvalue,
    onSubmit: submitlog,
    validationSchema: validation,

  })
  


  const emailmodelfun= ()=>
  {
   if(token)
   {
    setShowemailmodel(true)
   }
  }
  
  // post  formik area

  const initialpostvalue={
    title:'',
    image:null,
    vip:'',
    description:'',

  }
  // const token = localStorage.getItem('authtoken')
  const headerspost = {
      "Accept": "application/json",
      'Authorization': `Bearer ${token}`,
  }

  const validatedpost = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .required('Required'),
      image: Yup.mixed().required('File is required'),
      // .test('fileSize', 'File size is too large', (value) => {
        // You can add your custom file size validation logic here
        // return value && value.size <= 10485760; // 10 MB
      // }),
       vip: Yup.string().required('please enter '),
      description: Yup.string().min(5, 'Too Short!').max(1000, 'Too Long').required('Required'),
  });
  const submitpost=async(value, { resetForm })=>
  {
    setDisabledSubmit(true)
    
     try{
     const item=value;
     const items=JSON.stringify(item)
     let frm = new FormData();
     frm.append('image', filefromdata)
     frm.append('title', value.title)
     frm.append('description', value.description)
     frm.append('vip',value.vip)


    //  console.log("fun" , frm)
      const resp= await axios.post('/create-post',frm,{headers:headerspost})
      console.log("<<<<<<",resp)
      toast(resp.data.message, {
       position: "top-right",
       autoClose: 2000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
     })

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
 resetForm();
 setDisabledSubmit(false)
 setTimeout(() => {
  window.location.reload()
 }, 1000);
  } 

  const fromikpost=useFormik({
     initialValues:initialpostvalue,
     onSubmit:submitpost,
     validationSchema:validatedpost,
  })

useEffect(()=>{
  document.title = 'Chatroom Page';
},[])

useEffect(()=>{
  postDiscuss()
},[updatepost])

console.warn("vvvvv", isVisible)

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
      {/* < Navbars style={{backgroundColor:`${navcolor.appcolor}`}}/> */}
      <Toggleside />
      <div className="small-container">
         
        {/* update code  */}
        <h2 className="thread-main-head">Top Discussion Threads</h2>
        <span className="line-1"></span>

        <div className="threads">
        {toppostdiscuss.map((value,index)=>(
          <div className="thread-text" key={index}>
            <img src={value.user_avator} alt="dicimg" />
            <div className="thre-text-flex">
              <div className="boths">
                <h4>{value.name}</h4>
                <div className="mainsflexings-1">
                  <div className="like-1">
                    <i className= "fa-solid fa-thumbs-up "></i>                  
                    <h4>{value.you_like_post}</h4>
                  </div>
                  <div className="like-1">
                    <i className="fa-solid fa-thumbs-down"></i>
                    <h4>{value.you_dislike_post}</h4>
                  </div>
                  <div className="like-1">
                    <i className="fa-solid fa-comment" onClick={emailmodelfun}></i>
                    <h4>{value.post_comments_count}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        </div>


        
        {/* update code  */}
         
        <div className="discuss-main-parent">
          <div className="discuss-grid-1">
            {postdiscuss.map((value,index)=>(
            <div className="group-section-1" key={index}>
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
                  <i onClick={(e)=>handlelike(value.id)} className={token &&  value.you_like_post == 1 ? "fa-solid fa-thumbs-up thumbcolor  pointmu" : "fa-solid fa-thumbs-up pointmu"} ></i>
                  
                  
                  
                  <h4>{value.you_like_post}</h4>
                </div>
                <div className="like">
                  <i  onClick={(e)=>handledislike(value.id)} className={token &&  value.you_dislike_post == 1 ? "fa-solid fa-thumbs-down thumbcolor pointmu" : "fa-solid fa-thumbs-down pointmu"}></i>
                  
                 
                  
                  
                  <h4>{value.you_dislike_post}</h4>
                </div>
                <div className="like">
                  <i className="fa-solid fa-comment pointmu" onClick={()=>handleCommentId(value.id)}  onDoubleClick={()=>sethandleclick(true)}></i>
                  <h4>{value.post_comments_count}</h4>
                </div>
                <div className="like">
                  {/* <a href=""> */}
                    <i className="fa-solid fa-share pointmu" onClick={()=>setShowshare(true)} ></i>
                  {/* </a> */}
                </div>
               
              </div>
              {data}
              {token && (value.id === id) ?  <>            
                <CommentSection
                     currentUser=
                     {{
                       currentUserId: value.id,
                       currentUserImg:value.user_avator,
                       currentUserProfile:value.user_avator,
                       currentUserFullName: value.name
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

        {/* share model  */}
    
        {token? 
        <Modal
              show={showshare}
              onHide={() => setShowshare(false)}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <div className="content-post" style={{display:'flex'}}>
                    <form  className="for">
                    <input 
                    type="text"
                    placeholder="https://www.google.co.in/" 
                    name="title"
                    className="post-form"
                    />
               
                     <button  className="postes">Copy Link</button>
                    </form>
                    </div>
              </Modal.Body>
        </Modal>
        : null
        }
       




          {!token ? <></>:<>
          <div className="discuss-grid-2">
            <div className="discuss-posti">
              <div className="right-forms-1f">
              <div className="upper-two-btn">
                  <button type="button" className="unactive" onClick={()=>setShowevent(true)}>Add Events</button>
                  <button className="unactive"  onClick={() => setShow(true)}  >add post</button>
                  

                </div>
                
                   <h4 className="event-list">Events Listing</h4>
                   {eventDisplay.map((value,index)=>(
                   <div className="cards-1" key={index}>
                       <img src={value.uploaded_file} alt="zyx"/> 
                       <h4>{value.title}</h4>
                       <p>{value.long_description}</p>
                   
                       <div className="two-btn-flex">
                            
                           <Link to='/discuss'  className="add-to-cl" onClick={()=>calendarLink()}> {isLoading ? 'Loading...' : 'Calendar'}</Link>
                           <Link to='/discuss' className="joins" onClick={()=>handleLinkClick(value.meeting_link)}>
                           {isLoading ? 'Loading...' : 'Join Now'}
                            </Link>
                       </div>              
                   </div> 
                   ))}

                </div>
               
            </div>
          

      {/* model for addPost */}
           <Modal
              show={show}
              onHide={() => setShow(false)}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <div className="pop-up-content-wrap">
                <h4 className="head-event">Add Post</h4>
                </div>
              </Modal.Header>
              <Modal.Body>
                <div className="content-post">
                    <form  onSubmit={fromikpost.handleSubmit} className="for">
                    <label className="pst-lab">Add Title</label>
                    <input 
                    type="text"
                    placeholder="Write Title" 
                    name="title"
                    value={fromikpost.values.title}
                    onChange={fromikpost.handleChange}
                    className="post-form"
                    />
                   {fromikpost.touched.title && fromikpost.errors.title ? <div className='text-danger testdanger'>{fromikpost.errors.title}</div> : null}


                    <label className="pst-lab">Choose Image / Video</label>
                    <input type="file"  
                       name='image'
                       onChange={(e) => {
                       fromikpost.setFieldTouched('image');
                       fromikpost.setFieldValue('image', e.currentTarget.files[0]);
                       setFileformdata(e.currentTarget.files[0])
                     }}
                    className="post-form"
                    />
                   
                    {fromikpost.touched.image && fromikpost.errors.image ? <div className='text-danger testdanger' >{fromikpost.errors.image}</div> : null}


                    <label className="pst-lab">Invite VIP Stakeholder</label>
                    <input 
                     type="text"
                     placeholder="e-lorry@gmail.com" 
                     name="vip"
                     value={fromikpost.values.vip}
                     onChange={fromikpost.handleChange}
                     className="post-form" 
                     />
                    {fromikpost.touched.vip && fromikpost.errors.vip ? <div className='text-danger testdanger'>{fromikpost.errors.vip}</div> : null}

                   
                    {/* <div>
                    <strong>CC:</strong>
                      <input
                      name='emailAddress'
                    value={formik.values.emailAddress &&
                    formik.values.emailAddress.split(',').map((email, index) => (
                    <span key={index}>{email.trim()}, </span>
                   ))}
                   />

                   </div> */}
               
                    <label className="pst-lab">Description</label>
                    <textarea 
                    placeholder="Enter Short Description" 
                    className="post-form"
                    name="description"
                    value={fromikpost.values.description}
                    onChange={fromikpost.handleChange}

                    /> 
                    {fromikpost.touched.description && fromikpost.errors.description ? <div className='text-danger testdanger'>{fromikpost.errors.description}</div> : null}

                    
               
                     {/* <button type='submit' className="postes">Post Now</button> */}
                     <button type="submit" disabled={disabledSubmit} className="postes btn-subm" onClick={() => setShow(true)} >
                       {
                          disabledSubmit ? (
                            <div>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              <span className="sr-only"></span>  Post Now
                            </div>
                          ) : 'Post Now'
                        }
                </button>
                    </form>
                    </div>
              </Modal.Body>
            </Modal> 

         {/* model for event data  */}
             <Modal
              show={showevent}
              onHide={() =>setShowevent(false)}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <div className="pop-up-content-wrap">
                <h4 className="head-event">Add Events</h4> 
                </div>
              </Modal.Header>
              <Modal.Body>
                 <div className="content-event">  
                  <form className="for" onSubmit={formik.handleSubmit}>


                     {/* <label className="pst-lab">Post, Announcement </label>
                    <input
                      type="text"
                      name='post_announcement_update'
                      value={formik.values.post_announcement_update}
                      onChange={formik.handleChange}
                      placeholder="Post, Announcement & Updates"
                      className="post-form"
                    />
                    {formik.touched.post_announcement_update && formik.errors.post_announcement_update ? <div className='text-danger'>{formik.errors.post_announcement_update}</div> : null}  */}


                    <label className="pst-lab">Add Title</label>
                    <input
                      type="text"
                      name='title'
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      placeholder="Write Title"
                      className="post-form"
                    />
                    {formik.touched.title && formik.errors.title ? <div className='text-danger testdanger'>{formik.errors.title}</div> : null}

                    <label className="pst-lab">Event Date</label>
                    <input
                      type="date"
                      name='post_date'
                      value={formik.values.post_date}
                      onChange={formik.handleChange}
                      placeholder="Write Title"
                      className="post-form"
                    />
                    {formik.touched.post_date && formik.errors.post_date ? <div className='text-danger testdanger'>{formik.errors.post_date}</div> : null}


                    {/* <label className="pst-lab">Choose File</label>
                    <input
                      type="file"
                      name="uploaded_file"
                      value={formik.values.uploaded_file}
                      onChange={(e)=> seteventprofile(e.target.files[0])}
                      placeholder="upload image"
                      className="post-form"
                    />
                    {formik.touched.uploaded_file && formik.errors.uploaded_file ? <div className='text-danger'>{formik.errors.uploaded_file}</div> : null} */}

                     <label className="pst-lab">Choose File</label>
                      <input
                        type="file"
                        name="uploaded_file"
                        onChange={(e) => {
                          formik.setFieldTouched('uploaded_file');
                          formik.setFieldValue('uploaded_file', e.currentTarget.files[0]);
                          seteventprofile(e.currentTarget.files[0]);
                        }}
                        className="post-form"
                      />
                      {formik.touched.uploaded_file && formik.errors.uploaded_file ? (
                        <div className='text-danger testdanger'>{formik.errors.uploaded_file}</div>
                      ) : null}




                    <label className="pst-lab">Meeting Link</label>
                    <input
                      name="meeting_link"
                      value={formik.values.meeting_link}
                      onChange={formik.handleChange}
                      placeholder="Enter meeting Link"
                      className="post-form"
                    />
                    {formik.touched.meeting_link && formik.errors.meeting_link ? <div className='text-danger testdanger'>{formik.errors.meeting_link}</div> : null}

                    <label className="pst-lab">Description</label>
                    <textarea
                      name="long_description"
                      value={formik.values.long_description}
                      onChange={formik.handleChange}
                      placeholder="Enter Long Description"
                      className="post-form"
                    ></textarea>
                    {formik.touched.long_description && formik.errors.long_description ? <div className='text-danger testdanger'>{formik.errors.long_description}</div> : null}

                    {/* <button type='submit' className="postes"> Post Now </button> */}
                    <button type="submit" disabled={disabledSubmit} className="postes btn-subm" onClick={()=>setShowevent(true)} >
                       {
                          disabledSubmit ? (
                            <div>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              <span className="sr-only"></span>  Add Events
                            </div>
                          ) : 'Add Events'
                        }
                </button>

                  </form>
                  </div>

              </Modal.Body>
            </Modal> 
          

          </div>
          </>
          
         }


        </div>
      
      </div>

      <Footer />
    </>
  );
}

export default Discuss;
