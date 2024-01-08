import React,{useEffect} from "react";
import Footer from "../Footer/footer";
// import "./contact.css";
import Toggleside from "../sidetoggle/sidetoggle";
import { useFormik } from 'formik'
import axios from "axios";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import Swal from "sweetalert2";

function Contact() {

  useEffect(()=>{
    document.title = 'Contact Page';
  },[])


  const initails = {
    name: '',
    phone: '',
    email: '',
    partner: '',
    comment: '',
  }

  const validate = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    partner: Yup.string()
      .required('You must select option'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Invalid phone number')
      .required('Phone number is required'),
    comment: Yup.string().min(5, 'Too Short!').max(100, 'Too Long').required('Required'),

  });


  const submitform = async (values, { resetForm }) => {
    // alert(JSON.stringify(values,null,2))
    const itemcon = values
    const itemscon = JSON.stringify(itemcon)
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
    try {
      const resp = await axios.post("/contact-us", `${itemscon}`,
        { headers: headers })

      console.warn("api $$$$$", resp)
      toast(resp.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // type: 'error'
      })
      setTimeout(() => {
        Swal.fire({
          title: 'Thanks for taking your valuable time!',
          showConfirmButton: false, // Hide the confirm button
          timer: 3000,
        })
      }, 2000);


    }
    catch (errors) {
      console.warn("contact ####", errors.response.data.message)
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
    resetForm();
  }

  const formik = useFormik({
    initialValues: initails,
    onSubmit: submitform,
    validationSchema: validate,

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
      <Toggleside />

      <div className="innerhead">
        <div className="container mt-104">
          <h2 className="innerhead-title"> Contact US </h2>
        </div>
      </div>

      <div className="Contact-us-form">
        <div className="Contact-us-grid">
          <div className="Address-part">
            <div className="address-Part-1">
              <div className="address-content">
                <h4>Get in Touch</h4>

                <span className="">Feel Free to Ask</span>
              </div>

              <div className="address-part">
                {/* <!-- <div className="Email-text">
              <span><strong>Email:</strong></span>
              <p><a href="#">Info E-lorry@gmail.com</a></p>

            </div> --> */}

                <div className="Email-text">
                  <span>
                    <strong>Phone:</strong>
                  </span>
                  <span>01234556789</span>
                  <span>01234556789</span>
                </div>

                <div className="Email-text">
                  <span>
                    <strong>Address:</strong>
                  </span>
                  <span>Abcd-Town, New Delhi, India.</span>
                </div>

                <div className="icons-2-main Social-Icons">
                  <a href="" className="profile-11 Icon-Shape">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                  <a href="" className="profile-11 Icon-Shape">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="" className="profile-11 Icon-Shape">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="" className="profile-11 Icon-Shape">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="Contact-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-data">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Your name"
                />
                {formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}

              </div>

              <div className="form-data">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  placeholder="Phone number"
                />
                {formik.touched.phone && formik.errors.phone ? <div className='text-danger'>{formik.errors.phone}</div> : null}

              </div>

              <div className="form-data">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Your email"
                />
                {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}

              </div>

              <div className="form-data">
                <select name="partner" id="" value={formik.values.partner} onChange={formik.handleChange}>
                  <option value="" selected disabled>
                    Any Partnership
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {formik.touched.partner && formik.errors.partner ? <div className='text-danger'>{formik.errors.partner}</div> : null}

              </div>

              <div className="form-data">
                <textarea name="comment" value={formik.values.comment} onChange={formik.handleChange} placeholder="Type your message here...">
                  Type your message here...
                </textarea>
                {formik.touched.comment && formik.errors.comment ? <div className='text-danger'>{formik.errors.comment}</div> : null}

              </div>

              <button type='submit' className="about-btn">
                Submit &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
