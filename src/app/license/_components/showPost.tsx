'use client'

import Loading from '@/app/loading'
import getPost from '@/common/hooks/getPost'
import { postType } from '@/common/types/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ShowPost = ({paramSlug}: {paramSlug: string}) => {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState<postType>( {_id: "",title: "",type: "",excerpt: "",slug: "",featuredImageUrl: "",author: {_id: "",firstname: "",},body: "",})
    useEffect(()=>{
        getPost({slug: paramSlug, type: "license", setLoading, setPost});
    }, [paramSlug])

    if(loading){
        return <Loading/>
    }
  return (
    <div className='py-14 bg-white px-[15%] pt-14 leading-10' >
        <h3 className='font-bold text-center'>{post.title}</h3>
        <Image width={1200} height={900} src={post.featuredImageUrl} alt="Featured Image"/>
        <div dangerouslySetInnerHTML={{__html: post.body}}></div>
    </div>
  )
}

export default ShowPost