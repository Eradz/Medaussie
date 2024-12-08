import React from 'react'
import Footer from '../(Homepage)/_components/Footer'
import SideBar from './_components/SideBar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='relative'>
        <div className='flex h-screen'>
        <div className='w-[30%] '>
        <SideBar/>
        </div>
        <div className='w-full '>
       {children}
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default layout