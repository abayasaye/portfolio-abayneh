import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";
import { Row, Col } from "reactstrap";
import PortfolioCard from "@/components/PortfolioCard";

const Portfolios = ({ portfolios }) => {
  const { data: dataUser, loading: loadingUser } = useGetUser();
  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage
      header='portfolios'
      className="portfolio-page">
        <Row>
          {portfolios.map((portfolio) => (
            <Col md="4" key={portfolio._id}>
              <PortfolioCard portfolio={portfolio} />
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export const getStaticProps = async () => {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: {
      portfolios,
    },
  };
};

export default Portfolios;
