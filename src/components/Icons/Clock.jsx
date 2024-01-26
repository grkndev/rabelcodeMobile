import * as React from "react";
import Svg, { Path } from "react-native-svg";
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
      d="M4.325 4.295a.375.375 0 0 0-.53.53l1.89 1.89V9.06a.375.375 0 1 0 .75 0v-2.5c0-.1-.04-.195-.11-.265l-2-2Z"
    />
    <Path
      fill="#00FFA3"
      fillOpacity={0.5}
      fillRule="evenodd"
      d="M5 1.5h2.12a4 4 0 0 1 4 4v2.12a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5.5a4 4 0 0 1 4-4Zm2.12 9.37a3.255 3.255 0 0 0 3.25-3.25V5.5a3.255 3.255 0 0 0-3.25-3.25H5A3.255 3.255 0 0 0 1.75 5.5v2.12A3.255 3.255 0 0 0 5 10.87h2.12Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
