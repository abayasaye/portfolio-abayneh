import PortfolioApi from "@/lib/api/portfolios";
import auth0 from "@/utils/auth0";
export default async function handlePortfolio(req, res) {
console.log(req.method);
  if(req.method === "GET"){
       const json = await new PortfolioApi().getById(req.query.id);
  return res.status(200).json(json.data)  
  }

  if(req.method === "PATCH"){
    try {
       const {accessToken} = await auth0.getSession(req, res)
    const json = await new PortfolioApi(accessToken).update(req.query.id, req.body, accessToken);
    return res.status(200).json(json.data);
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data );
    }
  };


  if (req.method === 'DELETE') {
    try {
      const { accessToken } = await auth0.getSession(req,res);
      const json = await new PortfolioApi(accessToken).delete(req.query.id);
      return res.json(json.data);
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data );
    }
  }
};
