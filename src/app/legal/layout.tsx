import React from 'react'
import Footer from '../(Homepage)/_components/Footer'
import Mobilenav from '../(Homepage)/_components/Mobilenav'
import Navbar from '../(Homepage)/_components/Navbar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='relative'>
    <div className='w-full fixed top-0 left-0 z-40'>
    <Mobilenav/>
    <Navbar/>
    </div>
       {children}
        <Footer/>
    </div>
  )
}

export default layout