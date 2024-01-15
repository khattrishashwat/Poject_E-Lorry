import React, { useState, useEffect } from "react";
// import "./discuss.css";
import Footer from "../Footer/footer";
import Toggleside from '../sidetoggle/sidetoggle'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useLocation, json } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { TroubleshootOutlined } from "@mui/icons-material";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";




function Discuss() {

  const [show, setShow] = useState(false);
  const [showevent,setShowevent] = useState(false);
  const [setpostshow, setSetpostshow] = useState(false);
  const[passicon,setpassicon] =useState(true)
  const[showemailmodel,setShowemailmodel]=useState(false)
  const[filefromdata,setFileformdata]=useState()
  const [eventprofile,seteventprofile]=useState()
  const [commentsec,setCommentsec] =useState(false)
  const[eventadd,setEventadd] = useState(true)
  const [data,setData] = useState([]);
  const [postdiscuss, setpostDiscuss] = useState([])
  const [toppostdiscuss,setToppostdiscuss] =useState([])
  const [updatepost,setUpdatepost] =useState()
  const [id, setId] = useState();
  const [disabledSubmit, setDisabledSubmit] = useState(false)



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
    const resp= await axios.get('/posts',{headers:headers})
    console.log("iiiii",resp.data.data)
    setpostDiscuss(resp.data.data.posts)
    setToppostdiscuss(resp.data.data.top_posts)
  }





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
      toast('please login', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      })
      
  setTimeout(() => {
    navigate('/auth/login',)
   }, 2000); 

    }
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

 

  const handledislike= async(post_id) =>
  {
    setDisabledSubmit(true)
    if(token == null)
    {
      toast('please login', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setDisabledSubmit(false)
  setTimeout(() => {
    navigate('/auth/login',)
   }, 2000); 

    }
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
    post_announcement_update: '',
    title: '',
    post_date: '',
    uploaded_file: null,
    short_description: '',
    long_description: '',
  }

  const validated = Yup.object().shape({
    title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    post_announcement_update: Yup.string().min(5, 'Too Short!').max(100, 'Too Long').required('Required'),
    post_date: Yup.date().required('Date is required').nullable(),
    // uploaded_file: Yup.mixed().required('Image is required'),
    uploaded_file: Yup.mixed().required('File is required').test('fileSize', 'File size is too large', (value) => {
          // You can add your custom file size validation logic here
          return value && value.size <= 10485760; // 10 MB
        }),
    short_description: Yup.string().min(5, 'Too Short!').max(1000, 'Too Long').required('Required'),
    long_description: Yup.string().min(10, 'Too Short!').max(1000, 'Too Long').required('Required'),
  });

  const eventsubmit = async (values, {resetForm}) => {
    // alert(JSON.stringify(values,null,2))
    const tokenlogin = localStorage.getItem("authtoken")
    // console.warn("tok !!!!!", tokenlogin)
    const itemevent = values
    const itemsevent = JSON.stringify(itemevent)
    const headers = {
      // "Content-Type": "application/json",
      "Accept": "application/json",
      'Authorization': `Bearer ${tokenlogin}`,
    }

    try {
      let frms=new FormData()
      frms.append('post_announcement_update', values.post_announcement_updat)
      frms.append('title', values.title)
      frms.append('post_date',values.post_date)
      frms.append('uploaded_file',eventprofile)
      frms.append('short_description',values.short_description)
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

    resetForm()
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
    // image: Yup.string().required('Image is required'),
      description: Yup.string().min(5, 'Too Short!').max(1000, 'Too Long').required('Required'),
  });
  const submitpost=async(value, { resetForm })=>
  {
    
     try{
     const item=value;
     const items=JSON.stringify(item)
     let frm = new FormData();
     frm.append('image', filefromdata)
     frm.append('title', value.title)
     frm.append('description', value.description)


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
                  <i onClick={(e)=>handlelike(value.id)} className={token &&  value.you_like_post == 1 ? "fa-solid fa-thumbs-up thumbcolor" : "fa-solid fa-thumbs-up"} ></i>
                  
                  
                  
                  <h4>{value.you_like_post}</h4>
                </div>
                <div className="like">
                  <i  onClick={(e)=>handledislike(value.id)} className={token &&  value.you_dislike_post == 1 ? "fa-solid fa-thumbs-down thumbcolor" : "fa-solid fa-thumbs-down"}></i>
                  
                 
                  
                  
                  <h4>{value.you_dislike_post}</h4>
                </div>
                <div className="like">
                  <i className="fa-solid fa-comment" onClick={()=>handleCommentId(value.id)}></i>
                  <h4>{value.post_comments_count}</h4>
                </div>
                <div className="like">
                  {/* <a href=""> */}
                    <i className="fa-solid fa-share"></i>
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
                    //  logIn={{
                    //    loginLink: "http://localhost:3001/",
                    //    signupLink: "http://localhost:3001/"
                    //  }}
                     customImg={process.env.PUBLIC_URL + "/imagesim-2.jpg"}
                     inputStyle={{ border: "1px solid rgb(208 208 208)" }}
                     formStyle={{ backgroundColor: "white" }}
                     submitBtnStyle={{ backgroundColor: "blue", padding: "7px 15px",  position: 'relative', left: '18px' }}
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



          {!token ? <></>:<>
          <div className="discuss-grid-2">
            <div className="discuss-posti">
              <div className="right-forms-1f">
              <div className="upper-two-btn">
                  <button type="button" className="unactive" onClick={()=>setShowevent(true)}>Add Events</button>
                  <button className="unactive"  onClick={() => setShow(true)}  >add post</button>
                </div>
                
                   <h4 className="event-list">Events Listing</h4>
                   
                   <div className="cards-1">
                       <img src="images/truck-119.jpg" alt="zyx"/> 
                       <h4>Event-1</h4>
                       <p>It is a long established fact that a reader will be distracted by the readable content of a
                           page when looking at its layout.</p>
                   
                       <div className="two-btn-flex">
                           <a href="" className="add-to-cl">Add to Calendar</a>
                           <a href="https://meet.google.com/" className="joins">Join Now</a>
                       </div>              
                   </div> 

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
                   {fromikpost.touched.title && fromikpost.errors.title ? <div className='text-danger'>{fromikpost.errors.title}</div> : null}


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
                   
                    {fromikpost.touched.image && fromikpost.errors.image ? <div className='text-danger'>{fromikpost.errors.image}</div> : null}


                    <label className="pst-lab">Invite VIP Stakeholder</label>
                    <input type="text"
                     placeholder="e-lorry@gmail.com" 
                     name="vip"
                     value={fromikpost.values.vip}
                     onChange={fromikpost.handleChange}
                     className="post-form" 
                     />
               
                    <label className="pst-lab">Description</label>
                    <textarea 
                    placeholder="Enter Short Description" 
                    className="post-form"
                    name="description"
                    value={fromikpost.values.description}
                    onChange={fromikpost.handleChange}

                    /> 
                    {fromikpost.touched.description && fromikpost.errors.description ? <div className='text-danger'>{fromikpost.errors.description}</div> : null}

                    
               
                     <button type='submit' className="postes">Post Now</button>
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

                {/* <div className="pop-up-content-wrap">
                  
                  <textarea type="text" placeholder="comment on post" className="input-field"/>
                  <div className="discu-btn mty-1">
                    <a href="#">Comment</a>
                  </div>

                </div> */}


                 <div className="content-event">  
                  <form className="for" onSubmit={formik.handleSubmit}>


                     <label className="pst-lab">Post, Announcement </label>
                    <input
                      type="text"
                      name='post_announcement_update'
                      value={formik.values.post_announcement_update}
                      onChange={formik.handleChange}
                      placeholder="Post, Announcement & Updates"
                      className="post-form"
                    />
                    {formik.touched.post_announcement_update && formik.errors.post_announcement_update ? <div className='text-danger'>{formik.errors.post_announcement_update}</div> : null} 


                    <label className="pst-lab">Add Title</label>
                    <input
                      type="text"
                      name='title'
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      placeholder="Write Title"
                      className="post-form"
                    />
                    {formik.touched.title && formik.errors.title ? <div className='text-danger'>{formik.errors.title}</div> : null}

                    <label className="pst-lab">Post Date</label>
                    <input
                      type="date"
                      name='post_date'
                      value={formik.values.post_date}
                      onChange={formik.handleChange}
                      placeholder="Write Title"
                      className="post-form"
                    />
                    {formik.touched.post_date && formik.errors.post_date ? <div className='text-danger'>{formik.errors.post_date}</div> : null}


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
                        <div className='text-danger'>{formik.errors.uploaded_file}</div>
                      ) : null}




                    <label className="pst-lab">Meeting Link</label>
                    <input
                      name="short_description"
                      value={formik.values.short_description}
                      onChange={formik.handleChange}
                      placeholder="Enter Short Description"
                      className="post-form"
                    />
                    {formik.touched.short_description && formik.errors.short_description ? <div className='text-danger'>{formik.errors.short_description}</div> : null}

                    <label className="pst-lab">Description</label>
                    <textarea
                      name="long_description"
                      value={formik.values.long_description}
                      onChange={formik.handleChange}
                      placeholder="Enter Long Description"
                      className="post-form"
                    ></textarea>
                    {formik.touched.long_description && formik.errors.long_description ? <div className='text-danger'>{formik.errors.long_description}</div> : null}

                    <button type='submit' className="postes"> Post Now </button>

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
