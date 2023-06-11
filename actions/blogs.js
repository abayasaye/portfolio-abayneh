import axios from "axios";
import { useApiHandler, fetcher } from ".";
import useSWR from "swr";

export const createBlog = (data)=>  axios.post("/api/v1/blogs", data);
export const updateBlog = (id, data)=>  axios.patch(`/api/v1/blogs/${id}`, data);
export const useCreateBlogApi =  () => useApiHandler(createBlog)
export const useUpdateBlogApi =  () => useApiHandler(updateBlog)


export const useGetBlog = (id) => {
    const { data, error, ...rest } = useSWR(id ? `/api/v1/blogs/${id}` : null, fetcher);
    return { data, error, loading: !data && !error, ...rest };
  };
  
  
  

