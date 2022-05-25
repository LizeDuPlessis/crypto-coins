import React from "react";
import { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <div>
      <ul className="rating">
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-1"
            value="1"
            checked={selected === 1}
          />
          <label htmlFor="num-1">1</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-2"
            value="2"
            checked={selected === 2}
          />
          <label htmlFor="num-2">2</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-3"
            value="3"
            checked={selected === 3}
          />
          <label htmlFor="num-3">3</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-4"
            value="4"
            checked={selected === 4}
          />
          <label htmlFor="num-4">4</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-5"
            value="5"
            checked={selected === 5}
          />
          <label htmlFor="num-5">5</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-6"
            value="6"
            checked={selected === 6}
          />
          <label htmlFor="num-6">6</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-7"
            value="7"
            checked={selected === 7}
          />
          <label htmlFor="num-7">7</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-8"
            value="8"
            checked={selected === 8}
          />
          <label htmlFor="num-8">8</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-9"
            value="9"
            checked={selected === 9}
          />
          <label htmlFor="num-9">9</label>
        </li>
        <li>
          <input
            type="radio"
            name="rating"
            onChange={handleChange}
            id="num-10"
            value="10"
            checked={selected === 10}
          />
          <label htmlFor="num-10">10</label>
        </li>
      </ul>
    </div>
  );
}

export default RatingSelect;
