import React from 'react'

const users :{firstname: string, lastname: string, email: string, role: string}[] = [
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'user'},
    {firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'user'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'user'},
    {firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'user'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'user'},
    {firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'user'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'user'},
    {firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'user'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'user'},
    {firstname: 'Chidiebere', lastname: 'Anagu', email: 'anaguchidiebere@example.com', role: 'Admin'},
    {firstname: 'Uche', lastname: 'Anagu', email: 'Uche@example.com', role: 'user'},
    {firstname: 'John', lastname: 'Doe', email: 'John@example.com', role: 'user'},
]
const User = () => {
  return (
 <div className='bg-primary h-screen'>
    <div className='flex py-3 px-[5%]'>
        <p className='w-[15%]'>First Name</p>
        <p className='w-[15%]'>Last Name</p>
        <p className='w-[35%]'>Email</p>
        <p className='w-[10%]'>Role</p>
        <p className='w-[10%]'>Edit</p>
        <p className='w-[10%]'>Delete</p>
    </div>
  {users.map((user, i) => {
    return (
    <div key={i} className='py-3 px-[5%] flex'>
        <p className='w-[15%]'>{user.firstname}</p>
        <p className='w-[15%]'>{user.lastname}</p>
        <p className='w-[35%]'>{user.email}</p>
        <p className='w-[10%]'>{user.role}</p>
        <div className='w-[10%] px-1  text-center'><p className='bg-green-500 p-1 rounded-lg'>Edit</p></div>
        <div className='w-[10%] px-1 text-center'><p className='bg-red-500 p-1 rounded-lg'>Delete</p></div>
    </div>
)
})}     
</div>
  )
}

export default User