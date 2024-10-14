import * as React from "react"
const Share = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M8.333 2.5v1.667H4.167v11.666h11.666v-4.166H17.5v5c0 .46-.373.833-.833.833H3.333a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h5Zm6.423 3.923L10 11.178 8.822 10l4.755-4.756L10.833 2.5H17.5v6.667l-2.744-2.744Z"
    />
  </svg>
)
export default Share
