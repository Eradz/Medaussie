"use client"

import React, {useState} from 'react'
import Link from "next/link"
import GoogleIcon from '../../../components/icons/GoogleIcon';
import EyeHideIcon from '../../../components/icons/EyeHideIcon';
import EyeShowIcon from '../../../components/icons/EyeShowIcon';
import { toast } from 'sonner'
import { callApi } from '@zayne-labs/callapi';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/components/context/UserContext'

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { user, setUser } = UserContext()
    const details = [
        {type: "email", name: "Email", placeholder: "Enter your Email", value: email, edit: (value: string)=>{setEmail(value)}},
        {type: "password", name: "Password", placeholder: "Enter your Password", value: password, edit: (value: string)=>{setPassword(value)}},
    ]
    const data = {email, password}
    const handleSubmit = async () => {
      setLoading(true)
      await callApi<{message: string, data:{
        role: string
        id: string
      }}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?'http://localhost:5000/api/v1/auth/login' : "https://medaussie-backend.onrender.com/api/v1/auth/login", {
        method: 'POST',
        credentials: "include",
        body: data,
        onSuccess:({ data }) => {
          setLoading(false)
          toast.success(data.message)
          setUser({...user, _id : data.data.id});
          if(data.data.role === "admin"){
            return router.push("/admin")
          }
           return router.push("/exam")
        },
        onError:({ error }) => {
          setLoading(false)
          toast.error(error.message)
        }
      });
    }

    return (
    <div className="flex justify-center items-center px-4 py-14 bg-primary">
        <div className="flex shadow-2xl w-[90%] ">
            <div  className="flex flex-col justify-center items-center gap-6 w-full md:w-[60%]" >
            <div>
            <h1 className="text-[24px] font-semibold text-secondary">
            Account Login
            </h1>
          </div>
          <form className="flex flex-col w-[80%] gap-6 ">
            {details.map(({name, value, type, placeholder, edit}, i)=>{
                return (     
              <div className= 'w-full' key={name}>
                   <label className="text-[14px]">{name}</label>
                   <input 
                   type={type}
                   name={name}
                   className={"relative w-full p-3 rounded-lg border-[1px] border-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 " }
                   placeholder={placeholder}
                   value={value}
                   onChange={(e)=>edit(e.target.value)}
                   ></input>
                   {
                    showPassword ? <EyeHideIcon onClick={()=> setShowPassword(false)} className={i > 0 ? 'absolute right-5 top-[50%]' : "hidden"}/> : <EyeShowIcon onClick={()=> setShowPassword(true)} className={i > 2 ? 'absolute right-5 top-[50%]' : "hidden"}/>
                   }
                </div>
                )
            })}
          </form>
          <div className='w-full text-right px-14'>
          <Link href="">Forgot Password?</Link>
          </div>
          <div className="pb-8 flex flex-col justify-center items-center gap-4 w-full">
          <button
              onClick={handleSubmit}
              type="submit"
              className="bg-secondary text-white bg-success400 w-[60%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium hover:rounded-xl"
            >
             <p>{loading ? "Loading..." : "Submit"}</p>
            </button>
            <Link
              href="https://medaussie-backend.onrender.com/api/v1/auth/google"
              className="w-[80%] rounded-[20px] border-solid border-[2px] border-[#DADCE0] bg-light flex px-6 py-2 justify-center items-center gap-3"
            >
              <GoogleIcon/>
              <h1 className="text-[14px]">Sign in with Google</h1>
            </Link>
            <div>Do not have an account? <Link href="/signup" className='font-bold text-secondary'>Sign up</Link></div>
          </div>
            </div>
            <div className='hidden md:flex flex-col bg-secondary px-3 w-[40%] max-h-full text-primary items-center justify-center gap-3 text-center'>
            <p className='text-[40px] font-bold'>Welcome friend!</p>
            <p className='text-[20px] font-bold'>Enter in your details and lets get you started</p>
          </div>
        </div>
    </div>
  )
}

export default Page