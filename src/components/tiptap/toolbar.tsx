"use client"
import { type Editor } from '@tiptap/react'
import { usePathname } from 'next/navigation' 
import {Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Underline, Undo, Redo, ImageIcon} from "lucide-react"
import { callApi } from '@zayne-labs/callapi'
import { toast } from 'sonner'
import {useRouter} from "next/navigation"
const Toolbar = ({editor, content}: {editor: Editor | null, content: {title: string,slug: string, excerpt: string, body: string, featuredImage: File | null} }) => {
  const router = useRouter()
  const pathname = usePathname()
  if(!editor){
    return false
  }
  const pathArray = pathname.split('/')
  console.log(pathArray[2].slice(0, pathArray[2].length - 1))
  const type = () =>{
    if(pathArray.includes("new")){
      return  `?type=${pathArray[2].slice(0, pathArray[2].length - 1)}` 
    }
    return `/${pathArray[3]}`
    
  }
  const triggerFileInput = () => {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    fileInput?.click();
};
const toolBarElements = [
{icon: <Bold/>, click: ()=>editor.chain().focus().toggleBold().run(), name: "bold"},
{icon: <Strikethrough/>, click: ()=>editor.chain().focus().toggleStrike().run(), name: "strike"},
{icon: <Italic/>, click: ()=>editor.chain().focus().toggleItalic().run(), name: "italic"},
{icon: <List/>, click: ()=>editor.chain().focus().toggleBulletList().run(), name: "bulletList"},
{icon: <ListOrdered/>, click: ()=>editor.chain().focus().toggleOrderedList().run(), name: "orderedList"},
{icon: <Heading2/>, click: ()=> editor.chain().focus().toggleHeading({ level: 1 }).run(), name: 'heading'},
{icon: <Underline/>, click: ()=>editor.chain().focus().toggleUnderline().run(), name: "underline"},
{icon: <Undo/>, click: ()=>editor.chain().focus().undo().run(), name: "undo"},
{icon: <Redo/>, click: ()=>editor.chain().focus().redo().run(), name: "redo"},
{icon: <ImageIcon/>, click: () => triggerFileInput(), name: "image"},
]
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const target = event.target.files?.[0]
      if (!target) return;
  
      const formData = new FormData();
      formData.append('file', target);
  
      // Upload the image to your server
      await callApi<{message: string, data: string}>(process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? 'http://localhost:5000/api/v1/upload/single' : "https://medaussie-backend.onrender.com/api/v1/upload/single", {
        method: 'POST',
        body: formData,
        credentials: "include",
        onSuccess: ({ data }) => {
          editor?.chain().focus().setImage({ src: data.data }).run();
        },
        onError: ({ error }) => {
          toast.error(error.message)
        },
      })
    };
    const onSubmit = async() => {

      const formData = new FormData()
      formData.append('title', content.title.trim())
      formData.append('slug', content.slug.trim().toLowerCase().replace(/\s+/g, '-'))
      formData.append('excerpt', content.excerpt.trim())
      formData.append('body', content.body)
      formData.append('file', content.featuredImage as File)
      await callApi<{message: string, data: string}>(process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? `http://localhost:5000/api/v1/post${type()}` : `https://medaussie-backend.onrender.com/api/v1/post${type()}1`, {
        method: 'POST',
        body: formData,
        credentials: "include",
        onSuccess: ({ data }) => {
          toast.success(data.message)
          router.push(`/admin/${pathArray[2]}`)
        },
        onError: ({ error }) => {
          toast.error(error.message)
        },
      })
    }
    

    
    function checkIfEmpty(content: {title: string,slug: string, excerpt: string, body: string, featuredImage: File | null} ){
      return (
       content.body.length > 7 && 
       content.excerpt.length > 0 &&
       content.featuredImage != null &&
       content.slug.length > 0 &&
       content.title.length > 0  
      );
    }
   
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
        <input id='file-input' type="file" onChange={handleImageUpload} className='hidden'/>
       </div>

        {checkIfEmpty(content) && <button onClick={onSubmit} className='py-2 px-4 bg-secondary text-primary font-bold' >Submit</button>}
    </div>
  )
}

export default Toolbar