import React from "react";

function FeedbackStats({ feedback }) {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  // console.log(average);
  return (
    <div className="flex justify-around">
      <h4>
        <span>{feedback.length} </span>
        Reviews
      </h4>
      <h4>
        Average Rating: <span>{isNaN(average) ? 0 : Math.round(average)}</span>
      </h4>
    </div>
  );
}

export default FeedbackStats;
