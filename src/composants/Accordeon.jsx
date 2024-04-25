import React from "react";
import { useState } from "react";

const Accordeon = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="bulle">
        <p>Fiabilité</p>
        <button
          className="button"
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Accordeon;
