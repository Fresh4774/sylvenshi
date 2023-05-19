import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 30} height={props.height || 30}
    {...props}
  >
    <path d="M19 24H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142H5.141C4.511 6.333 4 6.845 4 7.475v9.05c0 .63.511 1.142 1.141 1.142h13.718zM12 13.609 5.772 9.288 5.758 17h12.457V9.288L12 13.609zM17.913 7A1908.257 1908.257 0 0 0 12 11.153L6.053 7h11.86z" />
  </svg>
)
export default SvgComponent