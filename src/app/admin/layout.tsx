'use client'
import React, {Suspense, useEffect} from 'react'
import SideBar from './_components/SideBar'
import TopBar from './_components/TopBar'
import { callApi } from '@zayne-labs/callapi'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/components/context/UserContext'
import Loading from '../loading'
import { userType } from '@/common/types/types'
import Navbar from '../(Homepage)/_components/Navbar'
const AdminDashboardLayout = ({children}: {children: React.ReactNode}) => {
  const {setUser} = UserContext()
  const router = useRouter()
    // Fetch user data when component mounts
    useEffect(() => {
      const getUser = async() =>{
        await callApi<{message: string, data: userType}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ? `http://localhost:5000/api/v1/auth/session` : `https://medaussie-backend.onrender.com/api/v1/auth/session`, {
          credentials:"include",
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
    }, [router, setUser])

  return (
    <div className='relative'>
        <div className='flex h-screen'>
        <div className='w-[20%] '>
        <SideBar/>
        </div>
        <div className='w-full '>
        <Navbar/>
          <TopBar/>
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </div>
        </div>
    </div>
  )
}

export default AdminDashboardLayout