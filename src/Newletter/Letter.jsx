import React, { useEffect, useState } from 'react'
import Footer from '../Footer/footer'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Letter() {

  const [downloadfile,setDownloadFile] =useState([])
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  useEffect(()=>{
    document.title = 'NewLetter Page';
    downloadPdf()
  },[])


const token = localStorage.getItem("authtoken")
  const headers={
    "Content-Type":"application/json",
    "Accept":"application/json",
    "Authorization" : `Bearer ${token}`,
  }

  

  const downloadPdf = async () => {
    try {
      const response = await axios.get('/newsletter',{headers:headers})
        
      console.log(response,"newLetter")
     
      setDownloadFile(response.data.data)

       
    } catch (error) {
      console.error('Error downloading PDF:', error);
      toast(error.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'error',
      });
    }
  };



 

  const initalize=
  {
    email:''
  }

  const validattion= yup.object().shape({
    email:yup.string().email('Please  enter valid email') .test('email-domain', 'Email domain must be .com or .in', (value) => {
      if (!value) return false; // Handle empty values if needed
      return /@(.+\.com|.+\.in)$/.test(value);
    }).required('Please enter  email')
  })


const submitfrom= async(value,{resetForm}) =>
{
// if(disabledSubmit){
//   return
// }

setDisabledSubmit(true)

  const itemlog = value
  const itemslog = JSON.stringify(itemlog)
  console.warn("Email : ",itemslog)
  console.log(value.email,"value")
  
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
  try{
   

    const respo=await axios.post("/subscribe-newsletter", `${itemslog}`,
    {headers:headers})
    console.warn("res###",respo)
    toast(respo.data.message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    setDisabledSubmit(false)

  }
  catch(errors)
  {
    console.log(errors,"errorssssssssss")
  
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
    resetForm()
   
  
}

  const formik=useFormik(
    {
      initialValues:initalize,
      onSubmit:submitfrom,
      validationSchema:validattion,
    }
  )
  function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate.replace(/\//g, '-'); // Replace slashes with dashes
  }


  const downloadFile = (filename, url,event) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    event.preventDefault();
    const newTab = window.open(link, '_blank');
    newTab.addEventListener('load', () => {
      // setLoading(false);
    });
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };
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

      <div className="small-container newss">
        <div className="newsletter-main-parent-grid">
          <div className="newsletter-grid-1">
          </div>
          <div className="newsletter-grid-2">
            <h3>Subscribe to our Newsletter</h3>
            <p>Join us and stay updated</p>
            <form onSubmit={formik.handleSubmit}  className='form-sub'>
            <div className="subs-pos"> 
              <input 
              type="text"
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Email" 
              className="subs-email" 
               />
              <i className="fa-solid fa-envelope ft" style={{marginTop:"0.5rem"}}></i>
              {formik.touched.email && formik.errors.email ? <div className='text-danger textttt'>{formik.errors.email}</div> : null}  

            <div className="subs-btn-cent">



              {/* <button type='submit' className="subs-btn">Subscribe</button> */}

              <button type="submit" disabled={disabledSubmit} className="subs-btn"
              >
                {
                          disabledSubmit ? (
                            <div>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              <span className="sr-only"></span>  Subscribe
                            </div>
                          ) : 'Subscribe'
                        }
                </button>

            </div>

        <div className="download-btn-grid">
        {downloadfile?.map((file, index) => (
          <div
            key={index}
            // href="#"
            className="download-btn-1"
            onClick={(event) => downloadFile(file.title, file.filename_url,event)}
          >
            {/* {`Newsletter for ${file.title} `} */}
            <span className="download-btn-1">{`Newsletter for ${formatDate(file.created_at)} `} &nbsp;&nbsp;<i className="fa-solid fa-download"></i></span>
            
          </div>
        ))}
      </div>


            </div>
            </form>



            </div>


        </div>
      </div>
      <Footer />

    </>
  )
}

export default Letter