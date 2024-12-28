import Link from 'next/link'
import React from 'react'

const footerDetails =[
  {name: "Navigation Links", links: [
    {name: "Home", link:"/"},
    {name: "About", link:"/about"},
    {name: "Exams", link:"/exam"},
    {name: "Licensing", link:"/license"},
    {name: "Legal", link:"/legal"},
]},
  {name: "Contacts Details", links: [
    {name: "medaussie@gmail.com", link:"mailto:medaussie@gmail.com"},
    {name: "+234 706 9770 878", link:"/about"},
    {name: "123 West Road", link:"/"},
    {name: "Support", link:"/about"},
]},
  {name: "Social media", links: [
    {name: "Facebook", link:"/"},
    {name: "Twitter", link:"/about"},
    {name: "LinkedIn", link:"/"},
    {name: "Instagram", link:"/about"},
]},
]
const Footer = () => {
  return (
    <div className='text-primary flex flex-col items-center py-2'>
   <div className='flex flex-col md:flex-row gap-8 justify-between w-full p-[5%] '>
    {footerDetails.map(({name, links})=>{
      return(
        <div key={name}>
          <h3>{name}</h3>
          <div className='flex flex-col gap-3'>
          {links.map(({name, link})=>{
            return(
              <Link href={link} key={name}>{name}</Link>
            )
          })}
          </div>
        </div>
      )
    })}
   </div>
    <div>© 2024 Medaussie. All Rights Reserved.</div>
    </div>
  )
}

export default Footer