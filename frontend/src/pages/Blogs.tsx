import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import BlogContent from "../components/BlogContent";
import { useBlogs } from "../hooks";
import Layout from "../Loaders/Layout";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Layout />
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="w-full">
        <Appbar usedfor="navbar" />
      </div>
      <div className="px-5 pt-7 md:pt-9 xl:px-[10rem] lg:pr-4    ">
        <div className="  max-lg:order-2 ">
          {blogs.map((blog) => (
            <div className="border-b-2 border-slate-200  mb-4">
              <Link to={`/blog/${blog.id}`}>
                <BlogContent
                  id={blog.id}
                  authorName={blog.author.name || "Anonymour"}
                  title={blog.title}
                  publishDate="Apr 24, 2024"
                  content={blog.content}
                  smallTitle="The Writer’s Guide"
                  size="blogs"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
