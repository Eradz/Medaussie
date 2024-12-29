import { callApi } from "@zayne-labs/callapi";
import { toast } from "sonner";


export const HandleDelete = async({setIsDeletePopupOpen, deleteData}: {setIsDeletePopupOpen: (e: boolean)=> void, deleteData: string}) =>{
    setIsDeletePopupOpen(false)
    console.log(deleteData)
    await callApi<{message: string}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?`http://localhost:5000/api/v1/${deleteData}` : `https://medaussie-backend.onrender.com/api/v1/${deleteData}`, {
      method: 'DELETE',
      credentials: "include",
      dedupeStrategy: "none",
      onSuccess:({ data }) => {
        toast.success(data.message)
        window.location.href = window.location.href;
      },
      onError:({ error }) => {
        if(error.message === "Access token is required"){
          toast.error(error.message)
         return
        }
        toast.error(error.message)
      }
    });
  }