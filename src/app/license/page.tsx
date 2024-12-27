import React from 'react'
import Image from 'next/image'
import LicenseBlog from './_components/LicenseBlog'

const page = () => {
  return (
    <div className=' bg-primary py-12 '>
          <Image width={889} height={592} src={"/license.jpg"} alt='exam' className='w-full'></Image>
        <div className='px-[8%] py-8'>
          <h3 className='text-center'>Medical License Conversion</h3>
          <p>{"Ready to practice medicine in Australia? Converting your international medical license can feel complex, but we’re here to guide you every step of the way. From understanding eligibility requirements to navigating assessments and documentation, we provide clear, reliable information to make the process smoother. Explore our resources and start your journey toward a fulfilling medical career in Australia."}</p>
        </div>
            <LicenseBlog/>
    </div>
  )
}

export default page