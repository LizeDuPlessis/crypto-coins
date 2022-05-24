import React from "react";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({ handleDelete, feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <>
      <form>
        <input type="text" placeholder="Write review here" />
        <button className="">Submit</button>
      </form>
      <div>
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}
