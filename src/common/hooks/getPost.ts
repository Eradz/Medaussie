import { callApi } from "@zayne-labs/callapi";
import { toast } from "sonner";
import { postType } from "../types/types";

type setStateFunctionType = (e : postType) => void;
type setLoadingStateFunctionType = (e : boolean) => void;

const getPost = async({setLoading, setPost, type, slug}: {setLoading: setLoadingStateFunctionType, setPost: setStateFunctionType, type: string, slug: string}) =>{
    setLoading(true);
    await callApi<{message: string, data:postType}>(process.env.NEXT_PUBLIC_NEXT_ENV  === "development" ?`http://localhost:5000/api/v1/post/${slug}?type=${type}` : `https://medaussie-backend.onrender.com/api/v1/post/${slug}?type=${type}`, {
      credentials: "include",
      dedupeStrategy: "none",
      onSuccess:({ data }) => {
        setPost(data.data);
        setLoading(false);
      },
      onError:({ error }) => {
        toast.error(error.message)
        setLoading(false);
      }
    });
  }
  export default getPost;