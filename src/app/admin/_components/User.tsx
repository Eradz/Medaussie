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
    <div className='flex border-collapse'>
        <p className='w-[5%] border border-solid border-slate-400 py-1 pl-[6px]'>S/N</p>
        <p className='w-[15%] border border-solid border-slate-400 py-1 pl-[6px] '>First Name</p>
        <p className='w-[15%] border border-solid border-slate-400 py-1 pl-[6px]'>Last Name</p>
        <p className='w-[35%] border border-solid border-slate-400 py-1 pl-[6px] '>Email</p>
        <p className='w-[10%] border border-solid border-slate-400 py-1 pl-[6px]'>Role</p>
        <p className='w-[10%] border border-solid border-slate-400 py-1 pl-[6px]'>Edit</p>
        <p className='w-[10%] border border-solid border-slate-400 py-1 pl-[6px]'>Delete</p>
    </div>
  {users.map((user, i) => {
    return (
    <tbody key={i} className={i % 2 != 0 ? 'flex items-center' : 'flex items-center bg-[#dddddd] '}>
        <tr className='w-[5%] py-1 pl-[6px] '>{i + 1}</tr>
        <tr className='w-[15%] py-1 pl-[6px] overflow-hidden'>{user.firstname}</tr>
        <tr className='w-[15%] py-1 pl-[6px] overflow-hidden'>{user.lastname}</tr>
        <tr className='w-[35%] py-1 pl-[6px] overflow-hidden'>{user.email}</tr>
        <tr className='w-[10%] py-1 pl-[6px]'>{user.role}</tr>
        <tr className='w-[10%] py-1 pl-[6px] text-center hover:cursor-pointer bg-green-500 hover:bg-green-300'>Edit</tr>
        <tr className='w-[10%] py-1 pl-[6px] text-center hover:cursor-pointer bg-red-500 hover:bg-red-200'>Delete</tr>
    </tbody>
)
})}   
</table>

</div>
  )
}

export default User