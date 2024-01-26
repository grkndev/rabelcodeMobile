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
      d="M6.224 18.429a.74.74 0 0 0 .53.21.77.77 0 0 0 .53-.21l9.33-9.34v8.06c0 .414.336.75.75.75a.74.74 0 0 0 .76-.75V7.416a.749.749 0 0 0-.897-.897H7.494a.75.75 0 1 0 0 1.5h8.07l-9.34 9.34a.75.75 0 0 0 0 1.07Z"
    />
  </Svg>
)
export default SvgComponent