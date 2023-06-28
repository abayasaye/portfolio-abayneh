import axios from "axios";
import BaseApi from "./baseApi";

class BlogApi extends BaseApi {
  constructor (accessToken, subpath){
    super(accessToken, "/blogs")
  }
}

export default BlogApi;
