import { useEffect, useState } from "react";

export const useGetData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const result = await res.json();
      res.status !== 200 ? setError(result) : setData(result);
    }
setLoading(false)

url && fetchData();
  }, [url]);

  return {data, error, loading };
};
