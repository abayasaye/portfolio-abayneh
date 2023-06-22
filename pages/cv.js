import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Row, Col } from "reactstrap";
const Cv = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage 
      title="CV - Abayneh Asaye"
      >
      <Row className="mt-3">
        <Col md={{size: 8, offset: 2}} >
          <iframe style={{width:'100%', height: '800px'}} src="/cv-abayneh.pdf"/>
        </Col>
      </Row>
        <h1>cv page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
