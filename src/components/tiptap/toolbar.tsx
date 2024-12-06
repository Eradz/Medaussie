"use client"
import React from 'react'
import { type Editor } from '@tiptap/react'
import {Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Underline, Quote, Undo, Redo, Code} from "lucide-react"
const Toolbar = ({editor, content}: {editor: Editor | null, content: string }) => {

    if(!editor){
        return null
    }
    const toolBarElements = [
        {icon: <Bold/>, click: ()=>editor.chain().focus().toggleBold().run(), name: "bold"},
        {icon: <Strikethrough/>, click: ()=>editor.chain().focus().toggleStrike().run(), name: "StrikeThrough"},
        {icon: <Italic/>, click: ()=>editor.chain().focus().toggleItalic().run(), name: "Itaic"},
        {icon: <List/>, click: ()=>editor.chain().focus().toggleBulletList().run(), name: "List"},
        {icon: <ListOrdered/>, click: ()=>editor.chain().focus().toggleOrderedList().run(), name: "ListOrdered"},
        {icon: <Heading2/>, click: ()=>editor.chain().focus().toggleHeading({level: 1}).run(), name: "Heading2"},
        {icon: <Underline/>, click: ()=>editor.chain().focus().toggleUnderline().run(), name: "Underline"},
        {icon: <Quote/>, click: ()=>editor.chain().focus().toggleBulletList().run(), name: "quote"},
        {icon: <Undo/>, click: ()=>editor.chain().focus().toggleStrike().run(), name: "Undo"},
        {icon: <Redo/>, click: ()=>editor.chain().focus().toggleItalic().run(), name: "Redo"},
        {icon: <Code/>, click: ()=>editor.chain().focus().toggleBulletList().run(), name: "Code"},
    ]
  return (
    <div className='w-full h-8 border border-solid border-secondary'>
       <div className='w-[50%] flex items-end justify-between'>
        {toolBarElements.map(({name, icon, click}) => {
            return (
                <button key={name} onClick={(e)=>{
                    e.preventDefault();
                    click()
                    }}>
                    {icon}
                </button>
            )
        })}
       </div>
    </div>
  )
}

export default Toolbar