// import React from 'react'
import FooterShop from '../components/CommonShopBook/FooterShop'
import NavbarShop from '../components/CommonShopBook/NavbarShop'


// eslint-disable-next-line react/prop-types
function LayoutShopBook({children}) {
  return (
    <>
        <NavbarShop/>
        <div className='mt-5 pt-10'>
            {children} {/* Ensure this is rendering */}
        </div>

        <FooterShop/>
    </>
  )
}

export default LayoutShopBook