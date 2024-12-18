import React from 'react'
import List from '../_components/list/List'

const users :{title: string, excerpt: string, slug: string, author: string, body: string}[] = [
    {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
    {title: 'Chidiebereeeeeeee', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
    {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
    {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
    {title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
    {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
    {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
    {title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
    {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
    {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
    {title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
    {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
    {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
    {title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author: 'Admin', body: "xyz"},
    {title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author: 'User', body: "xyz"},
    {title: 'John', excerpt: 'Doe', slug: 'John@example.com', author: 'User', body: "xyz"},
]
const top = [
  {class: "5%", name: "S/N"},
  {class: "15%", name: "Title"},
  {class: "15%", name: "Excerpt"},
  {class: "10%", name: "Slug"},
  {class: "30%", name: "Body"},
  {class: "10%", name: "Author"},
  {class: "15%", name: " "},
]
const Page = () => {
  return <List data= {users} top= {top}/>
}

export default Page