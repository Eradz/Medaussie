"use client"

import React from 'react'
import { EditIcon, Trash2Icon} from 'lucide-react'
import { usePathname } from 'next/navigation' 
import Link from 'next/link'

type dataType = {title: string, excerpt: string, slug: string, author: string, body: string}[]
type userType = {firstname: string, lastname: string, email: string, role: string}[]
type topType = {class: string, name: string}[]

const List = ({data, top}: {data: dataType | userType, top: topType }) => {

  const pathName = usePathname()
  return (

 <div className='bg-primary h-full overflow-scroll overflow-x-hidden flex flex-col text-[14px]'>
    <table className=' flex flex-col border-collapse '>
    <tbody>
      <tr className='flex bg-[#dddddd] text-left'>
        {top.map((item)=>{
          return ( 
          <th key={item.name} className={`w-[${item.class}] border-slate-400 p-4`}>{item.name}</th>
          )
        })}
      </tr>
  {data.map((user, i) => {
    return ( 
      <tr key={i} className={i % 2 === 0 ? 'flex items-center' : 'flex items-center bg-[#dddddd] '}>
        <td className='w-[5%] p-4 text-ellipsis '>{i + 1}</td>
        <td className='w-[15%] p-4 text-ellipsis overflow-hidden '>{Object.values(user)[0]}</td>
        <td className='w-[15%] p-4 text-ellipsis overflow-hidden'>{Object.values(user)[1]}</td>
        <td className={top[3].name === "Email" ? 'w-[35%] p-4 text-ellipsis overflow-hidden' : "w-[10%] p-4 text-ellipsis overflow-hidden"}>{Object.values(user)[2]}</td>
        <td className={top[3].name === "Email" ? 'hidden' : "w-[30%] p-4 text-ellipsis overflow-hidden"}>{Object.values(user)[3]}</td>
        <td className='w-[10%] p-4 text-ellipsis'>{top[3].name === "Email" ?Object.values(user)[3]: Object.values(user)[4]}</td>
        <td className= {top[3].name === "Email" ? "w-[15%] pl-6 pr-4 text-center flex justify-between" :'w-[12%] text-center flex justify-between'}>
          <Link href={top[3].name === "Email" ? `${pathName}/${Object.values(user)[3]}`:`${pathName}/${Object.values(user)[2]}`}>
          <EditIcon className='hover:cursor-pointer text-green-400'/>
          </Link>
          <Trash2Icon className='hover:cursor-pointer text-red-400'/>
          </td>
      </tr>
)
})}</tbody></table></div>
  )
}

export default List