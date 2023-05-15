import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
const Portfolios = ({ posts }) => {
  const renderPosts = ()=>{
    return posts.map(post=> <li key={post.id}>{post.title}</li>)
  }
  console.log(posts);
  return (
    <BaseLayout>
      <h1>portfolios page</h1>
      <ul>{renderPosts()}</ul>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (e) {
    console.log(e);
  }

  return {posts: posts.slice(0, 10)}
};

export default Portfolios;
