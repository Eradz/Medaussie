"use client";

import React, {useEffect, useState} from "react";
import { callApi } from "@zayne-labs/callapi";
import { toast } from "sonner";
import { userType } from "@/common/types/types";
import Loading from "@/app/loading";
import { updateUser } from "@/common/hooks/updateUser";

function EditUser({paramId} :{paramId:string}) {
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [role, setRole] = useState("")
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getUsers = async() =>{
      await callApi<{message: string, data:userType}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?`/api/v1/user/${paramId}` : `https://medaussie-backend.onrender.com/api/v1/user/${paramId}`, {
        credentials: "include",
        dedupeStrategy: "none",
        onSuccess:({ data }) => {
          setEmail(()=>data.data.email);
          setFirstname(()=>data.data.firstname);
          setLastname(()=>data.data.lastname);
          setRole(()=>data.data.role);
          setLoading(false);
        },
        onError:({ error }) => {
          toast.error(error.message)
          setLoading(false);
        }
      });
    }
    getUsers()
    
    }, [paramId])

    const handleUpdate = () => {
      const updatedUser = {firstname, lastname, role}
      console.log(updatedUser)
     return updateUser({id: paramId, updatedUser, loading:(e)=> setLoading(e) })
    }

   const details = [
    {type: "email", name: "Email", placeholder: "Enter your Email", value: email, edit: (value: string)=>{setEmail(value)}},
    {type: "text", name: "Firstname", placeholder: "Enter your Firstname", value: firstname, edit: (value: string)=>{setFirstname(value)}},
    {type: "text", name: "Lastname", placeholder: "Enter your Lastname", value: lastname, edit: (value: string)=>{setLastname(value)}},
    {type: "text", name: "Role", placeholder: "Admin/user", value: role, edit: (value: string)=>{setRole(value)}}
]
const options = ['admin', 'user']
if(loading){
  return (
    <Loading/>
  )
 }
  return (  
        <div className="lg:flex-1 px-4 bg-primary justify-center items-center">
          <form className="flex flex-wrap justify-between w-[100%]">
            {details.map(({name, value, type, placeholder, edit})=>{
                return (     
              <div className= 'w-full relative' key={name}>
                 <label className="text-[14px]">{name}</label>
                   { name === "Role" ?  <select defaultValue={role} onChange={(e)=>edit(e.target.value)} className={"w-full p-3 rounded-lg border-solid border-secondary border-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500 relative" }>
                    {options?.map((option)=>{
                        return (
                            <option value={option} key={option} >{option}</option>
                        )
                    })}
                  </select>:
                   <input 
                   type={type}
                   name={name}
                   className={"w-full p-3 rounded-lg border-solid border-secondary border-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500 relative" }
                   placeholder={placeholder}
                   value={value}
                   onChange={(e)=>edit(e.target.value)}
                   disabled={name === "Email"}
                   ></input>}
                </div>
                )
            })}
          </form>
          <div className="py-6 flex flex-col justify-center items-center gap-4 w-[90%]">
          <button
              type="submit"
              className="text-white bg-secondary w-[80%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
              onClick={handleUpdate}
            >
             <p>Submit</p>
            </button>
          </div>
        </div>
     
  );
}

export default EditUser;
