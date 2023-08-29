import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Lightining = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    className="icon line-color"
    data-name="Line Color"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      d="m7 12 5 2-1 7 6-9-4-2 1-7-7 9z"
      style={{
        fill: "none",
        stroke: "#FFF",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </Svg>
)
export default Lightining
