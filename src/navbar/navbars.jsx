import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import {IoSearch } from 'react-icons/io5'
// import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from "axios";
// import "./navbar.css";
import Toggleside from '../sidetoggle/sidetoggle'
import Avatar from "react-avatar";



function Navbars() {
  const [sidernav, setsidernav] = useState(true);
  const [isprofile, setProfile] = useState(false)
  const [dropdownew, setDropdownnew] = useState(false);
  const [dropdownzet, setDropdownzet] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname;
  // const { parameterValue } = props.params;
  // const { parameterValue } = props.location.state || {};
  // console.warn("loc",location.state)
  // console.warn("pro",parameterValue)
  // const { avator, setAvator } = profileUpdate();

  const [profileupdate, setProfileupdate] = useState({})

  const token = localStorage.getItem('authtoken')
  const headers = {
    //   "Content-Type":"application/json",
    "Accept": "application/json",
    'Authorization': `Bearer ${token}`,
  }


  const dataprofile = async () => {
    try {
      const resp = await axios.get("/view-profile", { headers: headers })
      console.log(" nav api profile update responce",resp.data.data)
      setProfileupdate(resp.data.data)
    }
    catch (errors) {
      console.log(errors)
    }

  }

  const profileaction = () => {
    const tokens = localStorage.getItem('authtoken')
    // console.warn("@#token", tokens)
    if (!tokens) {
      setProfile(false)
    }
    else {
      setProfile(true)
      dataprofile()
    }
    
  }



  useEffect(() => {
    profileaction()
  }, [location.state])


  // this for logout for profile 


  useEffect(() => {
    if (location.state && location.state.parameterValue == "yourParameterValue") {
      localStorage.removeItem('authtoken')
      profileaction()
    }
  }, [location.state])



  // const logouthandel = () => {
  //   localStorage.removeItem('authtoken')
  //   setProfile(false)
  //   navigate('/')

  // }



  return (
    <>
      <Toggleside />

      <header>
        <nav>
          {sidernav ? (
            <div className="nav-area">
              <div className="logo">
                <Link to="/"> <img src="/e_lorry/web/images/e-Lorry.png" alt="navimg1" /></Link>
              </div>
              <div className="abc">
                <ul>
                  <li><Link to="/">Home</Link></li>

                  <li className="navbar-dropdown">
                    <a href="#" className="one heelo">New at E-Lorry <i className="fa fa-chevron-down" aria-hidden="true"></i></a>

                    <div className="dropdown">
                      <Link to='/annoucement'>News & Announcement</Link>
                      <Link to="/newEvent">Events</Link>
                    </div>
                  </li>

                  <li><Link to="/newletter">Newsletter</Link></li>

                  <li className="navbar-dropdown">
                    <a href="#" className="one heelo">ZET Resources <i className="fa fa-chevron-down" aria-hidden="true"></i></a>
                    <div className="dropdown">
                      <Link to="/zet-resource/reportartical">Reports & Articles</Link>
                      <Link to="/zet-resource/zetvehical">ZET Vehicle Models</Link>
                      <Link to="/zetresource/zetpolicy">ZET Policies</Link>
                      <Link to='/zet-resource/zettechnology'>ZET Technologies</Link>
                    </div>
                  </li>

                  {/* {
                   currentPath.includes('/post/')===false &&( */}
                    
                    <li><Link to="/discuss" className="heelo">ZET Chatroom</Link></li>
                   {/* )

                   } */}
                  <li><Link to="/gallery" className="heelo">Gallery</Link></li>
                  <li><Link to="/contact" className="heelo">Contact</Link></li>


                  {isprofile ?
                    (
                      <li className="navbar-dropdown">
                        { (!profileupdate.avator == "" ) ?
                        ( 
                         <img src={profileupdate.avator} alt='xyz' className="imgprofile" /> 
                        )
                        :
                        (
                        <Avatar className="avtorsty-nav" name={profileupdate.name} />
                        )
                        }
                         
                          {/* <Avatar alt="Remy Sharp" name={profileupdate.name} className="btn-xyzprofile" src={profileupdate.avator} /> */}
                       

                        <div className="dropdown leftings">
                          <Link to='/profileSetting'>My Account</Link>
                          <Link to='/resetpassword'>Change Password</Link>
                          <Link to="/logout">Logout</Link>
                        </div>
                      </li>
                    )
                    :
                    (
                      <Link to="/auth/login" className="log-btn">Login</Link>
                    )
                  }

                </ul>
              </div>








              {/* <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
    
                <a href="index.html">Home</a>
    
                <button className="dropdown-btn-1">New at E-Lorry
                  <i className="fa fa-caret-down"></i>
                </button>
    
                <div className="dropdown-container">
                  <a href="news.html" className="fntes">News & Announcement</a>
                  <a href="whats-new.html" className="fntes">Events</a>
                </div>
    
                <a href="newsletter.html">Newsletter</a>
    
                <button className="dropdown-btn">ZET Resources
                  <i className="fa fa-caret-down"></i>
                </button>
    
                <div className="dropdown-container">
                  <a href="reports-and-articles.html" className="fntes">Report & Articles</a>
                  <a href="vehicle-models.html" className="fntes">ZET Vehicle Models</a>
                  <a href="zet-policy.html" className="fntes">ZET Policies</a>
                  <a href="zet-technologies.html" className="fntes">ZET Technologies</a>
                </div>
    
                <a href="discussion-group-1.html">ZET Chatroom</a>
                <Link to="/gallery">Gallery</Link>
                <a href="contact-us.html">Contact</a>
    
                <div className="account-res-flex">
                  <div className="popup-link">
                    <a href="search.html"><i className="fa fa-search"></i></a>
                  </div>
    
                </div>
    
    
              </div> */}

              {/* <span style={{fontSize:'30px', cursor:'pointer'}} onclick="openNav()" className="side-1">&#9776;</span> */}
              <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => setsidernav(!sidernav)} className="side-1" >&#9776;</span>

            </div>




          ) : (
            <div id="mySidenav" className="sidenav" style={{ width: '350px', paddingRight: '10px' }}>
              {/* <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a> */}
              <span className="closebtn" onClick={() => setsidernav(!sidernav)} >&times;</span>
              <li><Link to="/" onClick={() => setsidernav(!sidernav)} >Home</Link></li>

              <button className="dropdown-btn-1" onClick={() => setDropdownnew(!dropdownew)}>New at E-Lorry
                <i className="fa fa-caret-down"></i>
              </button>

              <div className={dropdownew ? "dropdown" : "dropdown-container"}>
                <Link to='/annoucement' className="fntes" onClick={() => setsidernav(!sidernav)}>News & Announcement</Link>
                <Link to="/newEvent" className="fntes" onClick={() => setsidernav(!sidernav)}>Events</Link>
              </div>


              {/* <DropdownButton id="dropdown-container" title="New at E-lorry" className="dropdown-btn-1" data-bs-theme="dark">
                <Dropdown.Item  className="fntes" as={Link}>Action</Dropdown.Item>
                <Dropdown.Item className="fntes" as={Link}>Another action</Dropdown.Item>
                </DropdownButton> */}

              <Link to="/newletter" onClick={() => setsidernav(!sidernav)} >Newsletter</Link>

              <button className="dropdown-btn" onClick={() => setDropdownzet(!dropdownzet)}>ZET Resources
                <i className="fa fa-caret-down"></i>
              </button>

              <div className={dropdownzet ? 'dropdown' : "dropdown-container"}>
                <Link to="/zet-resource/reportartical" className="fntes" onClick={() => setsidernav(!sidernav)} >Reports & Articles</Link>
                <Link to="/zet-resource/zetvehical" className="fntes" onClick={() => setsidernav(!sidernav)} >ZET Vehicle Models</Link>
                <Link to="/zetresource/zetpolicy" className="fntes" onClick={() => setsidernav(!sidernav)} >ZET Policies</Link>
                <Link to='/zet-resource/zettechnology' className="fntes" onClick={() => setsidernav(!sidernav)} >ZET Technologies</Link>
              </div>

              <Link to="/discuss" onClick={() => setsidernav(!sidernav)}>ZET Chatroom</Link>
              <Link to="/gallery" onClick={() => setsidernav(!sidernav)}>Gallery</Link>
              <Link to="/contact" onClick={() => setsidernav(!sidernav)}>Contact</Link>

              {/* <div className="account-res-flex">
                <div className="popup-link">
                  <Link to="/search" onClick={() => setsidernav(!sidernav)}><i className="fa fa-search"></i></Link>
                </div>
              </div> */}
              {isprofile ?
                (
                  <li className="navbar-dropdown">
                    <img src={profileupdate.avator} alt="zyx" className="imgprofile" />

                    <div className="dropdown leftings">
                      <Link to='/profileSetting' onClick={() => setsidernav(!sidernav)} >My Account</Link>
                      <Link to='/resetpassword' onClick={() => setsidernav(!sidernav)} >Change Password</Link>
                      <Link to="/logout" onClick={() => setsidernav(!sidernav)}>Logout</Link>
                    </div>
                  </li>
                )
                :
                (
                  <Link to="/auth/login" className="log-btn log-respbtn">Login</Link>
                )
              }
            </div>

          )}
        </nav>
      </header>
    </>
  );
}
export default Navbars;
