import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M16.78 17.85a.77.77 0 0 0 .53.21.74.74 0 0 0 .755-.745.75.75 0 0 0-.225-.535L8.49 7.43h8.14a.75.75 0 0 0 0-1.5H6.784A.75.75 0 0 0 6 7.006v9.564a.74.74 0 0 0 .7.75l-.01-.01a.75.75 0 0 0 .75-.75V8.5l9.34 9.35Z"
    />
  </Svg>
)
export default SvgComponent
