import axios from "axios";
import { useApiHandler } from ".";


export const createBlog = (data)=>  axios.post("/api/v1/blogs", data);
export const useCreateBlogApi =  () => useApiHandler(createBlog)



