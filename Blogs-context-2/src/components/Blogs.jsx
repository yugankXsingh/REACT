import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
// import Card from "./Card";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col mx-auto max-w-[670px] mb-[50px] w-10/12 gap-y-7 py-8">
      {loading ? (
        // if loading is true, show the Spinner component
        <Spinner />
      ) : // if loading is false, check if posts array is empty
      posts.length > 0 ? (
        // if posts array has more than 0 items, show the posts
        posts.map((post, index) => (
          <div key={post.id}>
            <BlogDetails post={post} />
            <div className="h-[1px] bg-slate-400 mt-3"></div>
          </div>
        ))
      ) : (
        // if posts array is empty, show a message
        <div>No posts found</div>
      )}
    </div>
  );
};

export default Blogs;
