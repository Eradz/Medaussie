"use client"
import React, {useEffect, useState} from 'react'
import List from '../_components/list/List'
import { callApi } from '@zayne-labs/callapi'
import { toast } from 'sonner'
// import { UserContext } from '@/components/context/UserContext'

// const users :{_id:string, firstname: string, lastname: string, email: string, role: string}[] = [
//     {_id: "2", firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
//     {_id: "2", firstname: 'Chidiebereeeeeeee', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
//     {_id: "2", firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
//     {_id: "2", firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
//     {_id: "2", firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
//     {_id: "2", firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
//     {_id: "2", firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
//     {_id: "2", firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
//     {_id: "2", firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
//     {_id: "2", firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
//     {_id: "2", firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
//     {_id: "2", firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
//     {_id: "2", firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
//     {_id: "2", firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
//     {_id: "2", firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
//     {_id: "2", firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
// ]
const Page = () => {
  const [users, setUsers] = useState<{ firstname: string, lastname: string, email: string, role: string, _id:string,}[]>([])
  useEffect(() => {
    const getUsers = async() =>{
      
      await callApi<{message: string, data:{
        firstname: string,
        lastname: string,
        email: string,
        role: string,
        _id: string,
      }[]}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?'http://localhost:5000/api/v1/user' : "https://medaussie-backend.onrender.com/api/v1/user", {
        credentials: "include",
        dedupeStrategy: "none",
        onSuccess:({ data }) => {
          toast.success(data.message)
          setUsers(data.data);
        },
        onError:({ error }) => {
          toast.error(error.message)
        }
      });
    }
    getUsers()
  }, [])
  
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