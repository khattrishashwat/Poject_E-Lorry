import React, { useEffect } from 'react'
import Leftmenu from './Leftmenu'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Logout() {

    const navigate=useNavigate();
    // const token=localStorage.getItem('authtoken')
    const logouthandel = () => {
        localStorage.removeItem('authtoken')
        navigate('/')
        // console.log('navigating here');
        window.location.reload();
      } 
      useEffect(()=>{
   document.title = 'Logout Page';

      },[])


      const parameterValue = 'yourParameterValue';
      const backnavi=-1
  return (
    <>
    <div className="checkout-sign">
        <div className="container-2">
          <div className="signin-form">
            <Leftmenu />

            <div className="signin-image new-img">

<div className="signin-page-1">
    <form className="signin-form-page">

        <div className="signin-head">
            <h2>Logout</h2>
        </div>

        <div className="logout-center">
            <div className="logout-box mt-60-1">
                <h6>Are you sure to Logout the account?</h6>
                <p>Your account will be shut off on the temporary basis you can login back.</p>
                {/* <a href=""><i className="fa-solid fa-arrow-right-from-bracket"></i></a> */}
                <div className="logout-btn-flex">
                    {/* <button onClick={logouthandel} className="logout-btn">Yes</button> */}
                    {/* <Link to='/'  className="logout-btn" state={{ parameterValue }}>yes</Link> */}
                    <button  className="logout-btn" onClick={logouthandel}>yes</button>
                    <Link to={backnavi} className="logout-btn">No</Link>
                </div>
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

export default Logout