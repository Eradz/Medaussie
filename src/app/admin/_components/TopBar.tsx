import React from 'react'
import { Search } from 'lucide-react'

const TopBar = () => {
  return (
        <div className='bg-primary flex justify-center items-center p-4 shadow-md relative'>
        <div className='flex items-center rounded-md  relative'>
        <input type="text" name='Search' placeholder="Search here" className='pl-9 pr-3 py-2 focus:outline-none shadow-md rounded-md ' />
        <Search className='absolute left-2 text-slate-400 hover:cursor-pointer'/>
        </div>
        <div className='bg-secondary w-9 h-9 rounded-full absolute right-7'></div>
        </div>
  )
}

export default TopBar