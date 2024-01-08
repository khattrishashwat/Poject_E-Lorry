import React,{useState} from 'react'
import '../forgetpass.css'
import Footer from '../../Footer/footer'
import { Link,useNavigate,useLocation } from 'react-router-dom' 
import { useFormik } from 'formik'
import * as yup from 'yup'
import {toast} from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function Forgetpassword() {

  const[passwordhide,setPasswordhide] = useState(true)
  const location =useLocation()


  const navigate=useNavigate()

  const initialvalues={
    email:''
  }

  const onsubmit = async(values) =>
  {
    const itempass=values
    const itemspass=JSON.stringify(itempass)
    console.warn("passssss@@@@", itempass)
    const headers={
      "Content-Type":"application/json",
      "Accept":"application/json",
    }



    try{
      const respon=  await axios.post("/forgot-password",`${itemspass}`,
      {headers:headers}
      )


      // console.warn("rep!!!!!!",respon)
      toast(respon.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'success'
      });
      setTimeout(() => {
        // history.push('/new-page');
        navigate('/auth/verify', { state: itempass } )
      }, 2000);
        


    }catch(errors)
    {
      console.warn("EDNSJNCJS", errors)
    
    toast(errors.response.data.message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: 'error'
    });
  }
    // navigate('/auth/verify')

  }

  const validattion= yup.object().shape({
    email:yup.string().email('Invalid email').required('required')
  })

  const formik=useFormik({
    initialValues:initialvalues,
    onSubmit:onsubmit,
    validationSchema:validattion


  })

  // if (!location.state) {
    // navigate('/employee/signup')
  // }
  // console.log(" !!!!!!!",location.state)



  return (
    <>
    
    <div className="verify-box pd-1">
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
           <h2>Forgot your password</h2>
               <p>Lorem Ipsum has been the industry's standard dummy text ever.</p>
               <form onSubmit={formik.handleSubmit}>
               <div className="form-group center-1">
               
                       <label><i className="fa-solid fa-envelope clr"></i>&nbsp;&nbsp;Email</label>
                       <input type="email" name='email' value={formik.values.email}  onChange={formik.handleChange}  placeholder="Jennywilson@gmail.com" className="field-11" />
                       {formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}  
                       
                    
            </div>
            <div className="regi-btn">
                <button type='submit' className="about-btn-1">Continue</button>
              </div>
              </form>

    </div>
    <Footer />
    
    </>
  )
}

export default Forgetpassword