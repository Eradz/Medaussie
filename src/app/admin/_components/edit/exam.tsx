"use client";

import React, {useState} from "react";
import Tiptap from "@/components/tiptap/tiptap";

function EditExam({paramId} :{paramId:string}) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [slug, setSlug] = useState("");
  const [body, setBody] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");

  console.log(paramId)
   const details = [
    {type: "text", name: "Title", placeholder: "Enter a title", value: title, edit: (value: string)=>{setTitle(value)}},
    {type: 'text', name: "Slug", placeholder: "Enter a unique and short slug to render you post", value: slug, edit: (value: string)=>{setSlug(value)}},
    {type: "text", name: "Excerpt", placeholder: "Enter an excerpt to you post", value: excerpt, edit: (value: string)=>{setExcerpt(value)}},
    {type: 'file', name: "Featured Image", placeholder: "Upload a Valid PNG/JPEG ", value: featuredImage, edit: (value: string)=>{setFeaturedImage(value)}},
    {type: 'text', name: "Body", placeholder: "Write your content here", value: body, edit: (value: string)=>{setBody(value)}},
]
// const data = {
//   title, excerpt, slug,featuredImage
// }
  return (  
        <div className="lg:flex-1 px-4 bg-primary justify-center items-center">
          <form className="flex flex-wrap justify-between w-[100%]">
            {details.map(({name, type, placeholder})=>{
                return (     
              <div className= { name === "Body" ? 'w-[100%] mt-2' : "w-[45%] mt-2"} key={name}>
                <label className="text-[14px]">{name}</label>
                    {name === "Body" ?
                   <Tiptap content={body} onchange={setBody}/> :
                   <input 
                   type={type}
                   name={name}
                   className={"w-full p-3 border border-solid border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "}
                   placeholder={placeholder}
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
