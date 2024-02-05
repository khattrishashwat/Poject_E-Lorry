import React, { useState, useEffect, createContext, useContext, useRef } from "react";
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
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/dist/style.css';
import Avatar from "react-avatar";
import moment from "moment";
import Loader from "../loader/loader";
import Avatarl from '@mui/material/Avatar';




function Discuss({ isVisible, onHide, comment }) {

  const inputRef = useRef(null);
  const [show, setShow] = useState(false);
  const [showevent, setShowevent] = useState(false);
  const [showshare, setShowshare] = useState(false);
  const [setpostshow, setSetpostshow] = useState(false);
  const [passicon, setpassicon] = useState(true)
  const [showemailmodel, setShowemailmodel] = useState(false)
  const [filefromdata, setFileformdata] = useState()
  const [eventprofile, seteventprofile] = useState()
  const [commentsec, setCommentsec] = useState(true)
  const [eventadd, setEventadd] = useState(true)
  const [data, setData] = useState([]);
  const [postdiscuss, setpostDiscuss] = useState([])
  const [eventfilterpost, seteventfilterpost] = useState([])
  const [toppostdiscuss, setToppostdiscuss] = useState([])
  const [updatepost, setUpdatepost] = useState()
  const [chatloading, setChatloading] = useState()
  // const [currentpost,setcurrentpost]=useState()
  const [id, setId] = useState(null);
  const [eventDisplay, setEventDisplay] = useState([])
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  const [disabledSubmitdislike, setdisabledSubmitdislike] = useState(false)
  const [disabledSubmitcomment, setdisabledSubmitcomment] = useState(false)
  const [handleclick, sethandleclick] = useState(true)
  const [isLoading, setLoading] = useState(false);
  const [isprofile, setProfileupdate] = useState({})
  const [valueid, setvalueid] = useState([])
  const [lineLimit,setLineLimit]= useState({})
  const [lineLimitid,setLineLimitid]= useState()



  console.log(isprofile, "isprofileee")

  const [emails, setEmails] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [activeButton, setActiveButton] = useState('');
  const [replayData, setcommentreplyData] = useState([])
  // const [replayComment,setReplayComment]=useState(false)
  const [repliedComments, setRepliedComments] = useState([]);

  const [hiddendata, sethiddendata] = useState(false)
  const [action, setAction] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const characterLimit = 12;




  const handleEmailChange = (newEmails) => {
    setEmails(newEmails);
  };
  const navigate = useNavigate()
  const location = useLocation()

  console.log("log .......", location)

  const token = localStorage.getItem("authtoken");

  const navcolor = useContext(GlobalInfo)
  // console.log("appcolor",navcolor.appcolor)


  const headers = {
    // "Content-Type": "application/json",
    "Accept": "application/json",
    'Authorization': `Bearer ${token}`,
  }

  const postDiscuss = async () => {
    const resp = await axios.get('/posts', { headers: headers })
    // console.log("iiiii",resp.data.data)
    setpostDiscuss(resp.data.data.posts)
    setToppostdiscuss(resp.data.data.top_posts)
    setEventDisplay(resp.data.data.events)
    // setcurrent(1)

  }

  const calendarLink = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const linkcal = 'https://www.google.com/calendar/render?action=TEMPLATE&text=Your+Event+Title&dates=20240101T010000Z/20240101T020000Z&details=Event+Details&location=Event+Location'

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


  const eventhandledata = () => {
    setEventadd(true)
    // console.log('event')
  }

  const posthandledata = () => {
    setEventadd(false)
  }

  const [count, setCount] = useState(1456);


  const handlelike = async (post_id) => {
    setDisabledSubmit(true)
    if (token == null) {
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

    } else {

      try {
        const statuslike = 1
        const status = statuslike
        const itemlike = { post_id, status }
        const resp = await axios.post('/like-dislike-post', itemlike, { headers: headers })
        setUpdatepost(2)
        // setAction(!action)
        //  console.warn("222222", resp)
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
    setDisabledSubmit(false)

  }



  const handledislike = async (post_id) => {
    setdisabledSubmitdislike(true)
    if (token == null) {
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
    else {
      // if(post_id)
      // {
      //   console.log("id of dislike", post_id)
      // }
      try {
        const statusDislike = 2
        const status = statusDislike
        const itemlike = { post_id, status }

        const resp = await axios.post('/like-dislike-post', itemlike, { headers: headers })
        //  console.warn("111111", itemlike)   
        //  console.warn("222222", resp)
        setUpdatepost(1)
      }
      catch (error) {
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
    }
    setdisabledSubmitdislike(false)
  }
  // const intialinput={
  //   post_id: value.id,
  //   comment:'',
  //   parent_id:'',
  // }

  // const commentSubmit=(value)=>
  // {
  //   // alert("working")
  //   console.log(",,,,,,,,,,,,,,,,,,",value)
  // }


  // const fromikcomment=useFormik({
  //   initialValues:intialinput,
  //   onSubmit:commentSubmit,
  // })

  // const commenthandleapi = async (value) => {
  //   console.log("comment replies ....................", value)
  //   const temporaryElement = document.createElement('div');
  //   temporaryElement.innerHTML = value.text;
  //   const plainText = temporaryElement.textContent || temporaryElement.innerText;


  //   const itemcomment = {
  //     post_id: value.userId,
  //     comment: plainText,
  //     // parent_id: value.repliedToCommentId,
  //   };


  //   const itemcomments = JSON.stringify(itemcomment)
  //   console.log("comment", itemcomment)
  //    const resp= await axios.post('/comment-post',itemcomment,{headers:headers})
  //   console.log("comment api", resp.data.data.comment_text)

  //   setcommentreplyData((prevData) => [resp?.data?.data?.comment_text, ...prevData]);
  //   // sethiddendata(true)

  // }

const fun=()=>
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


  const commenthandleapi = async (value, values) => {
    console.log(values, 'comment ubmit')
    try {
      const temporaryElement = document.createElement('div');
      temporaryElement.innerHTML = value.text;
      const plainText = temporaryElement.textContent || temporaryElement.innerText;

      const itemcomment = {
        post_id: value.userId,
        comment: plainText,
      };

      // const postcats = null;
      // const resp = await axios.get(`/posts?category`, { headers: headers });
      // console.log('anjay');
      // console.log(resp);
      // console.log(resp?.data?.data?.posts);

      const resp = await axios.post('/comment-post', itemcomment, { headers: headers });


      const newCommentText = resp?.data?.data?.comment_text;
      console.log(newCommentText, "newCommentText")
      if (newCommentText) {
        // Construct a new comment object
        const newComment = {
          comment_text: newCommentText,
          name: isprofile?.name
          // Include other properties as needed
        };


        setcommentreplyData((prevData) => [newComment, ...prevData]);
        setAction(!action)
        // sethiddendata(false)
        console.log(replayData, "replayDta after submit")

      } else {
        console.error('Invalid response structure or missing comment_text property in the response.');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };


  const commentreplyapi = async (value) => {
    console.log("comment replies ....................", value)

    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = value.text;
    const plainText = temporaryElement.textContent || temporaryElement.innerText;


    const itemcomment = {
      post_id: value.userId,
      comment: plainText,
      parent_id: value.repliedToCommentId,
    };


    const itemcomments = JSON.stringify(itemcomment)
    console.log("item reply 00000000000", itemcomment)
    const resp = await axios.post('/comment-post', itemcomment, { headers: headers })
    setAction(!action)
    // sethiddendata(false)

    console.log("comment api", resp)


  }




  const handleCommentId = async (id) => {

    // if (token == null) {
    //   Swal.fire({
    //     title: 'please login!',
    //     showConfirmButton: false, // Hide the confirm button
    //     timer: 3000,
    //   })
    //   setTimeout(() => {
    //     const parameterValue = -1; // Replace this with the actual value of your parameter
    //     const path = '/auth/login';
    //     navigate(path, { state: { parameterValue } })
    //   }, 2000);

    // } else {
    // sethiddendata(!hiddendata)
    setdisabledSubmitcomment(true)
    try {
      if (loading) {
        return;
      }
      setIsLoading(true);
      const post_id = id;
      console.log("comment ---------", post_id)


      const resp = await axios.get(`/postcomment?post_id=${id}`, { headers: headers })
      console.log("comment replay", resp)

      setcommentreplyData(resp?.data?.data?.post_coment)

      setId(id)

      // sethiddendata(prevHiddendata => !prevHiddendata)
      sethiddendata(true)
      //  sethiddendata(prevHiddendata => prevHiddendata !== id);
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)

    }
    setdisabledSubmitcomment(false)
    // }


    // setCommentsec(true)
  }

  const handleEditcomment = async (editdata) => {
    console.log("comment id", editdata);
    // console.log("comment id",commentId);
    const editcomment =
    {
      post_id: editdata.userId,
      comment: editdata.text,
      parent_id: editdata.parent_id,
      comment_id: editdata.comId,

    }

    console.log('data come from comment', editcomment);
    // alert("delete",commentId)
    try {

      const respo = await axios.post('/comment-post', editcomment, { headers: headers })
      console.log('rrrrr', respo)
      toast('Post Edit', {
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
      toast(errors, {
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
    //  for fetch data

    if (hiddendata && id && token) {
      const resp = await axios.get(`/postcomment?post_id=${editdata.userId}`, { headers: headers })
      console.log("comment replay", resp)

      setcommentreplyData(resp?.data?.data?.post_coment)
      console.log("for fetching data", resp?.data?.data?.post_coment)

      setId(id)

    } else {
      setcommentreplyData([])

      setId(null)
    }


    //   

  };

  const handleDeletecomment = async (commentId, postid) => {

    console.log("comment id", commentId, postid);
    const deleteid =
    {
      id: commentId
    }

    const confirmationResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });




    if (confirmationResult.isConfirmed) {
      try {

        const respo = await axios.post('comment/delete', deleteid, { headers: headers })
        console.log('rrrrr', respo)
        toast('Post delete', {
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
        toast(errors, {
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

      // for fetch data
      if (hiddendata && id && token) {
        const resp = await axios.get(`/postcomment?post_id=${postid}`, { headers: headers })
        console.log("comment replay", resp)

        setcommentreplyData(resp?.data?.data?.post_coment)
        console.log("for fetching data", resp?.data?.data?.post_coment)

        setId(id)

      } else {
        setcommentreplyData([])

        setId(null)
      }
    }
    setAction(!action)
    // alert("delete",commentId)




  };

  const dataprofile = async () => {
    try {
      const resp = await axios.get("/view-profile", { headers: headers })
      console.log(" nav api profile ", resp.data.data)
      setProfileupdate(resp.data.data)
    }
    catch (errors) {
      console.log(errors)
    }

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
    post_date: Yup.date().required('Date is required').min(new Date(), 'Event date cannot be in the past').nullable(),
    // uploaded_file: Yup.mixed().required('Image is required'),
    // uploaded_file: Yup.mixed().required('File is required').test('fileSize', 'File size is too large', (value) => {
    //   return value && value.size <= 10485760;
    // }),
    meeting_link: Yup.string().required('Plese enter link').test('is-https', 'URL must be HTTPS', (value) => {
      if (!value) return true;
      return value.startsWith('https://');
    }),
    long_description: Yup.string().min(10, 'Too Short!').max(1000, 'Too Long').required('please enter description'),
  });

  const eventsubmit = async (values, { resetForm }) => {
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

      let frms = new FormData()
      // frms.append('post_announcement_update', values.post_announcement_updat)
      frms.append('title', values.title)
      frms.append('post_date', values.post_date)
      frms.append('uploaded_file', eventprofile)
      frms.append('meeting_link', values.meeting_link)
      frms.append('long_description', values.long_description)
      const respon = await axios.post("/add-event", frms, { headers: headers });
      // console.log("event", respon.data)
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
    // setShowevent(false)
    // onHide();
    // resetForm()
    setTimeout(() => {
      window.location.reload()
    }, 1000);
    resetForm();
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
      // localStorage.setItem("authtoken", (resp.data.data.token))


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



  const emailmodelfun = () => {
    if (token) {
      setShowemailmodel(true)
    }
  }

  // post  formik area

  const initialpostvalue = {
    title: '',
    image: null,
    vip: '',
    description: '',
    category: ''

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
    // image: Yup.mixed().required('File is required'),
    // .test('fileSize', 'File size is too large', (value) => {
    // You can add your custom file size validation logic here
    // return value && value.size <= 10485760; // 10 MB
    // }),
    //  vip: Yup.string().required('please enter emails '),
    //  .test('is-https-emails', 'Each email must start with "https://"', (value) => {
    //   if (!value) return true; 
    //   // return value.startsWith('https://');
    //   const emailArray = value.split(',');

    //   return emailArray.every((email) => email.trim().startsWith('https://'));
    // }),
    description: Yup.string().min(5, 'Too Short!').max(1000, 'Too Long').required('Required'),
  });
  const submitpost = async (value, { resetForm }) => {
    setDisabledSubmit(true)
    console.log("value--------------", value)
    try {
      const item = value;
      const items = JSON.stringify(item)
      let frm = new FormData();
      frm.append('image', filefromdata)
      frm.append('title', value.title)
      frm.append('description', value.description)
      frm.append('vip', value.vip)
      frm.append('category', value.category)


      console.log("fun", frm)
      const resp = await axios.post('/create-post', frm, { headers: headerspost })
      // console.log("<<<<<<",resp)
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

    setDisabledSubmit(false)
    setTimeout(() => {
      window.location.reload()
    }, 1000);
    resetForm();
  }

  const fromikpost = useFormik({
    initialValues: initialpostvalue,
    onSubmit: submitpost,
    validationSchema: validatedpost,
  })



  const handleInputChange = (event) => {
    const emails = event.target.value.split(',');
    formik.setFieldValue('vip', emails.join(','));
  };


  const sethandledoubleclick = (idvalue) => {
    const idvalues = idvalue == null;
    setId(idvalues)
  }



  const filterpostfun = async (value) => {
    const postcat = value;
    setActiveButton(value);
    console.log("post value", postcat);
    const postcats = (value === undefined) ? '' : postcat
    console.log("post value", postcats);
    const resp = await axios.get(`/posts?category=${postcats}`, { headers: headers });
    // console.log("resp filetr event" ,resp.data.data.posts)
    seteventfilterpost(resp.data.data.posts)

  }

  console.log(eventfilterpost, "eventFlitered")


  const setShowshareid = (value) => {
    setvalueid(value)
    setShowshare(true)
  }


  const emailChips = formik.values.vip && formik.values.vip.split(',')
    ? formik.values.vip.split(',').map((email, index) => (
      <Chip
        key={index}
        label={email.trim()}
        onDelete={() => {
          const updatedEmails = formik.values.vip
            .split(',')
            .filter((_, i) => i !== index)
            .join(',');
          formik.setFieldValue('vip', updatedEmails);
        }}
        style={{ marginRight: '8px', marginBottom: '8px' }}
      />
    ))
    : null;

  const scrollHandle = (scrollid) => {
    const postElement = document.getElementById(`post_${scrollid}`);

    // Check if the element exists before scrolling
    if (postElement) {
      postElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const customNoComment = () => (
    <div className="comment-titlepost"> Zero Comments posted here!</div>

  )


  const handleCopyLink = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      // Optionally, you can show a success message to the user
      alert('Link copied to clipboard!');
    }
  };




  const toggleDescription = (postId) => {
    setLineLimit((prevExpandedPosts) => ({
      ...prevExpandedPosts,
      [postId]: !prevExpandedPosts[postId],
    }));
  };


  useEffect(() => {
    document.title = 'Chatroom Page';
  }, [])

  useEffect(() => {
    postDiscuss()
    filterpostfun()
    dataprofile()
  }, [updatepost])



  useEffect(() => {
    filterpostfun()
  }, [action])

  useEffect(() => {
    handleCommentId(id)
  }, [action, id])


  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Toggleside />
      <div className="small-container">
        {/* update code  */}
        <h2 className="thread-main-head">Top Discussion Threads</h2>
        <span className="line-1"></span>
        <div className="threads">
          {toppostdiscuss.map((value, index) => (
            <div className="thread-text" key={index} >

              {/* <img src={value.user_avator} alt='xyz' />  */}
              <div onClick={(e) => scrollHandle(value.id)}>
                {(!value.user_avator == "") ?
                  (
                    <img src={value.user_avator} alt='xyz' className="imgprofile" />
                  )
                  :
                  (
                    <Avatar className="avtorsty-nav" name={value.name} />
                  )
                }
              </div>


              <div className="thre-text-flex" onClick={(e) => scrollHandle(value.id)}>
                <div className="boths">
                  <h4>{value.name}</h4>
                  <div className="mainsflexings-1">
                    <div className="like-1">
                      <i onClick={(e) => scrollHandle(value.id)} className="fa-solid fa-thumbs-up "></i>
                      <h4 >{value.post_like_count}</h4>
                    </div>
                    <div className="like-1" onClick={(e) => scrollHandle(value.id)} >
                      <i className="fa-solid fa-thumbs-down"></i>
                      <h4>{value.post_dislike_count}</h4>
                    </div>
                    <div className="like-1" onClick={(e) => scrollHandle(value.id)} >
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


            <div className="discuss-grid-2">
              <div className="discuss-posti">
                <div className="right-forms-1f">
                  <div className="upper-two-btn modefychat-manu">
                    <button type="button" onClick={() => filterpostfun('')} className={activeButton === '' ? 'xyzx' : 'btnnew'} >ALL</button>
                    <button type="button" onClick={() => filterpostfun("reports")} className={activeButton === 'reports' ? 'xyzx' : 'btnnew'} >Report</button>
                    <button type="button" onClick={() => filterpostfun("vehicle")} className={activeButton === 'vehicle' ? 'xyzx' : 'btnnew'}>Vehicle Model</button>
                    <button type="button" onClick={() => filterpostfun("policies")} className={activeButton === 'policies' ? 'xyzx' : 'btnnew'} >Policies</button>
                    <button type="button" onClick={() => filterpostfun("technologies")} className={activeButton === 'technologies' ? 'xyzx' : 'btnnew'} >Technologies</button>
                  </div>
                </div>
              </div>
            </div>




            {/* postdiscuss  */}

            {eventfilterpost.map((value, index) => (
              <div className="group-section-1" key={index}>
                <div id={`post_${value.id}`} className="imag-text">

                  {(!value.user_avator == "") ? (<img src={value.user_avator} alt='xyz' className="imgprofiles" />) : (<Avatar className="avtorsty-nav" name={value.name} />)
                  }
                  <div className="under-text-flex">
                    <div className="boths">
                      <h4>{value.name}</h4>
                      <h5>{moment(value.created_at).format('DD MMM')}</h5>
                    </div>
                  </div>
                </div>
                <h3>{value.title}</h3>
                 <p>{value.description}</p>  

                 {/* <p>{lineLimit[index]? value.description  : `${value.description.slice(0, 300)}...`}  </p>
                <p onClick={() => toggleDescription(index)}>
                  {lineLimit[index] ? 'Read Less' : 'Read More'}
                </p> */}
              

                {/* <img
                src={value.post_image}
                className="tru-img"
                alt="dicimg5"
              /> */}

{/* 
                {(!value.post_image == "") ? (<img src={value.post_image} alt='xyz' className="tru-img" />) : (<Avatar className="avtorsty-nav" name={value.name} />)
                } */}

                {/* <Avatar name={value.name} /> */}
                <div className="mainsflexings">
                  <div className="like">
                    {/* <i onClick={(e) => handlelike(value.id)} className={token && value.you_like_post == 1 ? "fa-solid fa-thumbs-up thumbcolor  pointmu" : "fa-solid fa-thumbs-up pointmu"} ></i> */}
                    {/* <i onClick={(e) => handlelike(value.id)} className={token && value.you_like_post === 1 ? 'fa-solid fa-thumbs-up thumbcolor pointmu' : 'fa-solid fa-thumbs-up pointmu'}>
                   {disabledSubmit && <span className="fa-solid fa-thumbs-up"></span>} */}
                    <i>
                      {
                        disabledSubmit ? (
                          <div>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="sr-only"></span>
                          </div>
                        ) : <i onClick={(e) => handlelike(value.id)} className={token && value.you_like_post == 1 ? "fa-solid fa-thumbs-up thumbcolor  pointmu" : "fa-solid fa-thumbs-up pointmu"}></i>
                      }
                      {/* { const MemoizedLikeButton = React.memo(({ id, you_like_post }) => (
                       <i onClick={() => handleLike(id)} className={token && you_like_post === 1 ? "fa-solid fa-thumbs-up thumbcolor  pointmu" : "fa-solid fa-thumbs-up pointmu"}></i>
                        ));} */}
                    </i>
                    <h4>{value.post_like_count}</h4>
                  </div>
                  <div className="like">
                    {/* <i onClick={(e) => handledislike(value.id)} className={token && value.you_dislike_post == 1 ? "fa-solid fa-thumbs-down thumbcolor pointmu" : "fa-solid fa-thumbs-down pointmu"}></i> */}

                    <i>

                      {
                        disabledSubmitdislike ? (
                          <div>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="sr-only"></span>
                          </div>
                        ) : <i onClick={(e) => handledislike(value.id)} className={token && value.you_dislike_post == 1 ? "fa-solid fa-thumbs-down thumbcolor pointmu" : "fa-solid fa-thumbs-down pointmu"}></i>

                      }
                    </i>

                    <h4>{value.post_dislike_count}</h4>
                  </div>
                  <div className="like">
                    {/* <i className="fa-solid fa-comment pointmu"  
                    onClick={() => {sethiddendata(!hiddendata); handleCommentId(value.id,value);  }}  
                    // onDoubleClick={() => sethiddendata(!hiddendata)}
                    // onClick={async () => {
                    //   await handleCommentId(value.id);
                    //   sethiddendata(prevHiddendata => !prevHiddendata);
                    // }}
                    // onDoubleClick={() => sethiddendata(prevHiddendata => !prevHiddendata)} 
                    // >
                      // </i> */}


                    <i>
                      {
                        token  && disabledSubmitcomment ? (
                          <div>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="sr-only"></span>
                          </div>
                        ) : <div>
                          {/* <i className="fa-solid fa-comment pointmu"  onClick={() => {handleCommentId(value.id,value);}} ></i> */}
                          {!hiddendata && <i className="fa-solid fa-comment pointmu" onClick={() => { handleCommentId(value.id, value); 
                          if(token)
                          { 
                          
                          }
                          else{
                          fun()
                          }
                        }}
                          >
                          </i>}
                          {hiddendata && <i className="fa-solid fa-comment pointmu"
                            onClick={() => sethiddendata(false)}
                          // style={{color:"red"}}

                          >

                          </i>
                          }
                        </div>
                      }
                    </i>



                    <h4>{value.post_comments_count}</h4>
                  </div>
                  <div className="like">
                    {/* <a href=""> */}
                    <i className="fa-solid fa-share pointmu" onClick={() => setShowshareid(value.unique_code)} ></i>
                    {/* </a> */}
                  </div>

                </div>
                {data}
                {token && hiddendata && value.id === id ? <>
                  <CommentSection
                    currentUser=
                    {{
                      currentUserId: value?.id,
                      currentUserImg: isprofile?.avator || 'images/profile9.jpg',
                      currentUserProfile: isprofile?.avator || 'images/profile9.jpg',

                    }}
                    commentsCount={value?.post_comments_count}
                    customNoComment={() => customNoComment()}
                    customImg={isprofile.avator}
                    inputStyle={{ border: "1px solid rgb(208 208 208)" }}
                    formStyle={{ backgroundColor: "white" }}
                    submitBtnStyle={{ backgroundColor: "blue", padding: "7px 15px", position: 'relative', left: '-1px' }}
                    cancelBtnStyle={{ border: "1px solid gray", backgroundColor: "gray", color: "white", padding: "7px 15px" }}
                    replyInputStyle={{ borderBottom: "1px solid black", color: "black" }}
                    onSubmitAction={(data) => commenthandleapi(data, value)}
                    onReplyAction={(data) => {
                      const parentCommentId = data.repliedToCommentId
                      console.log(typeof (parentCommentId), "parentCommentId")
                      const parentComment = replayData?.find(comment =>
                        comment?.replies?.some(i => i.comid === Number(parentCommentId))
                      );

                      console.log(parentComment, "parentComment")
                      if (parentComment && parentComment.replies && parentComment.replies.length >= 1) {

                        setRepliedComments([...repliedComments, parentCommentId]);
                        return alert("Only one reply is allowed for a comment");

                      } else {
                        commentreplyapi(data, parentComment);
                      }
                    }}



                    commentData={replayData?.map((valudata, index) => (
                      {
                        userId: `${valudata?.userid}`,
                        comId: `${valudata?.comid}`,
                        // fullName: `${valudata?.name}`,
                        // avatarUrl: (<div><img src={value.user_avator} /></div>),
                        // userProfile: `${value?.user_avator || "images/profile9.jpg"}`,
                        // text: `${valudata.comment_text?valudata.comment_text:'Not Available'} ${moment(valudata.comentdate).format('DD MMM YYYY')}`,
                        // date: `${moment(valudata.comentdate).format('DD MMM YYYY')}`,
                        text: (
                          <div style={{ position: 'relative', top: '7px' }}>
                            {/* <img src={value?.user_avator} alt="userIcon" class="imgdefault"  />  */}

                            <div className="absd">

                              <div style={{ display: 'flex', marginLeft: '-20px', marginBottom: '10px', justifyContent: 'space-between' }}>
                                <div className="d-flex gap">
                                  <div>
                                    {(!valudata.user_avator == "") ? (<img src={value.user_avator} alt='xyz' className="tru-imged" />) : (<Avatar className="avtorsty-nav" name={valudata?.name} />)
                                    }
                                  </div>
                                  <div>
                                    <h4 style={{ marginLeft: '13px', marginTop: "11px", fontSize: '18px', fontWeight: 'bold' }}>{valudata.name.length > characterLimit
                                    ? valudata.name.substring(0, characterLimit) + '...'
                                    : valudata.name}</h4>
                                  </div>
                                </div>

                                <div>
                                </div>
                                <div className="d-flex gap">
                                  <span>{moment(valudata?.comentdate).format('DD MMM YYYY')}</span>


                                  {valudata.name === isprofile.name ? (
                                    <div>
                                      <ul>
                                        <li className="navbar-dropdown">
                                          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                          <div className="dropdown dropedit" style={{ width: '80px', top: '-2px', marginTop: "12px" }}>
                                            <button onClick={() => {
                                              const newText = prompt('Enter new comment text:', valudata?.comment_text);
                                              if (newText !== null && newText !== undefined) {

                                                handleEditcomment({
                                                  userId: `${value?.id}`, comId: valudata.comid, // parent_id: valudata.parent_comment_id, 
                                                  avatarUrl: valudata.user_avator || "images/profile9.jpg",
                                                  userProfile: valudata.user_avator || "images/profile9.jpg",
                                                  fullName: valudata.name,
                                                  text: newText,
                                                  parentOfEditedCommentId: valudata.parentCommentId || "",
                                                });
                                              }
                                            }} style={{ marginRight: "10px" }}>Edit</button>

                                            <button onClick={() => handleDeletecomment(valudata.comid, value.id)}>Delete</button>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>

                                  ) : null
                                  }

                                </div>

                              </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                              <span>{valudata?.comment_text}</span>



                              {/* {valudata.name} 
                            {isprofile.name} */}
                              {/* </li> */}
                              {/* </ul> */}

                            </div>
                            {/* <div ><button style={{marginTop:'10px'}} onClick={()=>setreplycommentstate(!setreplycommentstate)}>reply</button></div> */}
                          </div>
                        ),
                        replies: (valudata?.replies || []).map((reply) => ({
                          userId: `${reply.userid}`,
                          comId: `${reply.comid}`,
                          parent_id: `${reply.parent_comment_id}`,
                          // fullName:`${reply.name}`,
                          // avatarUrl: `${reply.user_avator || "images/profile9.jpg"}`,
                          // userProfile: `${reply.user_avator || "images/profile9.jpg"}`,
                          text: (
                            <div style={{ position: 'relative', top: '7px' }}>
                              {/* <img src={value?.user_avator} alt="userIcon" class="imgdefault"  />  */}

                              <div className="absd">
                                <div style={{ display: 'flex', marginLeft: '-20px', marginBottom: '10px', justifyContent: 'space-between' }}>

                                  <div className="d-flex">
                                    <div>
                                      {
                                        (!reply.user_avator == "") ? (<img src={reply.user_avator} alt='xyz' className="tru-imged" />) : (<Avatar className="avtorsty-nav" name={valudata?.name} />)
                                      }
                                    </div>

                                    <div>
                                      <h4 style={{ marginLeft: '13px', marginTop: "11px", fontSize: '18px', fontWeight: 'bold' }}>{reply.name.length > characterLimit
                                    ? reply.name.substring(0, characterLimit) + '...'
                                    : reply.name}</h4>
                                    </div>
                                  </div>

                                  <div className="d-flex gap">
                                    <span style={{ marginLeft: '360px' }}>{moment(reply.comentdate).format('DD MMM YYYY')}</span>

                                    {reply.name === isprofile.name ? <div>
                                      <ul>
                                        <li className="navbar-dropdown">
                                          {/* {value.name ==  reply.name && ( */}
                                          <div>
                                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                            <div className="dropdown dropedit" style={{ width: '80px', top: '-2px', marginTop: "12px" }}>
                                              <button onClick={() => {
                                                const newText = prompt('Enter new comment text:', reply?.comment_text);
                                                if (newText !== null && newText !== undefined) {

                                                  handleEditcomment({
                                                    userId: `${value?.id}`,
                                                    comId: `${reply.comid}`,
                                                    parent_id: `${reply.parent_comment_id}`,
                                                    avatarUrl: reply.user_avator || "images/profile9.jpg",
                                                    userProfile: reply.user_avator || "images/profile9.jpg",
                                                    fullName: reply.name,
                                                    text: newText,
                                                    parentOfEditedCommentId: valudata.parentCommentId || "",
                                                  });
                                                }
                                              }} style={{ marginRight: "10px" }}>Edit</button>
                                              <button onClick={() => handleDeletecomment(reply.comid, value.id)}>Delete</button>
                                            </div>
                                          </div>
                                          {/* )} */}
                                        </li>
                                      </ul>
                                    </div>
                                      : null
                                    }
                                  </div>

                                </div>
                              </div>


                              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ marginBottom: '15px' }}>{reply.comment_text ? reply.comment_text : 'Not Available'}</span>


                                {/* {reply.parent_comment_id !== 0 ? className="{replyBtn ? 'hidden' : null}" : null} */}



                              </div>
                            </div>
                          ),
                        })),
                        disableReplies: repliedComments.includes(valudata.comid)
                      }

                    ))}
                  />
                </> : null}
              </div>
            ))}
          </div>

          {/* share model  */}

          {token ?
            <Modal
              show={showshare}
              onHide={() => setShowshare(false)}
              // onExit={()=>alert('hello')}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <div className="content-post" style={{ display: 'flex' }}>
                  <form className="for">
                    <input
                      type="text"
                      // placeholder="https://www.google.co.in/" 
                      name="title"
                      value={`https://dev.webmobrildemo.com/e_lorry/web/${valueid}`}
                      className="post-form"
                      ref={inputRef}
                      readOnly
                    />

                    <button className="postes" onClick={handleCopyLink} >Copy Link</button>
                  </form>
                </div>
              </Modal.Body>
            </Modal>
            : null
          }





          {!token ? <></> : <>
            <div className="discuss-grid-2">
              <div className="discuss-posti">
                <div className="right-forms-1f">
                  <div className="upper-two-btn">
                    <button type="button" className="unactive" onClick={() => setShowevent(true)}>Add Events</button>
                    <button className="unactive" onClick={() => setShow(true)}  >Add Post</button>


                  </div>

                  <h4 className="event-list">Events Listing</h4>
                  {eventDisplay.map((value, index) => (
                    <div className="cards-1" key={index}>
                      {/* <img src={value.uploaded_file} alt="zyx"/>  */}
                      {(!value.uploaded_file == "") ?
                        (
                          <img src={value.uploaded_file} alt='xyz' />
                        )
                        :
                        (
                          <Avatar className="avtorsty-nav" name={value.name} />
                        )
                      }
                      <h4 className="dateevent-sty">{value.post_date}</h4>
                      <h4>{value.title}</h4>
                      <p>{value.long_description}</p>

                      <div className="two-btn-flex">

                        <Link to='/discuss' className="add-to-cl" onClick={() => calendarLink()}> {isLoading ? 'Loading...' : 'Calendar'}</Link>
                        <Link to='/discuss' className="joins" onClick={() => handleLinkClick(value.meeting_link)}>
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
                onHide={() => { setShow(false); fromikpost.resetForm() }}
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
                    <form onSubmit={fromikpost.handleSubmit} className="for">
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

                      {/* {fromikpost.touched.image && fromikpost.errors.image ? <div className='text-danger testdanger' >{fromikpost.errors.image}</div> : null} */}


                      <label className="pst-lab">Invite VIP Stakeholder</label>
                      <input
                        type="text"
                        placeholder="eLorry@gmail.com"
                        name="vip"
                        value={fromikpost.values.vip}
                        //  onChange={fromikpost.handleChange}
                        onChange={(e) => {
                          handleInputChange(e);
                          fromikpost.handleChange(e);
                        }}

                        className="post-form"
                      />
                      {/* {fromikpost.touched.vip && fromikpost.errors.vip ? <div className='text-danger testdanger'>{fromikpost.errors.vip}</div> : null}   */}                 
                    <div style={{ marginTop: '8px' }}>{emailChips}</div> 



                      {/* <ReactMultiEmail
                          placeholder="Input your Email Address"
                          emails={emails}
                          onChange={handleEmailChange}
                          getLabel={(email, index, removeEmail) => (
                            <div data-tag key={index}>
                              {email}
                              <span data-tag-handle onClick={() => removeEmail(index)}>
                                ×
                              </span>
                            </div>
                          )}
                     />
                     <br /> */}


                      <label className="pst-lab">Tags</label>
                      <select name="category" id="" value={fromikpost.values.category} onChange={fromikpost.handleChange} className="post-form" >
                        {/* <option value="" selected disabled>
                    Report and Article*
                  </option> */}
                        <option value="reports">Report</option>
                        <option value="vehicle">Vehicle</option>
                        <option value="policies">Policies</option>
                        <option value="technologies">Technologies</option>

                      </select>
                      {formik.touched.category && formik.errors.category ? <div className='text-danger textvalidanger'>{formik.errors.category}</div> : null}



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
                onHide={() => { setShowevent(false); formik.resetForm() }}
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
                      {/* {formik.touched.uploaded_file && formik.errors.uploaded_file ? (
                        <div className='text-danger testdanger'>{formik.errors.uploaded_file}</div>
                      ) : null} */}




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

                      <button type="submit" disabled={disabledSubmit} className="postes btn-subm" onClick={() => setShowevent(true)} >
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


