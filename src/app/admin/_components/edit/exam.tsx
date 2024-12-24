"use client";

import React, {useEffect, useState} from "react";
import Tiptap from "@/components/tiptap/tiptap";
import { callApi } from "@zayne-labs/callapi";
import { toast } from "sonner";

function EditExam({paramId} :{paramId:string}) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [slug, setSlug] = useState("");
  const [body, setBody] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");

  useEffect(() => {
    if(paramId.includes("new")){
     setTitle('')
      setExcerpt('')
      setSlug('')
      setBody('')
      setFeaturedImage('')
      return;
    }
    const getUsers = async() =>{
      await callApi<{message: string, data:{
        title: string,
        excerpt: string,
        slug: string,
        author: {
          id: string,
          firstname: string,
        },
        body: string}}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?`/api/v1/post/${paramId}` : `https://medaussie-backend.onrender.com/api/v1/post/${paramId}`, {
        credentials: "include",
        dedupeStrategy: "none",
        onSuccess:({ data }) => {
          console.log(data)
          setTitle(()=>data.data.title);
          setExcerpt(data.data.excerpt);
          setSlug(data.data.slug);
          setBody(data.data.body);
          // setFeaturedImage(()=>data.data.);
        },
        onError:({ error }) => {
          toast.error(error.message)
        }
      });
    }
    getUsers()
  }, [])
   const details = [
    {type: "text", name: "Title", placeholder: "Enter a title", value: title, edit: (value: string)=>{setTitle(value)}},
    {type: 'text', name: "Slug", placeholder: "Enter a unique and short slug to render you post", value: slug, edit: (value: string)=>{setSlug(value)}},
    {type: "text", name: "Excerpt", placeholder: "Enter an excerpt to you post", value: excerpt, edit: (value: string)=>{setExcerpt(value)}},
    {type: 'file', name: "Featured Image", placeholder: "Upload a Valid PNG/JPEG ", value: featuredImage, edit: (value: string)=>{setFeaturedImage(value)}},
    {type: 'text', name: "Body", placeholder: "Write your content here", value: body, edit: (value: string)=>{setBody(value)}},
]
  return (  
        <div className="lg:flex-1 px-4 bg-primary justify-center items-center">
          <form className="flex flex-wrap justify-between w-[100%]">
            {details.map(({name, type, value, placeholder, edit})=>{
                return (     
              <div className= { name === "Body" ? 'w-[100%] mt-2' : "w-[45%] mt-2"} key={name}>
                <label className="text-[14px]">{name}</label>
                    {name === "Body" ?
                   <Tiptap content={body} onchange={setBody}/> :
                   <input 
                   type={type}
                   name={name}
                   value={value}
                   className={"w-full p-3 border border-solid border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "}
                   placeholder={placeholder}
                   onChange={(e)=>edit(e.target.value)}
                   accept="image/png, imae/jpeg"
                   ></input>
                  }
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

export default EditExam;
