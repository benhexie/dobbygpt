import * as React from "react";
const SvgSendBtn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    strokeWidth={2}
    className="SendBtn_svg__h-4 SendBtn_svg__w-4 SendBtn_svg__m-1 SendBtn_svg__md:m-0"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
    />
  </svg>
);
export default SvgSendBtn;
