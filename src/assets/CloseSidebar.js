import * as React from "react";
const SvgCloseSidebar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="CloseSidebar_svg__h-4 CloseSidebar_svg__w-4"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <path d="M9 3v18" />
  </svg>
);
export default SvgCloseSidebar;
