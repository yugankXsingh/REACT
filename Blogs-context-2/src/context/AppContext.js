import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom"; 


export const AppContext = createContext();

// export default AppContext;

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // data filling

  async function fetchBlogPosts(page = 1, tags = null, categories) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tags) {
      url += `&tags=${tags}`;
      // setSearchParams({ tags: tags });
    }
    if (categories) {
      url += `&categories=${categories}`;
      // setSearchParams({ categories: categories });
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setPage(data.page);
      setTotalPages(data.totalPages);
      setPosts(data.posts);
    } catch (error) {
      console.log({ "Error in fetchBlogPosts": error });
      setPage(1);
      setTotalPages(null);
      setPosts([]);
    }
    setLoading(false);
  }

  // handle pagination
  function handlePagination(newPage) {
    setPage(newPage);
    fetchBlogPosts(newPage);
    navigate({ search: `?page=${newPage}` });
    // setSearchParams({ page: newPage });
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePagination,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// export { AppContextProvider };
