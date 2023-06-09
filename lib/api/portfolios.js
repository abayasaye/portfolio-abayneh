import axios from "axios";
import BaseApi from "./baseApi";

class PortfolioApi extends BaseApi {
  constructor (accessToken, subpath){
super(accessToken, "/portfolios");
  }
  delete(id) {
    return axios.delete(`${this.apiUrl}/${id}`, this.config);
  }
}

export default PortfolioApi;
