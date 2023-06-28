import { useState } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { useDeletePortfolioApi } from "@/actions/portfolios";
import PortfolioApi from "@/lib/api/portfolios";
import { Row, Col, Button } from "reactstrap";
import PortfolioCard from "@/components/PortfolioCard";
import { isAuthorized } from "@/utils/isAuth";
import {useRouter} from "next/router";






const Portfolios = ({ portfolios:initialPortfolio}) => {
  const router = useRouter();
  const [portfolios, setPortfolios] = useState(initialPortfolio)
  const { data: dataUser, loading: loadingUser } = useGetUser();
  const [deletePortfolio, {data, error}] = useDeletePortfolioApi();

//   const isAuthorized = (dataUser, role) => {
//   return (dataUser && dataUser[process.env.AUTH0_NAMESPACE + '/roles'].includes(role));
// }


const _deletePortfolio = async  (e, portfolioId)=>{
  e.stopPropagation();
  const isConfirm = confirm('Are you sure you want to delete this portfolio?')
  if (isConfirm){
    await deletePortfolio(portfolioId)
    setPortfolios(portfolios.filter((portfolio)=>portfolio._id !== portfolioId));
  }


}

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage
      title="Newest Portfolios - Abayneh Asaye"
      header='portfolios'
      className="portfolio-page">
        <Row>
          {portfolios.map((portfolio) => (
            <Col onClick={()=>{
              router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`)
            }} md="4" key={portfolio._id}>
              <PortfolioCard portfolio={portfolio}>
                {
                  dataUser && isAuthorized(dataUser,'admin') &&
                    <>
                <Button
                  onClick={(e)=>{
                    e.stopPropagation() 
                    router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`)}}                    
                    className="btn-warning mx-2">
                    Edit
                 </Button>
                <Button
                onClick={(e)=>_deletePortfolio(e, portfolio._id)}
                className="btn-danger">Delete</Button>
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
