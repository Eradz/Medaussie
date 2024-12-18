import React from 'react'
import SideBar from './_components/SideBar'
import TopBar from './_components/TopBar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='relative'>
        <div className='flex h-screen'>
        <div className='w-[20%] '>
        <SideBar/>
        </div>
        <div className='w-full '>
          <TopBar/>
       {children}
        </div>
        </div>
    </div>
  )
}

export default layout