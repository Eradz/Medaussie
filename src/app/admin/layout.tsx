import React from 'react'
import Page from './page'
import Footer from '../(Homepage)/_components/Footer'
import SideBar from './_components/SideBar'

const layout = () => {
  return (
    <div className='relative'>
        <div className='flex h-screen'>
        <div className='w-[30%] '>
        <SideBar/>
        </div>
        <div className='w-full '>
        <Page/>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default layout