'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import Toolbar from './toolbar'

const Tiptap = ({onchange, content}: {onchange: (string: string)=> void, content: {title: string,slug: string, excerpt: string, body: string, featuredImage: File | null}}) => {
 
  
  const editor = useEditor({
    content: content.body,  // initial content
    extensions: [Underline, StarterKit, Image],
    editorProps:{
      attributes:{
        class: "prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc border-b border-l border-r px-4 pt-3 pb-[100px] outline-none border-secondary",
      }
    },
    onUpdate: ({editor})=>{
      onchange(editor.getHTML())
    },
    immediatelyRender: true,
    shouldRerenderOnTransaction: false,
    
  })

  return (
    <div>
      <Toolbar editor={editor} content={content}/>
      <EditorContent editor={editor} />
    </div>
)
}

export default Tiptap