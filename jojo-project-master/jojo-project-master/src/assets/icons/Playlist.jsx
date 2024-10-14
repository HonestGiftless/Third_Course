import * as React from "react"
const Playlist = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M2 18h10v2H2v-2Zm0-7h14v2H2v-2Zm0-7h20v2H2V4Zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83Z"
    />
  </svg>
)
export default Playlist
