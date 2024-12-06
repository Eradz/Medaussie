'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Toolbar from './toolbar'

const Tiptap = ({onchange, content}: {onchange: (string: string)=> void, content: string}) => {
  const editor = useEditor({
    extensions: [Underline, StarterKit.configure(
      {
        heading:{
            levels: [1, 2, 3],
          },
      }
    )
    ],
    editorProps:{
      attributes:{
        class: "border-b border-l border-r px-4 py-3 outline-none border-secondary",
      }
    },
    onUpdate: ({editor})=>{
      onchange(editor.getHTML())
    }
  })

  return (
    <div>
      <Toolbar editor={editor} content={content}/>
      <EditorContent editor={editor} />
    </div>
)
}

export default Tiptap