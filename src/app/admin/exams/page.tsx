'use client'
import React, { useEffect, useState } from 'react'
import List from '../_components/list/List'
import { callApi } from '@zayne-labs/callapi'
import { toast } from 'sonner'

// const users :{title: string, excerpt: string, slug: string, author: string, body: string}[] = [
//     {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
//     {title: 'Chidiebereeeeeeee', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
//     {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
//     {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
//     {title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
//     {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
//     {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
//     {title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
//     {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
//     {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
//     {title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
//     {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
//     {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
//     {title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
//     {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
//     {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
// ]
type postType = {
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
const top = [
  {class: "5%", name: "S/N"},
  {class: "15%", name: "Title"},
  {class: "15%", name: "Excerpt"},
  {class: "10%", name: "Slug"},
  {class: "30%", name: "Body"},
  {class: "10%", name: "Author"},
  {class: "15%", name: " "},
]
const Page = () => {
  const [posts, setPosts] = useState<postType[]>([])
  useEffect(()=>{
    const getPost = async() =>{
      
      await callApi<{message: string, data:postType[]}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?'http://localhost:5000/api/v1/post?type=exam' : "https://medaussie-backend.onrender.com/api/v1/post?type=exam", {
        credentials: "include",
        dedupeStrategy: "none",
        onSuccess:({ data }) => {
          toast.success(data.message)
          setPosts(data.data);
        },
        onError:({ error }) => {
          toast.error(error.message)
        }
      });
    }
    getPost()
  },)
  return <List data= {posts} top= {top}/>
}

export default Page