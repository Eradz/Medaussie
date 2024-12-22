'use client'
import React, {useEffect} from 'react'
import SideBar from './_components/SideBar'
import TopBar from './_components/TopBar'
import { callApi } from '@zayne-labs/callapi'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/components/context/UserContext'
const AdminDashboardLayout = ({children}: {children: React.ReactNode}) => {
  const {setUser} = UserContext()
  const router = useRouter()
    // Fetch user data when component mounts
    useEffect(() => {
      const getUser = async() =>{
        await callApi<{message: string, data: { 
          _id: string;
          firstname: string;
          lastname: string;
          email: string;
          role: string;
            }}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?'/api/v1/user' : "https://medaussie-backend.onrender.com/api/v1/user", {
          credentials: "include",
          dedupeStrategy: "none",
          onSuccess:({ data }) => {
            setUser(data.data)
          },
          onError: ({ error }) => {
            toast.error(error.message)
            router.push('/login')
          },
        });
      }
      getUser()
    }, [])

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

export default AdminDashboardLayout