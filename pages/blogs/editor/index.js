import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import withAuth from "@/hoc/withAuth";
const BlogsEditor = () => {
    const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage header='Blogs Editor'>
        <h1>BlogsEditor page</h1>
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(BlogsEditor)('admin');
