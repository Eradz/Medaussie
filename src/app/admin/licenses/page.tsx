import React from 'react'
import List from '../_components/list/List'

const users :{_id:string, type: string, title: string, excerpt: string, slug: string, author: {_id: string, firstname: string}, body: string}[] = [
    {_id:"string", type: "string", title: 'John', excerpt: 'Doe', slug: 'John@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Chidiebereeeeeeee', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'John', excerpt: 'Doe', slug: 'John@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'John', excerpt: 'Doe', slug: 'John@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'John', excerpt: 'Doe', slug: 'John@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'John', excerpt: 'Doe', slug: 'John@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Chidiebere', excerpt: 'Anagu', slug: 'anaguchidiebere@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'Uche', excerpt: 'Anagu', slug: 'Uche@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
    {_id:"string", type: "string", title: 'John', excerpt: 'Doe', slug: 'John@example.com', author:{_id:"1", firstname: "chidi"}, body: "xyz"},
]
const top = [
  {class: "5%", name: "S/N"},
  {class: "15%", name: "_id:string, type: string, Title"},
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