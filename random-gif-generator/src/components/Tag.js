import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Tag() {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div
      className="w-1/2 rounded-lg bg-blue-400 border border-black
     flex flex-col items-center gap-y-5 mt-[15px]"
    >
      <h1 className="mt-[15px] text-center text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-[350px] mt-[15px] object-cover">
          <img
            src={gif}
            alt="gif"
            className="w-[450px] h-[350px] rounded-lg object-center object-cover"
          />
        </div>
      )}

      <input
        className="w-10/12 mb-[3px] text-center py-2 text-lg font-bold rounded-lg"
        type="text"
        onChange={changeHandler}
        value={tag}
      />

      <button
        className="w-10/12 mb-[20px] bg-yellow-400 py-2 text-lg font-bold rounded-lg"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
