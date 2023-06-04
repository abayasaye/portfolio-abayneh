import axios from "axios";
import { useState } from "react";
import { useApiHandler } from ".";
export const createPortfolio = (data)=>  axios.post("/api/v1/portfolios", data);


export const useCreatePortfolioApi =  () => useApiHandler(createPortfolio)
