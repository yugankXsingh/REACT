import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TagPage = () => {
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1); // get tag from url
  const navigation = useNavigate();
  // console.log(tag);
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
        <h2 className="mt-[100px] ont-medium text-center">
          Blogs Tagged{" "}
          <span className="font-medium text-blue-500 text-center">#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
