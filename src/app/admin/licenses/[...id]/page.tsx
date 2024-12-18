import EditLicense from "../../_components/edit/license"
const Page = async ({params} : {params: Promise<{ id: string }>}) => {

  const id : string = (await params).id
   return(
     <EditLicense paramId={id}/>
   )
}

export default Page