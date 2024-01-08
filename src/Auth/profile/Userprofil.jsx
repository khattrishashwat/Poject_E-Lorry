import React, { useEffect, useState } from 'react'
import Leftmenu from './Leftmenu'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Userprofil() {
    const [itemupdate, setitmeupdata] = useState([])
    const intialvalue = {
        name: itemupdate.name,
        email: itemupdate.email,
    }
    const validation = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email('Invalid email').required('Required'),

    })
    const token = localStorage.getItem('authtoken')
    const headers =
    {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `Bearer ${token}`,
    }
    useEffect(() => {
        dataprofile()
        document.title = 'Profile Page';
    }, [])

    const dataprofile = async () => {
        try {
            const resp = await axios.get("/view-profile", { headers: headers })
            // console.log("update responce",resp.data.data)
            setitmeupdata(resp.data.data)
        }
        catch (errors) {
            console.log(errors)
        }

    }

    const submitdata = async (value, { resetForm }) => {
        // console.warn('formik button is working',value)
        try {
            const items = value;
            const item = JSON.stringify(items)
            const resp = await axios.post("/update-profile", `${item}`, { headers: headers })
            // console.log("update responce",resp.data.data)
            toast(resp.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            })

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

        }
        resetForm();
    }

    const formik = useFormik({
        initialValues: intialvalue,
        onSubmit: submitdata,
        validationSchema: validation,
        enableReinitialize: true,
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
                                        <h2>Profile</h2>

                                    </div>
                                    <div className="detail-grid-1">
                                        <div className="details-flex-2">

                                            <div className="form-group">
                                                <label className="lab">Full Name</label>
                                                <input type="text"
                                                    className="detail-btn"
                                                    name='name'
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                />
                                                {formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}

                                            </div>

                                            <div className="form-group">
                                                <label className="lab">Email</label>
                                                <input type="text"
                                                    className="detail-btn t-1"
                                                    name='email'
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                />
                                                {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}

                                            </div>


                                        </div>

                                        <div className="box-center-pro">
                                            <button type='submit'>Update</button>
                                        </div>

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

export default Userprofil