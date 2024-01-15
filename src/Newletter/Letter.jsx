import React, { useEffect } from 'react'
import Footer from '../Footer/footer'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Letter() {


  useEffect(()=>{
    document.title = 'NewLetter Page';
  },[])


  const downloadPdf = async () => {
    try {
      const response = await axios.get('your-pdf-api-endpoint', {
        responseType: 'blob', // Set the response type to blob
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'example.pdf'; 
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  const initalize=
  {
    email:''
  }

  const validattion= yup.object().shape({
    email:yup.string().email('Invalid email').required('Please enter valid email')
  })


  const submitfrom= async(value,{resetForm}) =>
  {
   
    const itemlog = value
    const itemslog = JSON.stringify(itemlog)
    console.warn("Email : ",itemslog)
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

    }
    catch(errors)
    {
      console.warn("chdcschacha",)
    }

    resetForm()
  }

  const formik=useFormik(
    {
      initialValues:initalize,
      onSubmit:submitfrom,
      validationSchema:validattion,
    }
  )



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
            <h3>Subscribe Our Newsletter</h3>
            <p>Subscribe to our newsletter and stay updated</p>



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
              <i className="fa-solid fa-envelope ft"></i>
              {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}  

            <div className="subs-btn-cent">
              <button type='submit' className="subs-btn">Subscribe</button>
            </div>

            <div className="download-btn-grid">
              <a href="" className="download-btn-1">News letter for 21/12/23 &nbsp;&nbsp;<i className="fa-solid fa-download"></i></a>
              <a href="" className="download-btn-1">News letter for 21/12/23 &nbsp;&nbsp;<i className="fa-solid fa-download"></i></a>
              <a href="" className="download-btn-1">News letter for 21/12/23 &nbsp;&nbsp;<i className="fa-solid fa-download"></i></a>
              <a href="" className="download-btn-1">News letter for 21/12/23 &nbsp;&nbsp;<i className="fa-solid fa-download"></i></a>
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