import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useRouter } from "next/router";
import { useGetUser } from "@/actions/user";
import PortfolioApi from "@/lib/api/portfolios";

const portfolio = ({portfolio}) => {
  const router = useRouter();
  const { data: dataUser, loading: loadingUser } = useGetUser();

  return (
    <BaseLayout user={dataUser} loading={loadingUser}>
      <BasePage header='Portfolio Details'>
   {
    JSON.stringify(portfolio)
   }
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


export const getStaticPaths = async () =>{
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  const paths = portfolios.map((portfolio) => {
    return {
      params: {
        id: portfolio._id
      }
    }
  })

  return {
      paths,
      fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const json = await new PortfolioApi().getById(params.id);
    const portfolio = json.data;
    return {
      props: {
        portfolio
      }
    };
};


export default portfolio;
