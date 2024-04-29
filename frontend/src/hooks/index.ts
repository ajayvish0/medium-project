import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
export interface BlogType {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

export interface BlogPostType {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogPostType | null>(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setBlog(response.data.posts);
        setLoading(false);
      });
  }, [id]);
  return { loading, blog };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("authorization"),
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);
  return { loading, blogs };
};