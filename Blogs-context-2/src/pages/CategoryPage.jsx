import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  const navigation = useNavigate();
  return (
    <div>
      <Header />
      <div>
        <button
          className="fixed top-5 left-5 bg-blue-500 text-white px-3 py-1 rounded-md"
          onClick={() => {
            navigation(-1);
          }}
        >
          back
        </button>
        <h2 className="mt-[100px] text-center text-xl font-bold">
          Blogs on <span>{category}</span>{" "}
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
