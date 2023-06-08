import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { Editor } from "slate-simple-editor";

const BlogsEditor = ({ data, loading }) => {
  const saveBlog = (data) => {
    console.log(data);
  };
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <Editor onSave={saveBlog} />
        <h1>BlogsEditor page</h1>
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(BlogsEditor)("admin");
