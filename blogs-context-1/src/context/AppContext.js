import { createContext } from "react";
import { useState } from "react";
import { baseUrl } from "../baseUrl";
import React from "react";

export const AppContext = createContext();

// export default AppContext;

export function AppContextProvider({ children  }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // data filling

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
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

  return <AppContext.Provider value={value}>{children }</AppContext.Provider>;
}

// export { AppContextProvider };
