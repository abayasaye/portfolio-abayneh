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
          <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner page-cover">
              <h1 class="cover-heading">{portfolio.title}</h1>
              <p class="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate)}</p>
              <p class="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
              <p class="lead">{portfolio.description}</p>
              <p class="lead">
                <a href={portfolio.companyWebsite} target="_blank" class="btn btn-lg btn-secondary">
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
