import EditExam from "../../_components/edit/exam"
const Page = async ({params} : {params: Promise<{ slug: string }>}) => {

  const slug : string = (await params).slug
   return(
     <EditExam paramSlug={slug}/>
   )
}

export default Page