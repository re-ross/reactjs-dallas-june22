import { useState } from "react";

const Hello = ({ name, date }) => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  const handleClickMinus = () => {
    setLikes(likes - 1);
  };

  return (
    <div style={{ margin: 32 }}>
      <h2>Hello, {name}</h2>
      <p>{date}</p>
      <button
        onClick={handleClick}
        style={{
          border: "1px solid rebeccapurple",
          borderRadius: 4,
          margin: 32,
          padding: "6px 12px",
          fontSize: 48,
        }}
      >
        Increment
      </button>
      <button
        onClick={handleClickMinus}
        style={{
          border: "1px solid rebeccapurple",
          borderRadius: 4,
          margin: 32,
          padding: "6px 12px",
          fontSize: 48,
        }}
      >
        Decrement
      </button>
      <div
        style={{
          marginLeft: 32,
          backgroundColor: "pink",
          padding: 16,
          color: "darkblue",
        }}
      >
        {likes}
      </div>
    </div>
  );
};

export default Hello;
