import React from 'react'
import Page from './page'
import Footer from '../(Homepage)/_components/Footer'
import Navbar from '../(Homepage)/_components/Navbar'
import Mobilenav from '../(Homepage)/_components/Mobilenav'

const layout = () => {
  return (
    <div className='relative'>
        <div className='w-full fixed top-0 left-0 z-40'>
        <Mobilenav/>
        <Navbar/>
        </div>
        <Page/>
        <Footer/>
    </div>
  )
}

export default layout