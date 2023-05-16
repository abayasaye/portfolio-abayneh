import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
// import { useGetData } from "@/actions";
import useSWR from 'swr'
const fetcher = (url) =>fetch(url).then(res => res.json())
const Portfolios = () => {
  const { data, error, loading } = useSWR('/api/v1/posts',fetcher);

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link href={`portfolios/${post.id}`}>{post.title}</Link>
      </li>
    ));
  };
  return (
    <BaseLayout>
      <BasePage>
        <h1>portfolios page</h1>
        {
          loading && <img className="" width={25} src={"load.gif"}/>
        }
        {
          data && <ul>{renderPosts(data)}</ul>
        }{
          error && <div className="alert alert-danger">{error.message}</div>
        }
        
      </BasePage>
    </BaseLayout>
  );
};
export default Portfolios;
