import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import withAuth from "@/hoc/withAuth";
const Dashboard = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage header='DAHBOARD'>
        <h1>Dashboard page</h1>
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(Dashboard)('admin');
