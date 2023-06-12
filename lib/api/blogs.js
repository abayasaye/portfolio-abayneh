import axios from "axios";
import BaseApi from "./baseApi";

class BlogApi extends BaseApi {
  constructor (accessToken, subpath){
    super(accessToken, "/blogs")
  }

  getByUser() {
    return axios.get(`${this.apiUrl}`, this.config);
  }
}

export default BlogApi;
