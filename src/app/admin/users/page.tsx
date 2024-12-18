import React from 'react'
import List from '../_components/list/List'

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

const top = [
  {class: "5%", name: "S/N"},
  {class: "15%", name: "First Name",},
  {class: "15%", name: "Last Name"},
  {class: "35%", name: "Email"},
  {class: "10%", name: "Role"},
  {class: "10%", name: " "}
]
const Page = () => {
  return <List data={users} top= {top}/>
}

export default Page