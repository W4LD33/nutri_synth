import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Keyboard = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.202}
      d="M6.822 11.8h.01m2.192 4.404h.011m2.191-4.405h.011m2.192 4.405h.01m2.192-4.405h.011m2.192 4.405h.01m2.192-4.405h.011M5.941 20.61h14.976c1.233 0 1.85 0 2.321-.24.415-.211.752-.548.963-.963.24-.47.24-1.087.24-2.321v-6.167c0-1.233 0-1.85-.24-2.321a2.203 2.203 0 0 0-.963-.962c-.47-.24-1.088-.24-2.321-.24H5.941c-1.234 0-1.85 0-2.321.24a2.202 2.202 0 0 0-.963.962c-.24.471-.24 1.088-.24 2.321v6.167c0 1.233 0 1.85.24 2.321.211.415.548.752.963.963.47.24 1.087.24 2.32.24Z"
    />
  </Svg>
)
export default Keyboard
