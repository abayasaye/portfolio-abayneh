import { useEffect, useState } from "react";
import useSWR from "swr";

export const fetcher = (url) =>
  fetch(url).then(async (res) => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    }
    {
      return result;
    }
  });

export const useGetPosts = () => {
  const { data, error, ...rest } = useSWR("/api/v1/posts", fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

export const useGetPostById = (id) => {
  const { data, error, ...rest } = useSWR(
    id ? `/api/v1/posts/${id}` : null,
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};

export function useApiHandler(apiCall) {
  const [request, setRequest] = useState({
    error: null,
    data: null,
    loading: false,
  });
  const handler = async (...data) => {
    setRequest({ error: null, data: null, loading: true });
    try {
      const json = await apiCall(...data);
      setRequest({ error: null, data: json.data, loading: false });
      return json.data;
    } catch (e) {
      const message =
        (e.response && e.response.data.message) || "Ooops! Something went wrong!";
      setRequest({ error: message, data: null, loading: false });
      return Promise.reject(message);
    }
  };
  return [handler, { ...request }];
}































// export const useGetData = (url) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(true)
//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(url);
//       const result = await res.json();
//       res.status !== 200 ? setError(result) : setData(result);
//     }
// setLoading(false)

// url && fetchData();
//   }, [url]);

//   return {data, error, loading };
// };
