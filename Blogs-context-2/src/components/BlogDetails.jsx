import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="mt-[50px]">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-medium text-lg">{post.title}</span>
      </NavLink>

      <p className="text-sm mt-2">
        By <span className="italic mr-1">{post.author}</span>
        on
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="ml-1 font-bold underline">{post.category}</span>
        </NavLink>
      </p>

      <p className="text-[10px] mt-[4px]">
        Posted on:
        <span>{post.date}</span>
      </p>
      <p className="text-md mt-[14px]">{post.content}</p>
      <div className="flex gap-x-3 mt-3">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-xs text-blue-700 underline font-bold">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
