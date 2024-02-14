import React, { useState,useEffect } from "react";
// import "./resource.css";
import Footer from "../Footer/footer";
import Toggleside from '../sidetoggle/sidetoggle'
import axios from "axios";
import { Link } from "react-router-dom";

function Zetvehicle() {
  const [feature, setfeature] = useState(true);
  const [vehicleData, setVehicledata] =useState([])

  useEffect(()=>{
    vehicleItem()
   document.title = 'Vehicle Page';

  },[])

  const headers={
    "Content-Type":"application/json",
    "Accept":"application/json",
  }

  const vehicleItem=async() =>
  {
    // console.warn("vehicle api data")
    const resp= await axios.get("vehicle-models", {headers:headers})
    // console.warn('$%$%$%',resp.data.data)
    setVehicledata(resp.data.data)
  }

  // const specificationhandle = () => {
  //   setfeature(true);
  // };

  // const featureshandle = () => {
  //   setfeature(false);
  // };

  return (
    <>
      <Toggleside />
      <div className="innerhead">
        <div className="container mt-104">

          <h2 className="innerhead-title">Zet Vehicle Models</h2>
          


        </div>
      </div>


      <div className="small-container">
        {vehicleData.map((value,index)=>(
        <div className="model-main-grid" key={index}>
          
          <div className={index % 2 === 0 ? 'model-grid-1' : 'model-grid-1hidden'}>
            <h3 className="conts">{value.model_name}</h3>
            <img src={value.image} className="byd-img" />
          </div>



          <div className="model-grid-2">


            <div className="under-flex-112">
              <h3>Battery</h3>
              <h2 style={{ marginLeft: '22px' }} >{value.battery}</h2>
            </div>
            <span className="line-114"></span>

            <div className="under-flex-112">
              <h3>Range</h3>
              <h2 style={{ marginLeft: '22px' }}>{value.vehicle_range}</h2>
            </div>
            <span className="line-114"></span>

            <div className="under-flex-112">
              <h3>GVW</h3>
              <h2 style={{ marginLeft: '20px' }}>{value.gvw}</h2>
            </div>
            <span className="line-114"></span>

            <div className="under-flex-112">
              <h3>Payload</h3>
              <h2 style={{ marginLeft: '20px' }}>{value.payload}</h2>
            </div>
            <span className="line-114"></span>

            <div className="under-flex-112">
              <h3>Charging</h3>
              <h2 style={{ marginLeft: '20px' }}>{value.charging}</h2>
            </div>
            <span className="line-114"></span>

            <div className="under-flex-112">
              <h3>Power</h3>
              <h2 style={{ marginLeft: '20px' }}>{value.power}</h2>
            </div>
            <span className="line-114"></span>

          </div>
          
          <div className={index % 2 === 0 ? 'model-grid-1hidden' : 'model-grid-1'}>
            <h3 className="conts">{value.model_name}</h3>
            <img src={value.image} className="byd-img" />
          </div>
        </div>
        ))}


                  <div className='mt-5'> 
                    <p> To add any content, please contact us <Link to='/contact'>here</Link></p>
                   </div>
      </div>
      {/* </div> */}


      <Footer />
    </>
  );
}

export default Zetvehicle;
