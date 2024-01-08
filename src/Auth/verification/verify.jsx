import React, { useEffect } from "react";
import "../forgetpass.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function Verify() {
  const navigate = useNavigate();
  const location = useLocation();
  const emailitem = location.state.email;

  const initial = {
    email: emailitem,
    otp: "",
  };

  const onsubmit = async (values) => {
    const itemotp = values;
    const itemsotp = JSON.stringify(values, null, 2);

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    try {
      const responce = await axios.post("/verify-forgot-otp", `${itemsotp}`, {
        headers: headers,
      });

      console.log("responce otp", responce);

      toast(responce.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "success",
      });
      setTimeout(() => {
        // history.push('/new-page');
        // navigate('/auth/verify/password', { state: itemotp } )
      }, 2000);
    } catch (errors) {
      toast(errors.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "error",
      });
    }
  };

  const validations = Yup.object().shape({
    otp: Yup.array()
      .of(Yup.string().length(1, "Each digit must be a single character"))
      .required("OTP is required")
      .length(4, "OTP must be 4 characters long"),
  });

  const formik = useFormik({
    initialValues: initial,
    onSubmit: onsubmit,
    validationSchema: validations,
  });

  //  const handleRefreshClick = () => {
  //   formik()
  //  }

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
        <h2>Forgot your password</h2>
        <p>Lorem Ipsum has been the industry's standard dummy text ever.</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="otpes-flex pd-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <input
                key={index}
                type="text"
                name={`otp[${index}]`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otp[index]}
                placeholder="|"
                className="otp-boxes-1"
              />
            ))}
          </div>

          {/* {formik.errors.otp ? <div className='text-danger'>{formik.errors.otp}</div> : null}   */}

          {formik.touched.otp && formik.errors.otp ? (
            <div>{formik.errors.otp}</div>
          ) : null}

          <div className="regi-btn">
            <button type="submit" className="about-btn-1">
              Continue
            </button>
          </div>
        </form>

        <a href="/" className="send-1">
          <span className="clr-2">Didn't receive code?</span> Resend Code
        </a>
      </div>
    </>
  );
}

export default Verify;
