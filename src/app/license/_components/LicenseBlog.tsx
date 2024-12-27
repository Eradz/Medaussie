'use client'
import Loading from "@/app/loading"
import getPosts from "@/common/hooks/getPosts"
import { postType } from "@/common/types/types"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const LicenseBlog = () => {

  const [posts, setPosts] = useState<postType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(()=>{
    setLoading(true)
    getPosts({type: "license", setLoading, setPosts})
  }, [setPosts])
  if(loading){
    return <Loading/>
  }
  return (
    <div className="flex flex-wrap w-full justify-center gap-3 px-[8%] ">
       {posts.map(({title,featuredImageUrl,excerpt, slug}, i)=>{
                return(
                    <Link href={`/license/${slug}`} key={i} className='bg-primary flex flex-col h-full w-[90%] md:w-[31%] rounded-xl shadow-md shadow-current'>
                        <Image width={889} height={200} src={featuredImageUrl} alt="exams" className='rounded-tl-xl rounded-tr-xl h-[250px] '/>
                        <p className='px-6 py-2 text-left font-bold '>{title}</p>
                        <p className='px-6 py-2 text-left '>{excerpt}</p>
                    </Link>
                )
            })}
    </div>
  )
}

export default LicenseBlog