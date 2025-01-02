import { callApi } from "@zayne-labs/callapi";
import { toast } from "sonner";

export type updatingUserType = {
    firstname?: string,
    lastname?: string,
    email?: string,
    role?: string
}
export const updateUser = async({id, updatedUser, loading}: {id: string, updatedUser: updatingUserType, loading: (e: boolean)=>void}) =>{
    console.log(id)
    loading(true)
    await callApi<{message: string}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?`http://localhost:5000/api/v1/user/${id}` : `https://medaussie-backend.onrender.com/api/v1/user/${id}`, {
      method: 'POST',
      credentials: "include",
      dedupeStrategy: "none",
      body: updatedUser,
      onSuccess:({ data }) => {
        toast.success(data.message)
        window.location.assign(`${process.env.NEXT_PUBLIC_BASE_URL}/admin/users`)
        loading(false)
      },
      onError:({ error }) => {
        loading(false)
        if(error.message === "Access token is required"){
          toast.error(error.message)
         return
        }
        toast.error(error.message)
      }
    });
  }