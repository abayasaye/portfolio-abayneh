import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { withAuth } from "@/utils/auth0";
const SecretSSR = ({ user, title }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>SecretSSR page - hello: {user.name}</h1>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>
  );
};

const getTitle = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: "My new title!" });
    }, 500);
  });
};

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
  const title = await getTitle();
  return title;
})();

export default SecretSSR;

// export const getServerSideProps = async ({ req, res }) => {
//   const user = await authrizeUser(req, res);

//   return {
//     props: { user },
//   };
// };
