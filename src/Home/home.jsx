import React, { useEffect } from 'react'
// import Navup from '../navupperbar/navupper'
// import Navbarcontent from '../navbar/navbars'
import Slideritem from '../SliderContent/sliders'
import Aboutus from '../aboutus/about'
import Featureitem from '../feature/featurestack'
// import Navup from '../navupperbar/navupper'
import Testmonial from '../ClientTestmonial/testmonial'
import Zetmarket from '../Statistics/zetmarket';
import Partner from '../partnersection/partner'
import Footer from '../Footer/footer';
import Toggleside from '../sidetoggle/sidetoggle'
import Subscribpath from '../subscribsarea/subscribsection'
import Newlorry from '../newLorry/lorrydecsricstion'

function Home() {


  useEffect(()=>{
    document.title = 'Home Page';
  },[])
  

  return (
    <>
    {/* <Navup />
     <Navbarcontent /> */}
     <Toggleside />
     <Slideritem />
     <Aboutus />
     <Featureitem />
     <Testmonial />
     <Zetmarket />
     <Subscribpath />
     <Newlorry />
     <Partner />
     <Footer />
    
    
    </>
  )
}

export default Home