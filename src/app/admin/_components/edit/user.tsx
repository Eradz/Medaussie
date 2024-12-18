"use client";

import React, {useState} from "react";

function EditUser({paramId} :{paramId:string}) {
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [role, setRole] = useState("");

  console.log(paramId)
   const details = [
    {type: "email", name: "Email", placeholder: "Enter your Email", value: email, edit: (value: string)=>{setEmail(value)}},
    {type: "text", name: "Firstname", placeholder: "Enter your Firstname", value: firstname, edit: (value: string)=>{setFirstname(value)}},
    {type: "text", name: "Lastname", placeholder: "Enter your Lastname", value: lastname, edit: (value: string)=>{setLastname(value)}},
    {type: "text", name: "Role", placeholder: "Admin/user", value: role, edit: (value: string)=>{setRole(value)}}
]
// const data = {
//   title, excerpt, slug,featuredImage
// }
  return (  
        <div className="lg:flex-1 px-4 bg-primary justify-center items-center">
          <form className="flex flex-wrap justify-between w-[100%]">
            {details.map(({name, value, type, placeholder, edit})=>{
                return (     
              <div className= 'w-full relative' key={name}>
                 <label className="text-[14px]">{name}</label>
                   <input 
                   type={type}
                   name={name}
                   className={"w-full p-3 rounded-lg border-solid border-secondary border-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500 relative" }
                   placeholder={placeholder}
                   value={value}
                   onChange={(e)=>edit(e.target.value)}
                   ></input>
                </div>
                )
            })}
          </form>
          <div className="py-6 flex flex-col justify-center items-center gap-4 w-[90%]">
          <button
              type="submit"
              className="text-white bg-success400 w-[80%] py-[8px] px-[16px] rounded-[8px] font-sans font-medium"
            >
             <p>Submit</p>
            </button>
          </div>
        </div>
     
  );
}

export default EditUser;
