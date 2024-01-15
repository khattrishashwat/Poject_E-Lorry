import React, { useEffect, useState } from 'react'
import Leftmenu from './Leftmenu'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Resetpass() {


  const [passdisplay, setPasswordDisplay] = useState(true)
  const [passdisplays, setPasswordDisplays] = useState(true)
  const [passdisplayc, setPasswordDisplayc] = useState(true)
  const [disabledSubmit, setDisabledSubmit] = useState(false)


useEffect(()=>{
  document.title = 'Reset-Password Page';

},[])

  const initalvalue = {
    old_password: '',
    password: '',
    cpassword: '',
  }
  const validation = Yup.object().shape({
    old_password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    cpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  })

  const token = localStorage.getItem('authtoken')
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    'Authorization': `Bearer ${token}`,
  }

  const datasubmit = async (value, { resetForm }) => {
    setDisabledSubmit(true)
    try {
      const items = value;
      const item = JSON.stringify(items)
      const resp = await axios.post("/change-password", `${item}`, { headers: headers })
      // console.log(resp)
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
      setDisabledSubmit(false)
    }
    resetForm();
  }

  const formik = useFormik({
    initialValues: initalvalue,
    onSubmit: datasubmit,
    validationSchema: validation
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
      <div className="checkout-sign">
        <div className="container-2">
          <div className="signin-form">
            <Leftmenu />
            <div className="signin-image new-img">
              <div className="signin-page-1">

                <form onSubmit={formik.handleSubmit} className="signin-form-page">
                  <div className="signin-head">
                    <h2>Change Password</h2>
                  </div>
                  <div className="detail-grid-1">
                    <div className="details-flex-2">
                      <div className="form-group">
                        <label className="lab"><i className="fa-solid fa-lock t-2"></i>&nbsp;&nbsp;Old Password</label>
                        <input type={passdisplay ? 'password' : 'text'}
                          className="detail-btn"
                          name='old_password'
                          value={formik.values.old_password}
                          onChange={formik.handleChange}
                          placeholder='Enter Old Password'
                        />


                        <div className="eye">
                          <i className={passdisplay ? "fa fa-eye-slash" : "fa-regular fa-eye"} onClick={() => setPasswordDisplay(!passdisplay)}></i>
                        </div>
                        {formik.touched.old_password && formik.errors.old_password ? <div className='text-danger'>{formik.errors.old_password}</div> : null}

                      </div>

                      <div className="form-group">
                        <label className="lab"><i className="fa-solid fa-lock t-2"></i>&nbsp;&nbsp;Create New Password</label>
                        <input type={passdisplays ? 'password' : 'text'}
                          className="detail-btn"
                          name='password'
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          placeholder='Enter Password'
                        />

                        <div className="eye">
                          <i className={passdisplays ? "fa fa-eye-slash" : "fa-regular fa-eye"} onClick={() => setPasswordDisplays(!passdisplays)} ></i>
                        </div>
                        {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}

                      </div>

                      <div className="form-group">
                        <label className="lab"><i className="fa-solid fa-lock t-2"></i>&nbsp;&nbsp;Confirm New Password</label>
                        <input type={passdisplayc ? 'password' : 'text'}
                          className="detail-btn"
                          name="cpassword"
                          value={formik.values.cpassword}
                          onChange={formik.handleChange}
                          placeholder='Enter Confirm password'
                        />

                        <div className="eye">
                          <i className={passdisplayc ? "fa fa-eye-slash" : "fa-regular fa-eye"} onClick={() => setPasswordDisplayc(!passdisplayc)} ></i>
                        </div>
                        {formik.touched.cpassword && formik.errors.cpassword ? <div className='text-danger'>{formik.errors.cpassword}</div> : null}

                      </div>

                    </div>

                  </div>

                  <div className="box-center-pro">
                    {/* <button type='submit' >Update Password</button> */}

                    <button type='submit' disabled={disabledSubmit}  >

                       {
                          disabledSubmit ? (
                            <div>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                              <span className="sr-only"></span>  Update Password
                            </div>
                          ) : 'Update Password'
                        }
                        </button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Resetpass