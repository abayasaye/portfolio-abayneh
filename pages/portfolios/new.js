import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Col, Row } from "reactstrap";
import PortfolioForm from "@/components/PortfolioForm";
import { portfolioCreate } from "@/actions/portfolios";
import withAuth from "@/hoc/withAuth";
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
export default withAuth(CreatePortfolio)('admin');
