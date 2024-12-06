"use client"
import React, {useCallback} from 'react'
import { type Editor } from '@tiptap/react'
import { callApi } from '@zayne-labs/callapi'
import {Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Underline, Quote, Undo, Redo, Image} from "lucide-react"
const Toolbar = ({editor, content}: {editor: Editor | null, content: string }) => {

    if(!editor){
        return null
    }

    // const uploadImage = useCallback(async() => {
    //     const url = await callApi()
    // }, [editor])
    const toolBarElements = [
        {icon: <Bold/>, click: ()=>editor.chain().focus().toggleBold().run(), name: "bold"},
        {icon: <Strikethrough/>, click: ()=>editor.chain().focus().toggleStrike().run(), name: "strike"},
        {icon: <Italic/>, click: ()=>editor.chain().focus().toggleItalic().run(), name: "italic"},
        {icon: <List/>, click: ()=>editor.chain().focus().toggleBulletList().run(), name: "bulletList"},
        {icon: <ListOrdered/>, click: ()=>editor.chain().focus().toggleOrderedList().run(), name: "orderedList"},
        {icon: <Heading2/>, click: ()=>editor.chain().focus().toggleHeading({level: 2}).run(), name: "heading2"},
        {icon: <Underline/>, click: ()=>editor.chain().focus().toggleUnderline().run(), name: "underline"},
        {icon: <Quote/>, click: ()=>editor.chain().focus().toggleBlockquote().run(), name: "blockquote"},
        {icon: <Undo/>, click: ()=>editor.chain().focus().undo().run(), name: "undo"},
        {icon: <Redo/>, click: ()=>editor.chain().focus().redo().run(), name: "redo"},
        {icon: <Image/>, click: ()=>editor.chain().focus().toggleBulletList().run(), name: "image"},
    ]
  return (
    <div className='w-full h-16 border border-solid border-secondary justify-between flex'>
        
       <div className='w-[50%] h-full flex gap-2 p-2'>
        {toolBarElements.map(({name, icon, click}) => {
            return (
                <button key={name} 
                    onClick={(e)=>{
                        e.preventDefault();
                        click()
                        }}
                    className={editor.isActive(name) ? 'bg-secondary text-primary p-2 rounded-lg' : 'text-secondary p-2'}
                        >
                    {icon}
                </button>
            )
        })}
       </div>

        {content.length > 7 && <button type='submit' className='py-2 px-4 bg-secondary text-primary font-bold' >Add</button>}
    </div>
  )
}

export default Toolbar