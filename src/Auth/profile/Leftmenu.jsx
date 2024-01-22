import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Avatar from 'react-avatar';

function Leftmenu() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [choosefile, setchoosefile] = useState(null)
    const [profilepi, setprofilepic] = useState([])
    const [profileupdate, setProfileupdate] = useState([])


    useEffect(() => {
        dataprofile()
    }, [])

    const dataprofile = async () => {
        try {
            const resp = await axios.get("/view-profile", { headers: headers })
            //   console.log("update responce",resp.data.data)
            setProfileupdate(resp.data.data)
        }
        catch (errors) {
            console.log(errors)
        }

    }

    const initialvalue = {
        avator: ''
    }
    const token = localStorage.getItem('authtoken')
    const headers = {
        "Accept": "application/json",
        'Authorization': `Bearer ${token}`,
    }

    const submitimage = async (value) => {
        try {
            const items = value;
            // console.log("ddddddddddddddddddddddd=======>",choosefile)
            // const item=JSON.stringify(items)
            let frm = new FormData();
            frm.append('avator', choosefile)
            const resp = await axios.post("/change-avator", frm, { headers: headers })
            // console.log("responcss+++++",resp.data.data)
            setprofilepic(resp.data.data)
            toast(resp.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            })
            dataprofile()

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


    }

    const fromik = useFormik({
        initialValues: initialvalue,
        onSubmit: submitimage
    })

    return (
        <>
            <div className="signin-page">
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
                <div className="setting">
                    <h3>Account Settings</h3>
                </div>

                <div className="myaccount-information">
                    <Link to='/profileSetting' className="account-box-1">
                        <div className="pro-txt">
                            <h6>Your Profile</h6>
                        </div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                    <Link to="/resetpassword" className="account-box-1">
                        <div className="pro-txt">
                            <h6>Reset Password</h6>
                        </div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                    <Link to='/logout' className="account-box-1">
                        <div className="pro-txt">
                            <h6>Logout</h6>
                        </div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </div>

                <div className="profile-ab" onClick={handleShow}>
                    <div className="image-section-pr">
                        {/* <img src={profileupdate.avator} /> */}

                        { (!profileupdate.avator == "" ) ?
                        ( 
                         <img src={profileupdate.avator} alt='xyz' className="imgprofile" /> 
                        )
                        :
                        <Avatar className="avtorsty-navl" name={profileupdate.name} />
                        }
                        <i className="fa-regular fa-pen-to-square"></i>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose} centered>
                    <form onSubmit={fromik.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Change profile view</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                         
                            <input type="file"  
                       name='avator'
                       onChange={(e) => {
                       fromik.setFieldTouched('avator');
                       fromik.setFieldValue('avator', e.currentTarget.files[0]);
                       setchoosefile(e.currentTarget.files[0])
                     }}
                    className="post-form"
                    />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type='submit' onClick={handleClose}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        </>
    )
}

export default Leftmenu