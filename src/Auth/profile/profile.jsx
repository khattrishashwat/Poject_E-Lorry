import React from 'react'
import Leftmenu from './Leftmenu'
import { Link } from 'react-router-dom'

function profile() {
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
                                                <label className="lab">Full Name</label>
                                                <h4 className='forn-hh'>name</h4>
                                                {/* <input type="text"
                                                    className="detail-btn"
                                                    name='name'
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                />
                                               {formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null} */} 

                                            </div>

                                            <div className="form-groupdata">
                                                <label className="lab">Email</label>
                                                <h4 className='forn-hh'>Email</h4>
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
                                            <Link to='/profileaccount'>edit</Link>
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

export default profile