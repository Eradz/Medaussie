import React from 'react'

const users :{firstname: string, lastname: string, email: string, role: string}[] = [
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
    {firstname: 'Chidiebereeeeeeee', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
    {firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
    {firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
    {firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
    {firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'User'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'User'},
]
const User = () => {
  return (
 <div className='bg-primary h-full overflow-scroll overflow-x-hidden flex flex-col '>
    <table className=' flex flex-col border-collapse'>
    <tbody><tr  className='flex border-collapse text-left'>
        <th className='w-[5%] border border-solid border-slate-400 py-1 pl-[6px]'>S/N</th>
        <th className='w-[15%] border border-solid border-slate-400 py-1 pl-[6px] '>First Name</th>
        <th className='w-[15%] border border-solid border-slate-400 py-1 pl-[6px]'>Last Name</th>
        <th className='w-[35%] border border-solid border-slate-400 py-1 pl-[6px] '>Email</th>
        <th className='w-[10%] border border-solid border-slate-400 py-1 pl-[6px]'>Role</th>
        <th className='w-[10%] border border-solid border-slate-400 py-1 pl-[6px]'>Edit</th>
        <th className='w-[10%] border border-solid border-slate-400 py-1 pl-[6px]'>Delete</th>
      </tr>
  {users.map((user, i) => {
    return (
      <tr key={i} className={i % 2 != 0 ? 'flex items-center' : 'flex items-center bg-[#dddddd] '}>
        <td className='w-[5%] py-1 pl-[6px] '>{i + 1}</td>
        <td className='w-[15%] py-1 pl-[6px] overflow-hidden'>{user.firstname}</td>
        <td className='w-[15%] py-1 pl-[6px] overflow-hidden'>{user.lastname}</td>
        <td className='w-[35%] py-1 pl-[6px] overflow-hidden'>{user.email}</td>
        <td className='w-[10%] py-1 pl-[6px]'>{user.role}</td>
        <td className='w-[10%] py-1 pl-[6px] text-center hover:cursor-pointer bg-green-500 hover:bg-green-300'>Edit</td>
        <td className='w-[10%] py-1 pl-[6px] text-center hover:cursor-pointer bg-red-500 hover:bg-red-200'>Delete</td>
      </tr>
)
})}</tbody></table></div>
  )
}

export default User