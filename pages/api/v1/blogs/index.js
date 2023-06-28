import blogApi from "@/lib/api/blogs";
import auth0 from "@/utils/auth0";


export default async function createBlog(req, res) {
  try {
    const {accessToken} = await auth0.getSession(req, res);
    const json = await new blogApi(accessToken).create(req.body);
    return res.json(json.data);
  } catch (e) {
    console.log("Error creating blog");
    return res.status(e.status || 422).json(e.response.data );
  }
}
