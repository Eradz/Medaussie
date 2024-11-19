import Image from "next/image"
import React from "react"

export default function Page () {

  const customers = [
    {image:"/head2.jpeg", name: "David", comment: "Medaussie Australia has been a game-changer for me. I'm grateful for the support community."},
    {image:"/head3.jpeg", name: "John", comment: "As an international medical graduate from Nigeria, I faced numerous hurdles in understanding the Australian medical system."},
    {image:"/head1.jpeg", name: "Sarah", comment: "The comprehensive platform offered by Medaussie Australia is exactly what I needed for my journey."},
  ]

  return (
    <div className="flex flex-col bg-primary pt-14 px-12 text-secondary gap-3 ">
      <div className="flex gap-[5%]">
          <div className="flex flex-col md:w-[45%] py-12 px-5">
          <h3 className="">About Us</h3>
        <div >At Medaussie Australia, we are a dedicated team committed to empowering international medical
        graduates. Founded in 2023, our mission is to provide essential resources and support for those navigating the Australian medical licensing
          system. We understand the unique challenges faced by graduates from diverse backgrounds, including Nigeria, and strive to create
          a welcoming community. Our platform offers up-to-date information on licensing exams, step-by-step guides for license conversion,
            and a supportive forum for sharing experiences. We are passionate about facilitating the success of healthcare professionals in
            Australia, ensuring they can pursue their careers with confidence and clarity.</div>
          </div>
          <Image width={736} height={1104} src="/doctor.jpeg" alt='Hero' className="w-[50%] hidden md:block"/>
      </div>
      <div className="flex flex-col items-center gap-7 py-2 ">
        <h3>{"Customers' Opinions Matter."}</h3>
        <div className="flex flex-col md:flex-row md:justify-between text-center items-center gap-5">
        {customers.map(({name, image, comment}, i)=>{
          return(
            <div className={i === 1 ? "flex flex-col bg-[#F5F5F5] p-5 h-[350px] w-[80%] md:w-[30%] gap-5 relative" : "flex flex-col bg-[#F5F5F5] h-[300px] p-5 w-[80%] md:w-[30%] gap-4 relative"} key={name}>
              <Image width={120} height={120} src={image} alt="User" className="rounded-full mx-auto"/>
              <div className="font-bold">{name}</div>
              <div>{comment}</div>
              <div className="absolute bottom-0 left-0 bg-secondary w-full h-3"></div>
            </div>

          )
        })}

        </div>
      </div>
    </div>

  )
}

