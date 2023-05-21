import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import Link from "next/link";
import { useGetPosts } from "@/actions";
import { useGetUser } from "@/actions/user";
import useSWR from "swr";


const Portfolios = () => {
  const { data, error, loading } = useGetPosts();
const {data: dataUser, loading: loadingUser} = useGetUser()

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link className="lists" href={`portfolios/${post.id}`}>
          {post.title}
        </Link>
      </li>
    ));
  };
  return (
    <BaseLayout     
    user={dataUser}
    loading={loadingUser}>
      <BasePage>
        <h1>portfolios page</h1>
        {loading && (
          <img className="" width={25} src={'../../././load.gif'} />
        )}
        {data && <ul>{renderPosts(data)}</ul>}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};
export default Portfolios;
