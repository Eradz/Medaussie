import { callApi } from "@zayne-labs/callapi";
import { toast } from "sonner";
import { postType } from "../types/types";

type setStateFunctionType = (e : postType[]) => void;
type setLoadingStateFunctionType = (e : boolean) => void;

const getPosts = async({setLoading, setPosts, type}: {setLoading: setLoadingStateFunctionType, setPosts: setStateFunctionType, type: string}) =>{
    await callApi<{message: string, data:postType[]}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?`http://localhost:5000/api/v1/post?type=${type}` : `https://medaussie-backend.onrender.com/api/v1/post?type=${type}`, {
      credentials: "include",
      dedupeStrategy: "none",
      onSuccess:({ data }) => {
        toast.success(data.message)
        setPosts(data.data);
        setLoading(false);
      },
      onError:({ error }) => {
        toast.error(error.message)
        setLoading(false);
      }
    });
  }
  export default getPosts;