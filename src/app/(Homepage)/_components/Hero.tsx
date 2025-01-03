import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='bg-primary flex md:flex-row flex-col-reverse items-center md:h-[500px] gap-[3%]'>
        <div className='flex flex-col gap-5 justify-center items-center w-[100%] md:w-[57%] pl-[8%]'>
            <h3 className='md:text-[40px] font-bold'>Medical and Allied Medical Exams for International Graduates in Australia</h3>
            <p className='font-thin'>Navigating the path to a medical career in Australia as an international graduate can be complex. This guide provides a comprehensive overview of the eligibility criteria, exam requirements, and conversion procedures for international medical licenses.</p>
        <div className='flex w-full gap-3 mb-[5%]'>
            <Link href="/about"><button className='font-bold border text-primary border-primary bg-secondary px-5 py-[12px] rounded-sm hover:bg-primary hover:text-secondary hover:border-secondary'>Learn More</button></Link>
            <Link href="/signup"><button className='font-bold border text-secondary bg-primary border-secondary px-5 py-[12px] rounded-sm  hover:bg-primaryActive hover:text-primary'>Get Started</button></Link>
        </div>
        </div>
        <Image width={896} height={1152} src="/doctors.jpeg" alt='Hero' className='md:w-[40%]  md:h-[95%] md:pr-[8%] md:pl-0'/>
    </div>
  )
}

export default Hero