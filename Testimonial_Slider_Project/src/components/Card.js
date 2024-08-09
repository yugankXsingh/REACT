import React from "react";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative ">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-25"
          src={review.image}
          alt="testimonial"
        ></img>

        <div className="w-[140px] h-[140px] rounded-full bg-violet-500 absolute left-[10px] top-[-6px] z-[-20]"></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize tracking-wider">
          {review.name}
        </p>
      </div>

      <div className="text-center">
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className="mx-auto mt-5 text-violet-400">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      <div className="mx-auto mt-5 text-violet-400">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
