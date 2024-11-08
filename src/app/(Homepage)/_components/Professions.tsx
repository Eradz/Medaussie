import React from 'react'

const jobs= [
    {name: "Medical Professions", details: 'Doctors, surgeons, specialists, general practitioners, and more.'},
    {name: "Allied Medical Professions", details: 'Nurses, pharmacists, dentists, physiotherapists, and other healthcare providers.'},
    {name: "Regulated Occupations", details: 'These professions require specific qualifications, registrations, and licensing in Australia.'}
]
const Professions = () => {
  return (
    <div className='bg-primary flex flex-col gap-5 items-center p-[5%]'>
        <h3>Overview of Medical and Allied Medical
        Professions in Australia</h3>
        <p className='text-[18px] font-thin'>Navigating the path to a medical career in Australia as an international graduate can be complex. This guide provides a comprehensive overview of the eligibility criteria, exam requirements, and conversion procedures for international medical licenses.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-4'>
            {jobs.map((job)=>{
                return(
                    <div key={job.name} className='flex flex-col gap-4'>
                        <div className='font-bold'>{job.name}</div>
                        <div>{job.details}</div>
                    </div>
                )
            })}
        </div>
</div>
  )
}

export default Professions