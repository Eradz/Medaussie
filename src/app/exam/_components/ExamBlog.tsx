import Image from "next/image"
import Link from "next/link"

const ExamBlog = () => {

  const examPosts = [
    {image: "/doctor.jpeg", title: "About the Australian Exam training program", excerpt: "Find out more about the AGPT Program including availability,structure and procedures", slug: "sup"},
    {image: "/doctor.jpeg", title: "Abouts the Australian Exam training program", excerpt: "Find out more about the AGPT Program including availability,structure and procedures", slug: "sup"},
    {image: "/doctor.jpeg", title: "About sthe Australian Exam training program", excerpt: "Find out more about the AGPT Program including availability,structure and procedures", slug: "sup"},
    {image: "/doctor.jpeg", title: "About tshe Australian Exam training program", excerpt: "Find out more about the AGPT Program including availability,structure and procedures", slug: "sup"},
    {image: "/doctor.jpeg", title: "About thse Australian Exam training program", excerpt: "Find out more about the AGPT Program including availability,structure and procedures", slug: "sup"},
  ]

  return (
    <div className="flex flex-wrap w-full justify-center gap-3 ">
       {examPosts.map(({title,image,excerpt, slug})=>{
                return(
                    <Link href={`/exam/${slug}`} key={title} className='bg-primary flex flex-col h-full w-[90%] md:w-[31%] relative rounded-xl shadow-md shadow-current'>
                        <Image width={889} height={200} src={image} alt="exams" className='rounded-tl-xl rounded-tr-xl h-[250px] '/>
                      
                        <p className='px-6 py-6 text-left '>{excerpt}</p>
                        <div className='bg-primary p-2 absolute left-[-16px] top-2 rounded-xl font-bold'>{title}</div>
                    </Link>
                )
            })}
    </div>
  )
}

export default ExamBlog