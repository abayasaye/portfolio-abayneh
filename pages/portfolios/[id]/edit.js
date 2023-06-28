import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/router";
import { useGetPortfolio, useUpdatePortfolioApi } from "@/actions/portfolios";
import PortfolioForm from "@/components/PortfolioForm";
import { Row, Col } from "reactstrap";
import { toast } from 'react-toastify';

const portfolioEdit = ({data: user}) => {

  const router = useRouter();
  const [updatePortfolio, {error}] = useUpdatePortfolioApi();
  const { data: initialData } = useGetPortfolio(router.query.id);

  const _updatePortfolio = async (data)=>{

    await updatePortfolio(router.query.id, data)
    toast.success("Portfolio updated successfully", { autoClose: 3000 });
  }
  // debugger;
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col md="8">
            {initialData && (
              <PortfolioForm
                onSubmit={ _updatePortfolio}
                initialData={initialData}
              />
            )}
            {
              error && 
              <div className="alert alert-danger mt-2">{error}</div>
            }
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(portfolioEdit)("admin");
