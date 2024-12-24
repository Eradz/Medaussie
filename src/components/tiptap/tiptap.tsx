'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import Toolbar from './toolbar'
import { useEffect } from 'react'

const Tiptap = ({onchange, content}: {onchange: (string: string)=> void, content: string}) => {
  console.log(`<p>${content.slice(0, 20)}</p>`)
  const editor = useEditor({
    extensions: [Underline, StarterKit, Image],
    editorProps:{
      attributes:{
        class: "prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc border-b border-l border-r px-4 pt-3 pb-[100px] outline-none border-secondary",
      }
    },
    onUpdate: ({editor})=>{
      onchange(editor.getHTML())
    },
    immediatelyRender: false
  })
  useEffect(() => {
    if(!editor){
      return
    }
          editor.commands.setContent(content)
  }, [])

  return (
    <div>
      <Toolbar editor={editor} content={content}/>
      <EditorContent editor={editor} />
    </div>
)
}

export default Tiptap