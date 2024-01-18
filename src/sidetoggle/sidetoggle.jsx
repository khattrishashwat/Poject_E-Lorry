import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import axios from "axios";

function Sidetoggle() {
  const [toggle, setToggle] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(false)

  const initi=
  {
    email:'',
  }
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const submitemail=async(value,{resetForm})=>
  {
    setDisabledSubmit(true)
    // console.warn(value)
    const itemlog = value
    const itemslog = JSON.stringify(itemlog)
    console.warn("Email : ",itemslog)
    
//     if (!emailRegex.test(value.email)) {
                
//       toast("Entered email is invalid", {
//        position: "top-right",
//        autoClose: 2000,
//        hideProgressBar: false,
//        closeOnClick: true,
//        pauseOnHover: true,
//        draggable: true,
//        progress: undefined,
//        type: 'error'
//      })
//      setDisabledSubmit(false)
//       return;
// }
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
    }


    resetForm();
  }
  const validation= yup.object().shape({
    email:yup.string().email('please enter valid email').required('Please enter email')
  })

  const formik = useFormik(
    {
      initialValues:initi,
      onSubmit:submitemail,
      validationSchema:validation,
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
      <div className={`sidebar-contact ${toggle ? "active" : ""}`}>
        <div className="toggle" onClick={() => setToggle(!toggle)}> <img src='/e_lorry/web/images/newsletter-1.png'  style={{ marginTop: '0px' }} alt="toggle21"/></div>
        {toggle && (
          <div>
            <h2>Join Our Newsletter</h2>
            <p>
              Subscribe to our newsletter to receive the latest news and
              exclusive offers every week.
            </p>

            <div className="scroll">
              <form onSubmit={formik.handleSubmit} className="nots">
                <input type="text" name="email"
                value={formik.values.email}
                onChange={formik.handleChange} 
                placeholder="Enter Your Email" 
                />
              {formik.touched.email && formik.errors.email ? <div className='text-danger text-toggle'>{formik.errors.email}</div> : null}  

                <button type="submit" disabled={disabledSubmit} className="btn-subm" style={{backgroundColor:"#1F39A7" ,borderRadius:"30px",width:"100%",height:"11vh"}}>
                {
                          disabledSubmit ? (
                            <div>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              <span className="sr-only"></span>  Submit
                            </div>
                          ) : 'Submit'
                        }
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidetoggle;
