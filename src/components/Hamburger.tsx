import React from "react";

const Hamburger: React.FC<React.SVGProps<SVGAElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
  >
    <path
      d="M1 1H14.5M1 7H14.5M1 13H14.5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Hamburger;
