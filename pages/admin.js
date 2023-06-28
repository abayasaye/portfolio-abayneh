import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
const AdminPage = ({ data, loading }) => {
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>Admin page - hello: {data.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(AdminPage)('admin');
