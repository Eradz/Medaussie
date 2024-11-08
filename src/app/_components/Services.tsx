import Image from "next/image"
import exams from '../../../public/exams.jpeg'
import license from '../../../public/licenses.jpeg'
import resource from '../../../public/resoucelib.jpeg'

const services = [
    {image:license, name: "License conversion consulation", details: "Our License Conversion Consultation service is tailored to guide you through the complexities of converting your medical qualifications. Our expert team provides personalized assessments and actionable steps to ensure you meet all necessary requirements."},
    {image:exams, name: "Exam availability updates", details: "Stay informed with our Medical Exam Availability service, where we provide updates on upcoming exams and registration deadlines. Our goal is to help you plan your preparation effectively and stay on track with your medical career aspirations."},
    {image:resource, name: "Resource library", details: "Enhance your understanding with our Resource Library, offering a wealth of information on the Australian medical system, licensing procedures, and exam preparation tips. We strive to equip you with the tools necessary for success."}
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
                        <Image src={image} alt="exams" className='h-[300px] rounded-tl-xl rounded-tr-xl '/>
                        <p className='px-6 py-6 text-left'>{details}</p>
                        <div className='bg-primary p-5 absolute left-[-20px] top-3 rounded-xl'>{name}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services