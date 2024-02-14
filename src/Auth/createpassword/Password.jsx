import React,{useState,useEffect} from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import "../forgetpass.css";
import Footer from "../../Footer/footer";
import {useFormik} from 'formik'
import * as Yup from 'yup' 
import axios from "axios";
import {toast} from 'react-toastify'
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';  

function Password() {
  const[passwordhide,setPasswordhide] = useState(true)
  const[conpasswordhide,setConPasswordhide] = useState(true)

  const location=useLocation()
  const navigate=useNavigate()

     const initial={
      password:'',
      confirmPassword:''
     }

     const onsubmit = async (values) =>
     {
      //alert(JSON.stringify(values,null,2))
      const itempassword=values
      const itemspassword=JSON.stringify(itempassword)

      const headers={
        "Content-Type":"application/json",
        "Accept":"application/json",
      }
      try
      {
        const resp= await axios.post('/reset-password', `${itemspassword}`,
        {headers:headers})
         toast(resp.data.message, {
           position: "top-right",
           autoClose: 2000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           type: 'success'
         });
        // setTimeout(() => {
          // history.push('/new-page');
          // navigate('/auth/verify', { state: itempass } )
        // }, 2000);

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
        });
      
      }
     }

     const validation=Yup.object().shape({
      password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
     })

    const formik=useFormik({
      initialValues:initial,
      onSubmit:onsubmit,
      validationSchema: validation,

    })
    // console.log(" !!!!!!!",location.state)
   
     useEffect(()=>{
       if(!location.state)
       {
          navigate("/auth/forget")
       }
     },[])



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
      <div className="verify-box pd-1">
        <h2>Create New Password</h2>
        <p>Lorem Ipsum has been the industry's standard dummy text ever.</p>
        <form onSubmit={formik.handleSubmit}>
        <div className="form-group pos">
          <label>
            <i className="fa-solid fa-lock clr"></i>&nbsp;&nbsp;Create New
            Password
          </label>
          <input
            type={passwordhide ? "password" : "text"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter New Password"
            className="field-12"
          />


          <i className={passwordhide ? "far fa-eye-slash iei" : "far fa-regular fa-eye iei"} onClick={()=>setPasswordhide(!passwordhide)}></i>
          {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}             

        </div>

        <div className="form-group pos mt-110">
          <label>
            <i className="fa-solid fa-lock clr"></i>&nbsp;&nbsp;Confirm Password
          </label>
          <input
            type={conpasswordhide ? "password" : "text"}
            name='confirmPassword'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="Enter New Password"
            className="field-12"
          />
          <i className={conpasswordhide ? "far fa-eye-slash iei" : "far fa-regular fa-eye iei"} onClick={()=>setConPasswordhide(!conpasswordhide)} ></i>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='text-danger'>{formik.errors.confirmPassword}</div> : null}

        </div>

        <div className="regi-btn">
          <button type="submit" className="about-btn-1">
            Continue
          </button>
        </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Password;
