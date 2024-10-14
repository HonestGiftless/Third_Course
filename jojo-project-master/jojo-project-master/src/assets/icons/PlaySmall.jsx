import * as React from "react"
const PlaySmall = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <rect width={20} height={20} fill="#fff" rx={10} />
    <path fill="#141414" d="m14.545 9.999-6.818 3.936V6.062L14.545 10Z" />
  </svg>
)
export default PlaySmall
