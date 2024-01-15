import React,{useState} from 'react'
import Footer from '../../Footer/footer'
// import './login.css'
import { Link,useNavigate } from 'react-router-dom'
import Sidetoggle from '../../sidetoggle/sidetoggle'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

     const[islogin, setlogin] =useState(true)
     const [disabledSubmit, setDisabledSubmit] = useState(false)

     const navigation=useNavigate()

     const initialize={
      name :'',
      email:'',
      password: '',
      confirmPassword:'',
      vehicle:false,

     }

     const headers={
      "Content-Type":"application/json",
      "Accept":"application/json",
    }


     const formsubmit= async(values) =>
     {
      try
      {
        const items=values;
        const item=JSON.stringify(items)
        // console.warn("item @!@@",items)
      
        const respons= await axios.post("/signup",`${item}`,
        { headers: headers }
        );
        
        // localStorage.setItem("authtoken",JSON.stringify(respons.data.token))
         console.warn('register####',respons)
        toast(respons.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // type: 'error'
      })
      setlogin(true)
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
     
     const validate = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
        vehicle: Yup.boolean()
        .oneOf([true], 'You must agree to the terms and conditions')
        .required('You must agree to the terms and conditions'),
     
     });


     const formik = useFormik({
      initialValues:initialize,
      onSubmit:formsubmit,
      validationSchema:validate,

     })


// login formik  section start



const initialvalue={
  email:'',
  password:''
}


const validation=Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required'),

})


const submitlog = async(values) =>
{
  
  const headers={
    "Content-Type":"application/json",
    "Accept":"application/json",
  }
  try
  {
    setDisabledSubmit(true)
    const itemlog=values
    const itemslog=JSON.stringify(itemlog)
    const resp= await axios.post("/signin",`${itemslog}`, { headers: headers } )
    const tokenele=resp.data.data.token
    // console.warn("token login ###", tokenele )
    localStorage.setItem("authtoken", resp.data.data.token)
    

    console.warn("login @#@", resp)
    toast(resp.data.message, {
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
    navigation('/',{state : tokenele} )
   }, 2000);
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
  setDisabledSubmit(false)
  }
}

     const formiklogin = useFormik({
      initialValues:initialvalue,
      onSubmit:submitlog,
      validationSchema:validation,

     })



  return (
    <>
    {/* <Helmet>Login</Helmet> */}
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
      {islogin ? (
        <div className="small-container">
          <div className="register-fle">
            <div className="register-box">
              <h3>Login</h3>
              <p class="log-para">Only eLorry Authorised Personnel are allowed to access this section.</p>
              <form className='logs-1' onSubmit={formiklogin.handleSubmit}>
               <div className="logs-1"> 
                <label className="labes">
                  <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;Email Address</label>
                  <input name='email' value={formiklogin.values.email} onChange={formiklogin.handleChange} onBlur={formiklogin.handleBlur} type="text"  placeholder="Enter Email"   className="field-11"   />
                  {formiklogin.touched.email && formiklogin.errors.email ? <div className='text-danger' style={{marginLeft:"2rem"}}>{formiklogin.errors.email}</div> : null}  
              </div> 


              <div className="logs-1"> 
                <label className="labes">  <i className="fa-solid fa-lock"></i>&nbsp;&nbsp;Password</label>
                <input name='password' value={formiklogin.values.password} onChange={formiklogin.handleChange} type="password"  placeholder="Enter Password"  className="field-11"  />
              
              {formiklogin.touched.password && formiklogin.errors.password ? <div className='text-danger' style={{marginLeft:"2rem"}}>{formiklogin.errors.password}</div> : null}      
              </div>


              {/* <div className="forg">  <Link to='/auth/forget'>Forgot Password ?</Link></div> */}
              <div className="regi-btn">
                <button type='submit' disabled={disabledSubmit} className="about-btn-1">
                {
                          disabledSubmit ? (
                            <div>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              <span className="sr-only"></span>  Logging In
                            </div>
                          ) : 'Login'
                        }
                  </button>
              </div>
              </form>
              {/* <div className="regis-cent"><span className="regi-1" onClick={() => setlogin(!islogin)}>Register </span>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
            
        <div className="backsground" style={{  backgroundImage: `url(${process.env.PUBLIC_URL + "/image/truck-1201.jpg" })`,  }}  >
            <Sidetoggle />
          <div className="register-fle">
            <div className="register-box">
              <h3>Create Account</h3>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever.
              </p>
              <form onSubmit={formik.handleSubmit}>
              <input name='name' value={formik.values.name} onChange={formik.handleChange} type="text"  placeholder="Enter Name" className="field-1" />
              {formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}              
              <input name='email' value={formik.values.email} onChange={formik.handleChange} type="text"  placeholder="Enter Email"   className="field-1"   />
              {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}             
              <input name='password' value={formik.values.password} onChange={formik.handleChange} type="password"  placeholder="Enter Password"  className="field-1"  />
              {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}             
              <input name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange} type="password" placeholder="Re-Enter Password"   className="field-1"  />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='text-danger'>{formik.errors.confirmPassword}</div> : null}
              <div className="checks">
                <input type="checkbox"  id="vehicle" value={formik.values.vehicle} onChange={formik.handleChange}   />
                <label for="vehicle1">Send me Latest Updates</label>
              {formik.touched.vehicle && formik.errors.vehicle ? <div className='text-danger'>{formik.errors.vehicle}</div> : null}

              </div>
              <div className="regi-btn">
                <button type='submit' className="about-btn">Create Account</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Login