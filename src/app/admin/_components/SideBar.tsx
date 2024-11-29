import React from 'react'
import Link from 'next/link'
import UserIcon from '../../../../components/icons/user'
import BookIcon from '../../../../components/icons/book'
import LicenseIcon from '../../../../components/icons/license'

const navLinks = [
    {name: "User", link:"/users", icon: <UserIcon/>},
    {name: "Exams", link:"/exams", icon: <BookIcon/>},
    {name: "License", link:"/licenses",  icon: <LicenseIcon/>},
    {name: "Licensing", link:"/license"},
    {name: "Resources", link:"/resources"},
]
const SideBar = () => {
  return (
    <div className='flex flex-col bg-secondary text-primary h-full p-5'>
         <Link href="/admin">
          <h3 className="font-bold text-left flex gap-2">Admin <p>Medaussie</p></h3>
        </Link>
        {navLinks.map(({name, link, icon})=>{
            return(
                <div  key={name} className='flex flex-col py-5'>
                <Link href={`/admin${link}`} className='flex gap-5 items-center'>
                    {icon}<p className='font-bold text-left'>{name}</p>
                </Link>
                <div className='w-full h-[1px] bg-primary'></div>
                </div>
            )
        })}
    </div>
  )
}

export default SideBar