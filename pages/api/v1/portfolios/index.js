import PortfolioApi from "@/lib/api/portfolios";
import auth0 from "@/utils/auth0";


export default async function createNewPortfolio(req, res) {
  try {
    const {accessToken} = await auth0.getSession(req, res);
    const json = await new PortfolioApi(accessToken).createNewPortfolio(req.body);
    return res.status(200).json(json.data);
  } catch (e) {
    console.log("Error creating portfolio");
    return res.status(e.status || 422).json(e.response.data );
  }
}
