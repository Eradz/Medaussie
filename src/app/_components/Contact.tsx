import React from 'react'

const info = [
    {name: "Name", type: "text"},
    {name: "Email", type: "email"},
    {name: "Message", type: "text"}
]
const Contact = () => {
  return (
    <div className='text-primary flex flex-col items-center gap-4 p-[5%]'>
        <h3>Contact Us</h3>
        <p>We are here to assist you with your medical licensing needs.</p>
        <form className='flex flex-col gap-4  w-[35%]'>
            {info.map(({name, type},i)=>{
                return(
                    <div key={name} className=''>
                        {i < 2 ? <input type={type} placeholder={name} name={name} className='bg-transparent border-black border p-4 w-full'/> : <textarea className='bg-transparent border-black border p-4 w-full' rows={6} placeholder={name}></textarea>}
                    </div>
                )
            })}
        </form>
    </div>
  )
}

export default Contact