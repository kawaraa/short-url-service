import React from "react";

export default ({ buttons, setOffset, pageNumber, limit }) => {
  if (buttons < 1) return "";

  const buttonItems = [];
  for (let i = 0; i < buttons; i += 1) {
    buttonItems.push(
      <button
        key={i}
        onClick={() => setOffset(i * limit)}
        className={`pagination btn ${pageNumber === i ? "active" : ""}`}>
        {i + 1}
      </button>
    );
  }
  return <div className="pagination wrapper">{buttonItems}</div>;
};
