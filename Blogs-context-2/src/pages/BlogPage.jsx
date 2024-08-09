import React, { useContext } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import BlogDeatils from "../components/BlogDetails";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  const newBaseUrl = "https:///codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      console.log({ "Error in fetchRelatedBlogs": error });
      setBlog(null);
      setRelatedBlogs([]);
    }
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="relative">
      <Header />
      <div>
        <button
        className="fixed top-5 left-5 bg-blue-500 text-white px-3 py-1 rounded-md"
         onClick={() => navigation(-1)}>Go back</button>
      </div>
      {loading ? (
        <Spinner />
      ) : blog ? (
        <div className="flex flex-col mx-auto max-w-[670px] w-10/12 gap-y-7 py-8">
          <BlogDeatils post={blog} />
          <h2 className="text-2xl font-bold underline">Related Blogs</h2>
          {relatedBlogs.map((post) => (
            <BlogDeatils post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <h2>Blog not found</h2>
      )}
    </div>
  );
};

export default BlogPage;
