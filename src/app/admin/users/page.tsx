"use client"
import React, {useEffect, useState} from 'react'
import List from '../_components/list/List'
import { callApi } from '@zayne-labs/callapi'
import { toast } from 'sonner'
import Loading from '@/app/loading'
import { userType } from '@/common/types/types'

const Page = () => {
  const [users, setUsers] = useState<{ firstname: string, lastname: string, email: string, role: string, _id:string,}[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    setLoading(true)
    const getUsers = async() =>{
      await callApi<{message: string, data:userType[]}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?'http://localhost:5000/api/v1/user' : "https://medaussie-backend.onrender.com/api/v1/user", {
        credentials: "include",
        dedupeStrategy: "none",
        onSuccess:({ data }) => {
          toast.success(data.message)
          setUsers(data.data);
          setLoading(false)
        },
        onError:({ error }) => {
          toast.error(error.message)
          setLoading(false)
        }
      });
    }
    getUsers()
  }, [])

  if(loading) {
    return <Loading/>
  }
  
  const top = [
    {class: "5%", name: "S/N"},
    {class: "15%", name: "First Name",},
    {class: "15%", name: "Last Name"},
    {class: "35%", name: "Email"},
    {class: "10%", name: "Role"},
    {class: "10%", name: " "}
  ]
  return <List data={users} top= {top}/>
}

export default Page