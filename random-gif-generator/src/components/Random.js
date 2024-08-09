// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random() {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState("false");

  // async function fetchData() {
  //   setLoading(true);
  //   try {
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const output = await axios.get(url);
  //     const imageSource = output.data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div
      className="w-1/2 rounded-lg bg-green-400 border border-black
     flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-center text-2xl underline uppercase font-bold">
        A Random Gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-[350px] mt-[15px] object-cover">
          <img
            src={gif}
            alt="gif"
            className=" w-[450px] h-[350px] rounded-lg object-center object-cover"
          />
        </div>
      )}
      <button
        className="w-10/12 mb-[20px] bg-yellow-400 py-2 text-lg font-bold rounded-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
