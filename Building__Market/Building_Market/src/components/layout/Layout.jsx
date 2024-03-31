import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/footer'

function Layout({children}) {
  return (
    <div>
        <Navbar />
        <div className='content'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout