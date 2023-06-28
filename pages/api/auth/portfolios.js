import PortfolioApi from "@/lib/api/portfolios";


const portfolios = async (req, res) => {
  try {
    const data = req.body;
    await new PortfolioApi().createNewPortfolio(data);
    return res.status(200).json({ message: "Portfolios created successfully" });
  } catch (e) {
    return res.status(e.status || 400).end(e.message);
  }
};

export default portfolios;
