import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import axios from "axios";

function Sidetoggle() {
  const [toggle, setToggle] = useState(false);

  const initi=
  {
    email:'',
  }
  const submitemail=async(value,{resetForm})=>
  {
    // console.warn(value)
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


    resetForm();
  }
  const validation= yup.object().shape({
    email:yup.string().email('Invalid email').required('required')
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
        <div className="toggle" onClick={() => setToggle(!toggle)}> <img src={`${process.env.REACT_APP_IMAGE_MODE}images/newsletter-1.png`}   style={{ marginTop: '0px' }} alt="toggle21"/></div>
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
              {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}  

                <input type="submit"/>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidetoggle;
