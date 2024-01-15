import React, { useState } from 'react'
import Leftmenu from './Leftmenu'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

function Profile() {
    const [itemedata,setitmedata]=useState([])


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
            setitmedata(resp.data.data)
        }
        catch (errors) {
            console.log(errors)
        }

    }
  return (
    <>
     <div className ="checkout-sign">
            <div className ="container-2">
                <div className ="signin-form">
               <Leftmenu />
               <div className="signin-image new-img">

                            <div className="signin-page-1">
                                <form className="signin-form-page">

                                    <div className="signin-head">
                                        <h2>Profile</h2>

                                    </div>
                                    <div className="detail-grid-1">
                                        <div className="details-flex-2">

                                            <div className="form-groupdata">
                                                <label className="lab">Full Name :</label>
                                                <h4 className='forn-hh'>{itemedata.name}</h4>
                                                {/* <input type="text"
                                                    className="detail-btn"
                                                    name='name'
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                />
                                               {formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null} */} 

                                            </div>

                                            <div className="form-groupdata">
                                                <label className="lab">Email : </label>
                                                <h4 className='forn-hh'>{itemedata.email}</h4>
                                                {/* <input type="text"
                                                    className="detail-btn t-1"
                                                    name='email'
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                />
                                                {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null} */}

                                            </div>


                                        </div>

                                        <div className="box-center-pro">
                                            <Link to='/profileaccount' className=''>edit</Link>
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

export default Profile