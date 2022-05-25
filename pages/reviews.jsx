import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../Components/Reviews/Card";
import FeedbackList from "../Components/Reviews/FeedbackList";
import FeedbackData from "../Components/Reviews/FeedbackData";
import { useState } from "react";
import FeedbackStats from "../Components/Reviews/FeedbackStats";
import FeedbackForm from "../Components/Reviews/FeedbackForm";

function Reviews() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this item?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  };
  return (
    <Card>
      <FeedbackForm handleAdd={addFeedback} />

      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </Card>
  );
}

export default Reviews;
