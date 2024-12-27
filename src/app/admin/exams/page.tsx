'use client'
import React, { useEffect, useState } from 'react'
import List from '../_components/list/List'
import { callApi } from '@zayne-labs/callapi'
import { toast } from 'sonner'
import { postType } from '@/common/types/types'
import Loading from '@/app/loading'

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
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=>{
    setLoading(true)
    const getPosts = async() =>{
      await callApi<{message: string, data:postType[]}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?'http://localhost:5000/api/v1/post?type=exam' : "https://medaussie-backend.onrender.com/api/v1/post?type=exam", {
        credentials: "include",
        dedupeStrategy: "none",
        onSuccess:({ data }) => {
          toast.success(data.message)
          setPosts(data.data);
          setLoading(false);
        },
        onError:({ error }) => {
          toast.error(error.message)
          setLoading(false);
        }
      });
    }
    getPosts()
  }, [setPosts])
  if(loading) {
    return <Loading/>
  }
  return <List data= {posts} top= {top}/>
}

export default Page