import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";
import { Row, Col, Button } from "reactstrap";
import PortfolioCard from "@/components/PortfolioCard";
import {useRouter} from "next/router";
const halper = ()=>{

}


const Portfolios = ({ portfolios}) => {
  const router = useRouter();
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage
      header='portfolios'
      className="portfolio-page">
        <Row>
          {portfolios.map((portfolio) => (
            <Col onClick={()=>{
              router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
            }} md="4" key={portfolio._id}>
              <PortfolioCard portfolio={portfolio}>
                {
                  dataUser && 
                    <>
                <Button className="btn-warning mx-2">Edit</Button>
                <Button className="btn-danger">Delete</Button>
                </>
                }
              
              </PortfolioCard>
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
