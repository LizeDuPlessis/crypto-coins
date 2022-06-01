import { FaTimes } from "react-icons/fa";
import React from "react";

function FeedbackItem({ item, handleDelete }) {
  return (
    <>
      <div className="bg-white rounded mx-5 my-5 py-5 px-5">
        <div className="num">{item.rating}</div>
        <button className="close" onClick={() => handleDelete(item.id)}>
          <FaTimes color="orange" />
        </button>
        <div className="text-lg">
          <p>{item.text}</p>
        </div>
      </div>
    </>
  );
}

export default FeedbackItem;
