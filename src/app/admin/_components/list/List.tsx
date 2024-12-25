"use client"

import React, { useState } from 'react'
import { EditIcon, Trash2Icon} from 'lucide-react'
import { usePathname } from 'next/navigation' 
import Link from 'next/link'
import DeleteConfirmation from '@/components/popup/Delete'
import { callApi } from '@zayne-labs/callapi'
import { toast } from 'sonner'

type dataArrayType = {
  _id: string,
  title: string,
  type: string,
  excerpt: string,
  slug: string,
  author: {
    _id: string,
    firstname: string,
  },
  body: string
}[]
type dataType = {
  _id: string,
  title: string,
  type: string,
  excerpt: string,
  slug: string,
  author: {
    _id: string,
    firstname: string,
  },
  body: string
}
type userType = {_id:string, firstname: string, lastname: string, email: string, role: string}[]
type topType = {class: string, name: string}[]

const List = ({data, top}: {data: dataArrayType | userType, top: topType }) => {
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [deleteData, setDeleteData] = useState('')
  const pathName = usePathname()
  function instanceOfDataType(object: unknown): object is dataType {
    const data = object as Record<keyof dataType, unknown>;
  return (
    typeof data._id === 'string' &&
    typeof data.title === 'string' &&
    typeof data.excerpt === 'string' &&
    typeof data.type === 'string' &&
    typeof data.slug === 'string' &&
    typeof data.author === 'object' &&
    typeof data.body === 'string'
  );
}

const handleDelete = async() =>{
  setIsDeletePopupOpen(false)
  await callApi<{message: string}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?`http://localhost:5000/api/v1/${deleteData}` : `https://medaussie-backend.onrender.com/api/v1/${deleteData}`, {
    method: 'DELETE',
    credentials: "include",
    dedupeStrategy: "none",
    onSuccess:({ data }) => {
      toast.success(data.message)
    },
    onError:({ error }) => {
      if(error.message === "Access token is required"){
        toast.error(error.message)
       window.location.assign(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?`http://localhost:3000/login` : `https://medaussie.vercel.app/login`)
       return
      }
      toast.error(error.message)
    }
  });
}
const clickDelete = (i : string) =>{
  setIsDeletePopupOpen(true)
  setDeleteData(i)
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
      instanceOfDataType(user) ? 
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
 {isDeletePopupOpen && <DeleteConfirmation isOpen={true} itemData={"Post"} onClose={()=>{setIsDeletePopupOpen(false)}} onDelete={()=> handleDelete()}/>}
</div>
  )
}

export default List