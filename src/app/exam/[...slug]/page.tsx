import ShowPost from "../_components/showPost"

const Page = async ({params} : {params: Promise<{ slug: string }>}) => {

  const id : string = (await params).slug
   return(
     <ShowPost paramSlug={id}/>
   )
}

export default Page