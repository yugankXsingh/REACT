import React from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="w-full h-full flex-col justify-center items-center gap-y-7 relative">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
