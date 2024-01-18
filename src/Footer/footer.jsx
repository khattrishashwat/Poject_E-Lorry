import React from 'react'
// import './footer.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function footer() {
  return (
    <>
      {/* <div className="footer">
        <div className="small-container">
          <img src={process.env.PUBLIC_URL + "/image/e-Lorry.png"} />

          <div className="footer-bar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/zet-resource/zetfinance">Zet Resources</Link></li>
              <li><Link to="/newEvent">New at E-Lorry</Link></li>
              <li><Link to="/discuss">ZET Chatroom</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>
          </div>


          <div className="icons-2-main">
          <Link to="#" class="profile-11"><i class="fa-brands fa-youtube"></i></Link>
      
          
          </div>
          <h4>Copyright © 2023 E-Lorry All rights reserved.</h4>
          
        
      </div>
      <Button  variant="contained" className='btn-scroll'  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} type="button"  style={{right: '-459px',borderRadius:'50%'}} > <ArrowUpwardIcon /> </Button> 
        </div> */}


      <div className="footer">
        <div className="small-container">
          <img src='/e_lorry/web/images/e-Lorry.png' alt="foot1"/>

          <div className="footer-bar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to='/zet-resource/reportartical'>Zet Resources</Link></li>
              <li><Link to='/newEvent' >New at E-Lorry</Link></li>
              <li><Link to='/discuss'>ZET Chatroom</Link></li>
              <li><Link to='/gallery'>Gallery</Link></li>
              <li><Link to='/contact'>Contact</Link></li>

            </ul>
          </div>


          <div className="icons-2-main">
            <Link to="https://www.youtube.com/"  target="_blank" className="profile-11"><i className="fa-brands fa-youtube"></i></Link>
          </div>
        </div>
        <h4>Copyright © 2023 E-Lorry All rights reserved.</h4>
      </div>

      <button className="back-to-top ph-1" type="button" onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }} style={{ right: '-459px', borderRadius: '50%' }}></button>



    </>
  )
}

export default footer