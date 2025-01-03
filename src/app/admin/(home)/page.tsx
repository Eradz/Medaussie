import Link from 'next/link'
import React from 'react'
import User from '../users/page'
import { User2Icon, BookOpenIcon, GraduationCapIcon} from 'lucide-react'
const sectors:{name: string, amount: string, icon: React.ReactNode, link: string}[] = [
    {name: 'Users', amount: '3', icon: <User2Icon size={50}/>, link: '/admin/users'},
    {name: 'Exam Posts', amount: '3', icon: <BookOpenIcon size={50}/>, link: '/admin/exams'},
    {name: 'License Posts', amount: '4', icon: <GraduationCapIcon size={50}/>, link: '/admin/licenses'},
]
const Dashboard = () => {
  return (
 <div className='bg-primary h-full  flex flex-col py-5 overflow-hidden'>
    <div className="grid md:grid-cols-3  gap-4 px-3 ">
           { sectors.map((item) => {
           return <div 
           key={item.name} className= {`bg-primary shadow-sm shadow-slate-300 w-[100%] flex justify-center px-4 py-5 rounded-sm hover:scale-110 transition ease-in-out delay-200 `} >
            <Link href={item.link} className='flex justify-between items-center w-full'>
            <div className='flex flex-col'>
            <p className='text-[25px] text-secondary font-black'>{item.amount}</p>
            <p className='text-slate-400 ' >{item.name}</p>
            </div>
            <p className='text-slate-400'>{item.icon}</p>
            </Link>
        </div>
           }) 
            }
        </div>
      <User/>
        </div>
  )
}

export default Dashboard