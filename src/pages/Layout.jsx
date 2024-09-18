// import React from 'react'

import CustomNavbar from "../components/Common/CustomNavbar"
import ShareSidebar from "../components/Common/ShareSidebar"

function Layout({children}) {
  return (
    <>
        <CustomNavbar/>
        <div className='mt-5 pt-10 mb-8'>
            <ShareSidebar/>
            {children}

        </div>
    </>
  )
}

export default Layout