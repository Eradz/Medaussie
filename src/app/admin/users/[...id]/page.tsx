import EditUser from "../../_components/edit/user"
const Page = async ({params} : {params: Promise<{ id: string }>}) => {

  const id : string = (await params).id
   return(
     <EditUser paramId={id}/>
   )
}

export default Page