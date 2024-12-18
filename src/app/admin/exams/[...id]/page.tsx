import EditExam from "../../_components/edit/exam"
const Page = async ({params} : {params: Promise<{ id: string }>}) => {

  const id : string = (await params).id
   return(
     <EditExam paramId={id}/>
   )
}

export default Page