import Image from 'next/image'
import doctor from '../../../public/doctors.jpeg'

const Hero = () => {
  return (
    <div className='bg-primary flex items-center md:h-[500px] px-[8%] gap-[3%]'>
        <div className='flex flex-col gap-5 justify-center items-center w-[100%] md:w-[57%]'>
            <h3 className='md:text-[40px] font-bold'>Medical and Allied Medical Exams for International Graduates in Australia</h3>
            <p className='font-thin'>Navigating the path to a medical career in Australia as an international graduate can be complex. This guide provides a comprehensive overview of the eligibility criteria, exam requirements, and conversion procedures for international medical licenses.</p>
        <div className='flex w-full gap-3 mb-[5%]'>
            <button className='font-bold border text-primary border-primary bg-secondary px-5 py-[12px] rounded-sm hover:bg-primaryActive hover:text-secondary hover:border-secondary'>Learn More</button>
            <button className='font-bold border text-secondary bg-primary border-secondary px-5 py-[12px] rounded-sm  hover:bg-primaryActive'>Get Started</button>
        </div>
        </div>
        <Image src={doctor} alt='Hero' className='hidden md:block w-[40%] h-[95%] '/>
    </div>
  )
}

export default Hero