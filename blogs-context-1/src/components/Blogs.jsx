import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col mx-auto max-w-[670px] w-10/12 gap-y-7 mt-[70px] mb-[70px] py-8">
      {loading ? (
        // if loading is true, show the Spinner component
        <Spinner />
      ) : // if loading is false, check if posts array is empty
      posts.length > 0 ? (
        // if posts array has more than 0 items, show the posts
        posts.map((post, index) => (
          <div key={post.id}>
            <Card
              // pass the post data as props to the Card component
              title={post.title}
              author={post.author}
              date={post.date}
              category={post.category}
              tags={post.tags}
              content={post.content}
            />
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
