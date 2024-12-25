"use client"

import React, { useState } from 'react'
import { EditIcon, Trash2Icon} from 'lucide-react'
import { usePathname } from 'next/navigation' 
import Link from 'next/link'
import DeleteConfirmation from '@/components/popup/Delete'
import { postType, userType, listTopType } from '@/common/types/types'
import { instanceOfPostType } from '@/common/hooks/checkType'
import { HandleDelete } from '@/common/hooks/handleDelete'

const List = ({data, top}: {data: postType[] | userType[], top: listTopType[] }) => {
  console.log(data)
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [deleteData, setDeleteData] = useState('')
  const pathName = usePathname()
 
  const clickDelete = (i : string) =>{
  setIsDeletePopupOpen(true)
  setDeleteData(i)
  console.log(i)
}
  return (
 <div className='bg-primary h-full overflow-scroll overflow-x-hidden flex flex-col text-[14px]'>
    <div className=' flex flex-col border-collapse '>
    <section>
      <div className='flex bg-[#dddddd] text-left relative'>
        {top.map((item)=>{
          return ( 
          <div key={item.name} className={`w-[${item.class}] border-slate-400 p-4`}>{item.name}</div>
          )
        })}
        {(pathName.includes("exams") || pathName.includes("license") ) && <Link href={`${pathName}/new`} type='submit' className='py-2 px-4 bg-secondary text-primary font-bold absolute right-4 top-2'>Add</Link>}
      </div>
  {data.map((user, i) => {
    return ( 
      instanceOfPostType(user) ? 
      // for Posts
      <div key={i} className={i % 2 === 0 ? 'flex items-center' : 'flex items-center bg-[#dddddd] '}>
        <div className='w-[5%] p-4 text-ellipsis '>{i + 1}</div>
        <div className='w-[15%] p-4 text-ellipsis overflow-hidden '>{user.title}</div>
        <div className='w-[15%] p-4 text-ellipsis overflow-hidden'>{user.excerpt}</div>
        <div className={top[3].name === "Email" ? 'w-[35%] p-4 text-ellipsis overflow-hidden' : "w-[10%] p-4 text-ellipsis overflow-hidden"}>{user.slug}</div>
        <div className={top[3].name === "Email" ? 'hidden' : "w-[30%] p-4 text-ellipsis overflow-hidden"}>{`${user.body.slice(0, 30)}...`}</div>
        <div className='w-[10%] p-4 text-ellipsis overflow-hidden'>{user.author.firstname}</div>
        <div className= {top[3].name === "Email" ? "w-[15%] pl-6 pr-4 text-center flex justify-between" :'w-[12%] text-center flex justify-between'}>
          <Link href={`${pathName}/${user._id}`}>
          <EditIcon className='hover:cursor-pointer text-green-400'/>
          </Link>
          <Trash2Icon onClick={()=>clickDelete(`post/${user._id}`)} className='hover:cursor-pointer text-red-400'/>
          </div>
      </div> : 
      // for Users
      <div key={i} className={i % 2 === 0 ? 'flex items-center' : 'flex items-center bg-[#dddddd] '}>
      <div className='w-[5%] p-4 text-ellipsis '>{i + 1}</div>
      <div className='w-[15%] p-4 text-ellipsis overflow-hidden '>{user.firstname}</div>
      <div className='w-[15%] p-4 text-ellipsis overflow-hidden'>{user.lastname}</div>
      <div className={top[3].name === "Email" ? 'w-[35%] p-4 text-ellipsis overflow-hidden' : "w-[10%] p-4 text-ellipsis overflow-hidden"}>{user.email}</div>
      <div className='w-[10%] p-4 text-ellipsis overflow-hidden'>{user.role}</div>
      <div className= {top[3].name === "Email" ? "w-[15%] pl-6 pr-4 text-center flex justify-between" :'w-[12%] text-center flex justify-between'}>
        <Link href={`${pathName}/${user._id}`}>
        <EditIcon className='hover:cursor-pointer text-green-400'/>
        </Link>
          <Trash2Icon onClick={()=>clickDelete(`user/${user._id}`)}  className='hover:cursor-pointer text-red-400'/>
        </div>
        </div>
)
})}</section>
</div>
 {isDeletePopupOpen && <DeleteConfirmation isOpen={true} itemData={""} onClose={()=>{setIsDeletePopupOpen(false)}} onDelete={()=> HandleDelete({setIsDeletePopupOpen, deleteData})}/>}
</div>
  )
}

export default List