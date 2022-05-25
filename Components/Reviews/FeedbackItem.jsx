import { FaTimes } from "react-icons/fa";
import React from "react";
import Card from "./Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    <>
      <div className="bg-white rounded mx-5 my-5 py-5 px-5">
        <div className="text-3xl bg-pink-500 rounded-full w-14 h-14 relative text-center border-solid border-2 border-stone-200 ">
          {item.rating}
        </div>
        <button className="close" onClick={() => handleDelete(item.id)}>
          <FaTimes color="purple" />
        </button>
        <div className="text-lg">
          <p>{item.text}</p>
        </div>
      </div>
    </>
  );
}

export default FeedbackItem;
