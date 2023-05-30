import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
// import withAuth from "@/hoc/withAuth";
import { Col, Row } from "reactstrap";
import PortfolioForm from "@/components/PortfolioForm";
import { portfolioCreate } from "@/actions/portfolios";
const CreatePortfolio = ({ data, loading }) => {
  const newPortfolio = (data)=>{
    alert(JSON.stringify(data))
    portfolioCreate(data)
  }
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage header="Create Portfolio">
        <Row>
          <Col md='8'>
            {
              <PortfolioForm onSubmit={newPortfolio}/>
            }
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default CreatePortfolio;
