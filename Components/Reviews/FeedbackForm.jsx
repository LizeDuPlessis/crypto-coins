import React from "react";
import { useState } from "react";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Write more than 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
    }
    setText("");
  };

  return (
    <div className="bg-white rounded mx-5 my-5 py-5 px-5 text-center">
      <form onSubmit={handleSubmit}>
        <h2>How would you rate the crypto currencies?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <input
          type="text"
          placeholder="Write review here"
          onChange={handleTextChange}
          value={text}
        />
        <Button type="submit" isDisabled={btnDisabled}>
          Send
        </Button>
        {message && <div>{message}</div>}
      </form>
    </div>
  );
}

export default FeedbackForm;
