import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useRouter } from "next/router";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";
import { formatDate } from "@/halpers/fumctions";

const portfolio = ({ portfolio }) => {
  const router = useRouter();
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout navClass="transparent" user={dataUser} loading={loadingUser}>
      <BasePage
      
      noWrapper
      indexPage
        title={`${portfolio.title} - Abayneh Asaye`}
        metaDescription={`${portfolio.description} - Abayneh Asaye`}>
        <div className="portfolio-detail">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">
              <h1 className="cover-heading">{portfolio.title}</h1>
              <p className="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate)}</p>
              <p className="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
              <p className="lead">{portfolio.description}</p>
              <p className="lead">
                <a href={portfolio.companyWebsite} target="_blank" className="btn btn-lg btn-secondary">
                  Visit Company
                </a>
              </p>
            </main>
          </div>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

//  export const getServerSideProps = async ({query}) =>
//  {
//   const json = await new PortfolioApi().getById(query.id);
//   const portfolio = json.data;
//   return {
//     props: {
//       portfolio
//     }
//   };
//  }

export const getStaticPaths = async () => {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  const paths = portfolios.map((portfolio) => {
    return {
      params: {
        id: portfolio._id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return {
    props: {
      portfolio,
    },
  };
};

export default portfolio;
