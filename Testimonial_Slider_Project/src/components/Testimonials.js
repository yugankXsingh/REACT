import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import React, { useState } from "react";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0); // index of the current review

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10
     transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />

      <div className="flex justify-center text-3xl mt-5 text-violet-400 font-bold">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={surpriseHandler}
          className="bg-violet-400 hover:bg-violet-600 transition-all duration-200
        cursor-pointer rounded-md px-10 py-2 font-bold text-white mt-5"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
