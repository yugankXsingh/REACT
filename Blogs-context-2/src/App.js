import React from "react";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, useSearchParams } from "react-router-dom";


import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams(); // get search params
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1; // get page number from search params

    if (location.pathname.includes("tags")) {
      // iska matlab hai ke tag wala page show krna hai
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      // setSearchParams({ tags: tag });
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      // iska matlab hai ke category wala page show krna hai
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
      // setSearchParams({ categories: category });
    } else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);
  // console.log(location.pathname);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
    </Routes>
  );
}
