import PortfolioApi from "@/lib/api/portfolios";
import auth0 from '@/utils/auth0';
export default async function createNewPortfolio(req, res) {
  try {
    const {accessToken} = await auth0.getSession(req);
    console.log(accessToken);
    const data = req.body;
    await new PortfolioApi().createNewPortfolio(data);
    return res.status(201).json({ message: "Portfolio created successfully" });
  } catch (e) {
    return res.status(e.status || 400).json({ error: e.message });
  }
}
