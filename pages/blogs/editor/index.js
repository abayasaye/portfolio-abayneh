import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { Editor } from "slate-simple-editor";
import { useCreateBlogApi } from "@/actions/blogs";
import { toast } from "react-toastify";
const BlogsEditor = ({ data, loading }) => {
  const [createBlog, { data: blogData, error }] = useCreateBlogApi();

  const saveBlog = async (data) => {
    await createBlog(data);
    alert("Blog saved");
  };

  if(error){
toast.error(error);
  }

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
