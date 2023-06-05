import axios from "axios";
import { useState } from "react";
import { useApiHandler } from ".";
import useSWR from "swr";
import { fetcher } from "./index";


export const createPortfolio = (data)=>  axios.post("/api/v1/portfolios", data);


export const updatePortfolio = (id, data)=>  axios.patch(`/api/v1/portfolios/${id}`, data);


export const useCreatePortfolioApi =  () => useApiHandler(createPortfolio)

export const useUpdatePortfolioApi =  () => useApiHandler(updatePortfolio)


export const useGetPortfolio = (id) => {
  const { data, error, ...rest } = useSWR(id ? `/api/v1/portfolios/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest };
};


