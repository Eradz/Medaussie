import React from 'react'
import ExamBlog from './_components/ExamBlog'
import Image from 'next/image'

const page = () => {
  return (
    <div className=' bg-primary py-12 '>
          <Image width={889} height={592} src={"/exam.jpg"} alt='exam' className='w-full'></Image>
        <div className='px-[8%] py-8'>
          <h3 className='text-center'>Medical Exams Availability</h3>
          <p>{"Navigating the world of medical licensing exams can be overwhelming, but we’re here to simplify the journey for you.Whether you're looking for the latest updates on exam dates, registration processes, or tips to excel, this is your one-stop destination. Explore step-by-step guides, eligibility criteria, and key resources to help you prepare and succeed. Stay informed and take the next confident step toward your medical career in Australia."}</p>
        </div>
            <ExamBlog/>
    </div>
  )
}

export default page