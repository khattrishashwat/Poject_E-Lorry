import React from 'react'
import { useFormik } from 'formik'
import *  as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


function Subscribsection() {

  const initalize=
  {
    email:''
  }

  const submitemail= async(value,{resetForm})=>
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


  const validation= yup.object().shape({
    email:yup.string().email('Invalid email').required('required')
  })

  const formik=useFormik({
    initialValues:initalize,
    onSubmit:submitemail,
    validationSchema:validation
  })

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

      <div className="sh">
        <div className="circle-1-1"></div>
        <div className="circle-1-2"></div>
        <div className="circle-1-3"></div>
        <h2 className="sh-head">Subscribe to our Newsletter</h2>
        <span className="sh-line"></span>
        <p className="sh-para">Subscribe our Newsletter to stay updated every moment</p>
        <form onSubmit={formik.handleSubmit} className='formhome-sub'  >
        <div className="boths-btn">
        
          <input 
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter a Valid Email Address" 
          className="subs" />
              {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}  
           
          <input type='submit'  className="sub-btns"/>
         
        </div>
        </form>
       
      </div>
      

    </>
  )
}

export default Subscribsection