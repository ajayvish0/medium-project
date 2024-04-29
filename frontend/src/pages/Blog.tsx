import { BlogPostType, useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import Blogid from "./Blogid";
import { Appbar } from "../components/Appbar";
import Specificblog from "../Loaders/Specificblog";

const Blog = () => {
  const { id } = useParams();

  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div className="   py-[6rem] md:flex md:justify-center  px-[4rem]  ">
        <Specificblog />
      </div>
    );
  }
  return (
    <div className="">
      <Appbar usedfor="navbar" />

      <div className="flex md:justify-center    px-10 pb-9  pt-7 xl:pt-10 ">
        <Blogid blog={blog as BlogPostType} />
      </div>
    </div>
  );
};

export default Blog;
