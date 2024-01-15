import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarcontent from './navbar/navbars'
import Loaderfile from './loader/loader'
const Home = React.lazy(() => import('./Home/home'))
const ComingEvent = React.lazy(() => import('./Event/event'))
const Contact = React.lazy(() => import('./Contact/contact'))
const Gallery = React.lazy(() => import('./Gallery/gallery'))
const Searchpage = React.lazy(() => import('./Search/search'))
const Shopping = React.lazy(() => import('./ZetResource/Shopping'))
const Reportartical = React.lazy(() => import('./ZetResource/reportartical'))
const Globalpractice = React.lazy(() => import('./ZetResource/globalpractice'))
const Zetvehicle = React.lazy(() => import('./ZetResource/zetvehicle'))
const Zetfinancing = React.lazy(() => import('./ZetResource/zetfinancing'))
const Zetpolicy = React.lazy(() => import('./ZetResource/zetpolicy'))
const ZetTechnology = React.lazy(() => import('./ZetResource/zetTechnology'))
const Readabout = React.lazy(() => import('./readaboutus/about'))
const Discussgroup = React.lazy(() => import('./Discussiongroup/discuss'));
const Login = React.lazy(() => import('./Auth/login/login'))
const Forgetpassword = React.lazy(() => import('./Auth/forget/forgetpassword'))
const Verifyotp = React.lazy(() => import('./Auth/verification/verify'))
const Verifypassword = React.lazy(() => import('./Auth/createpassword/Password'))
const Announcement = React.lazy(() => import('./Event/announcement'))
const Newletter = React.lazy(() => import('./Newletter/Letter'))
const Profilepage = React.lazy(() => import('./Auth/profile/profile'))
const Profileaccount = React.lazy(() => import('./Auth/profile/Userprofil'))
const Profilepass = React.lazy(() => import('./Auth/profile/Resetpass'))
const Logoutpage = React.lazy(() => import('./Auth/profile/logout'));
const UpcomingEvent = React.lazy(() => import('./Event/Upcomingevent'))
// import DiscussLogin from './Discussiongroup/discussLogin';
// import Projectitem from './Projectcontent/project'
// import Temp from './temp';



function Allrouter() {
  return (
    <>
      {/* <Router> */}

      <Router basename='/e_lorry/web/'>
        <Navbarcontent />
        {/* <Suspense fallback={<loaderfile />}> */}
        <Suspense fallback={<Loaderfile />}>
          <Routes>
            <Route path="*" element={<h1 h="55vh">Page not found</h1>} />
            <Route path='/' element={<Home />} />
            <Route path='/newEvent' element={<ComingEvent />} />
            <Route path='/annoucement' element={<Announcement />} />
            <Route path="/upcomingEvent" element={<UpcomingEvent />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/forget' element={<Forgetpassword />} />
            <Route path='/auth/verify' element={<Verifyotp />} />
            <Route path='/auth/verify/password' element={<Verifypassword />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/discuss' element={<Discussgroup />} />
            {/* <Route path='/descussLogin' element={<DiscussLogin />} /> */}
            <Route path='/search' element={<Searchpage />} />
            <Route path='/readmore' element={<Readabout />} />
            <Route path='/zet-resource/shopping' element={<Shopping />} />
            <Route path='/zet-resource/reportartical' element={<Reportartical />} />
            <Route path='/zet-resource/globalpractice' element={<Globalpractice />} />
            <Route path='/zet-resource/zetvehical' element={<Zetvehicle />} />
            <Route path='/zet-resource/zetfinance' element={<Zetfinancing />} />
            <Route path='/zetresource/zetpolicy' element={<Zetpolicy />} />
            <Route path='/zet-resource/zettechnology' element={<ZetTechnology />} />
            <Route path='/newletter' element={<Newletter />} />
            <Route path='/profileSetting' element={<Profilepage />} />
            <Route path='/profileaccount' element={<Profileaccount />} />
            <Route path='/resetpassword' element={<Profilepass />} />
            {/* <Route path='/teamppage' element={<Temp />} /> */}
            <Route path='/logout' element={<Logoutpage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default Allrouter