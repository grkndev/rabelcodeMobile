import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#00FFA3"
      fillOpacity={0.5}
      fillRule="evenodd"
      d="m6.73 1.905 3 1.665a1.5 1.5 0 0 1 .77 1.315v3.23a1.5 1.5 0 0 1-.77 1.315l-3 1.665a1.5 1.5 0 0 1-1.46 0l-3-1.665a1.5 1.5 0 0 1-.77-1.315v-3.23a1.5 1.5 0 0 1 .77-1.315l3-1.665a1.5 1.5 0 0 1 1.46 0Zm2.615 6.87a.765.765 0 0 0 .385-.66v-3.23a.765.765 0 0 0-.385-.66l-3-1.665a.75.75 0 0 0-.73 0l-3 1.665a.765.765 0 0 0-.385.66v3.23a.765.765 0 0 0 .385.66l3 1.665a.75.75 0 0 0 .73 0l3-1.665Z"
      clipRule="evenodd"
    />
    <Path
      fill="#00FFA3"
      fillOpacity={0.5}
      d="M8.34 4.6 6.225 5.775a.45.45 0 0 1-.45 0L3.66 4.6a.375.375 0 1 0-.365.655L5.41 6.43c.07.037.144.067.22.09v2.23a.375.375 0 0 0 .75 0V6.5a.97.97 0 0 0 .21-.085L8.705 5.24a.375.375 0 0 0-.365-.655V4.6Z"
    />
  </Svg>
)
export default SvgComponent
