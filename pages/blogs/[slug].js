import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import BlogApi from "@/lib/api/blogs";
import { Col, Row } from "reactstrap";
import { SlateView } from "slate-simple-editor";
import Avatar from "@/components/shared/Avatar";
const BlogDetail = ({ blog, author }) => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title={`${blog.title} - Abayneh Asaye`}
        metaDescription={`${blog.subTitle} - Abayneh Asaye`}
      >
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Avatar
              image={author.picture}
              title={author.name}
              date={blog.createdAt}
            />
            <hr />
            <SlateView initialContent={blog.content} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  const { data } = await new BlogApi().getAll();
  const paths = data.map(({ blog }) => {
    if (blog.slug !== "") {
      return { params: { slug: blog.slug } };
    }
  });
  return { paths: paths.filter(Boolean), fallback: false };

}

export async function getStaticProps({ params }) {
  const {
    data: { blog, author },
  } = await new BlogApi().getBySlug(params.slug);
  return { props: { blog, author } };
}
export default BlogDetail;
