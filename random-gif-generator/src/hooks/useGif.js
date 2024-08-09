import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  async function fetchData() {
    setLoading(true);
    try {
      const output = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
      const imageSource = output.data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    gif,
    loading,
    fetchData,
  };
};

export default useGif;
