import axios from "axios";

export const portfolioCreate = (data) => {
 return axios.post("/api/v1/portfolios", data);
};

