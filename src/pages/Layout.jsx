// import React from 'react'

import CustomNavbar from "../components/Common/CustomNavbar"
import Footer from "../components/Common/Footer"
import ShareSidebar from "../components/Common/ShareSidebar"

// eslint-disable-next-line react/prop-types
function Layout({children}) {
  return (
    <>
        <CustomNavbar/>
        <div className='mt-5 pt-10 mb-8'>
            <ShareSidebar/>
            {children}

        </div>

        <Footer/>
    </>
  )
}

export default Layout