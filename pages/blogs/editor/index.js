import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { Editor } from "slate-simple-editor";
import { useCreateBlogApi } from "@/actions/blogs";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const BlogsEditor = ({ data, loading }) => {
  const router = useRouter();
  const [createBlog, { data: blogData, error, loading: blogLoading }] =
    useCreateBlogApi();

  const saveBlog = async (data) => {
    const createdBlog = await createBlog(data);
    router.push("/blogs/editor/[id]", `/blogs/editor/${createdBlog._id}`);
  };
  if (error) {
    toast.error(error);
  }

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <Editor onSave={saveBlog} loading={blogLoading} />
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(BlogsEditor)("admin");
