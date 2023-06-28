import Link from "next/link";
import moment from "moment";


const BlogItem = ({ blog }) => (
  <div>
    <div className="post-preview clickable">
      <Link href="/blogs/[slug]" as={`/blogs/${blog.slug}`}>
        <h2 className="post-title">{blog.title}</h2>
        <h3 className="post-subtitle">{blog.Subtitle}</h3>
      </Link>

      <p className="post-meta">
        Posted by
        <Link href="#"> {blog.author.name}</Link>- {moment(blog.createdAt).format('llll')}
      </p>
    </div>
  </div>
);
export default BlogItem;
