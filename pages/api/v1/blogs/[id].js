import BlogApi from "@/lib/api/blogs";
import auth0 from "@/utils/auth0";
export default async function handleBlog(req, res) {
console.log(req.method);
  if(req.method === "GET"){
       const json = await new BlogApi().getById(req.query.id);
  return res.status(200).json(json.data)  
  }

  if(req.method === "PATCH"){
    try {
       const {accessToken} = await auth0.getSession(req, res)
    const json = await new BlogApi(accessToken).update(req.query.id, req.body, accessToken);
    return res.status(200).json(json.data);
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data );
    }
  };
};
