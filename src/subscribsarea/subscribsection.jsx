import React,{useState,useEffect} from 'react'
import { useFormik } from 'formik'
import *  as yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Subscribsection() {
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  const [invalidEmailToastShown, setInvalidEmailToastShown] = useState(false);
  const initalize=
  {
    email:''
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 

  const submitemail= async(value,{resetForm})=>
  {
    if(disabledSubmit){
      return
    }
    
    setDisabledSubmit(true)
   
      const itemlog = value
      const itemslog = JSON.stringify(itemlog)
      console.warn("Email : ",itemslog)
      console.log(value.email,"value")
      if (!value.email) {
        // Display email field is required toast
        toast("Email field is required", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: 'error',
        });

        // Enable the button for further submissions
        setDisabledSubmit(false);
        return;
      }
      if (!emailRegex.test(value.email)) {
                
                
        toast("Entered email is invalid", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: 'error'
        })

  
        setDisabledSubmit(false);
       
              return;
      }
      
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
        
      }finally{
        setDisabledSubmit(false)
        resetForm()
       
      }
  
   
  }

 

   
// const validation= yup.object().shape({
//     email:yup.string().email('Invalid emailss').required('enter valid emailsss')
//   })

  const formik=useFormik({
    initialValues:initalize,
    onSubmit:submitemail,
    // validationSchema:validation
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
        <form onSubmit={formik.handleSubmit} className='formhome-sub' noValidate >
        <div className="boths-btn">
        
          <input 
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter a Valid Email Address" 
          className="subs" />           
          <button type='submit' disabled={disabledSubmit || formik.isSubmitting}  className="sub-btns">

          {
                          formik.isSubmitting ? (
                            <div>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              <span className="sr-only"></span>  Submit
                            </div>
                          ) : 'Submit'
                        }
                        </button>
         
        </div>
        {formik.errors.email ? <div className='text-danger text-subs'>{formik.errors.email}</div> : ""}  

        </form>
       
      </div>
      

    </>
  )
}

export default Subscribsection