import { callApi } from "@zayne-labs/callapi";
import { userType } from "../types/types";
import { toast } from "sonner";
import { UserContext } from "@/components/context/UserContext";

const {setUser} = UserContext()

const getUser = async() =>{
    await callApi<{message: string, data: userType}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ? `http://localhost:5000/api/v1/auth/session` : `https://medaussie-backend.onrender.com/api/v1/auth/session`, {
      credentials:"include",
      dedupeStrategy: "none",
      onSuccess:({ data }) => {
        setUser(data.data)
        toast.success(data.message)
      },
      onError: ({ error }) => {
        toast.error(error.message)
        window.location.assign(`${process.env.NEXT_PUBLIC_BASE_URL}/login`)
      },
    });
  }

  export default getUser;