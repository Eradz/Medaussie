import Image from "next/image"

const services = [
    {image:'/licenses2.jpeg', name: "License conversion consulation", details: "Our License Conversion Consultation service is tailored to guide you through the complexities of converting your medical qualifications."},
    {image:'/exams2.jpeg', name: "Exam availability updates", details: "Our Medical Exam Availability service keeps you updated on upcoming exams and registration deadlines, helping you plan effectively for your medical career."},
    {image:'/resoucelib2.jpeg', name: "Resource library", details: "Our Resource Library offers key insights into the Australian medical system, licensing, and exam prep-providing the tools for your success."}
]
const Services = () => {
  return (
    <div className='flex flex-col gap-6 text-center md:p-[5%] p-[15%]'>
        <div className="text-primary flex flex-col gap-2">
        <h3>Services we provide</h3>
        <p>From understanding the conversion process to locating available exams, we work diligently to equip you with the essential information for a smooth transition into the Australian medical system. Experience dedicated support where every detail is tailored to your needs.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 justify-center'>
            {services.map(({name,image, details})=>{
                return(
                    <div key={name} className='bg-primary flex flex-col h-full relative rounded-xl shadow-md shadow-current'>
                        <Image width={889} height={592} src={image} alt="exams" className='rounded-tl-xl rounded-tr-xl '/>
                        <p className='px-6 py-6 text-left'>{details}</p>
                        <div className='bg-primary p-2 absolute left-[-16px] top-2 rounded-xl'>{name}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services