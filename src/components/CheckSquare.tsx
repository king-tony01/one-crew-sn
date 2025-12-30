import * as React from "react";

const CheckSquare: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    fill="none"
    viewBox="0 0 17 16"
  >
    <path
      fill="#F6821F"
      d="M12 1.564a2 2 0 0 1 2 2v1.03l-1.5 1v-2.03a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.199l1.5-1v5.365a2 2 0 0 1-1.796 1.989l-.204.01H2l-.204-.01A2 2 0 0 1 .01 13.768L0 13.564v-10a2 2 0 0 1 2-2z"
    ></path>
    <mask id="path-2-inside-1_5_280" fill="#fff">
      <path d="M3 7.378 12.565 0l3.807 4.936-9.564 7.378z"></path>
    </mask>
    <path
      fill="#F8AF15"
      d="m6.808 12.314-.792.61.61.793.792-.611zm9.564-7.378-.61-.792-9.565 7.378.61.792.611.792 9.565-7.378zm-9.564 7.378.791-.61-3.807-4.937-.792.61-.792.612 3.808 4.936z"
      mask="url(#path-2-inside-1_5_280)"
    ></path>
  </svg>
);

export default CheckSquare;
