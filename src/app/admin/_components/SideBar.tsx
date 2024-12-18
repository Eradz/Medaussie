import React from 'react'
import Link from 'next/link'
import { HomeIcon, User2Icon, BookIcon, GraduationCapIcon, MessageCircleMoreIcon } from 'lucide-react'

const navLinks = [
    {name: "Dashboard", link:"/", icon: <HomeIcon/>},
    {name: "User", link:"/users", icon: <User2Icon/>},
    {name: "Exams", link:"/exams", icon: <BookIcon/>},
    {name: "License", link:"/licenses",  icon: <GraduationCapIcon/>},
    {name: "Community", link:"/community", icon: <MessageCircleMoreIcon/>},
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
                <Link href={`/admin${link}`} className='flex gap-5 items-center py-2'>
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