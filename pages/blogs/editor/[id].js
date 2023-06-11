import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { Editor } from "slate-simple-editor";
import { toast } from "react-toastify";
import { useGetBlog, useUpdateBlogApi } from "@/actions/blogs";
import { useRouter } from "next/router";
const BlogsUpdateEditor = ({ data, loading }) => {
  const router = useRouter();
  const { data: blogData } = useGetBlog(router.query.id);
  const [updateBlog, { data: updatedBlog, error, loading: updateLoading }] =
    useUpdateBlogApi(router.query);

  const _updateBlog = async (data) => {
    await updateBlog(router.query.id, data);
    toast.success("blog updated successfully");
  };
  if (error) {
    toast.error(error);
  }
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        {blogData && blogData.content && (
          <Editor
            header="Update Your Blog..."
            initialContent={blogData.content}
            onSave={_updateBlog}
            loading={updateLoading}
          />
        )}
      </BasePage>
    </BaseLayout>
  );
};
export default withAuth(BlogsUpdateEditor)("admin");
