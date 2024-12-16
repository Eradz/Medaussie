import EditExam from "../../_components/edit/exam"
const Page = async ({params} : {params: { slug: string }}) => {

  const slug : string = (await params).slug
   return(
     <EditExam paramSlug={slug}/>
   )
}

export default Page