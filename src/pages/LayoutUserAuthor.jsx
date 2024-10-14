import React from 'react'
import NavbarAuthor from '../components/CommonAuthor/NavbarAuthor'

function LayoutUserAuthor({children}) {
  return (
    <>
        <NavbarAuthor/>
        <div className='pt-2'>
            {children} {/* Ensure this is rendering */}
        </div>
    </>
  )
}

export default LayoutUserAuthor