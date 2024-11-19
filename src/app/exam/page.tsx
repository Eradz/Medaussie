import React from 'react'
import ExamBlog from './_components/ExamBlog'

const page = () => {
  return (
    <div className=' bg-primary py-12'>
        <div className='bg-red-500 w-full h-[350px]'></div>
        <h3>Medical Exams Availability</h3>
        <p>{"Navigating the world of medical licensing exams can be overwhelming, but we’re here to simplify the journey for you.Whether you're looking for the latest updates on exam dates, registration processes, or tips to excel, this is your one-stop destination. Explore step-by-step guides, eligibility criteria, and key resources to help you prepare and succeed. Stay informed and take the next confident step toward your medical career in Australia."}</p>
            <ExamBlog/>
    </div>
  )
}

export default page