import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Mask
            id="a"
            width={24}
            height={24}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
        </Mask>
        <G mask="url(#a)">
            <Path
                fill={props.fill}
                d="m9.298 20.937-8.32-8.304A.829.829 0 0 1 .723 12a.829.829 0 0 1 .256-.633L9.306 3.04A.941.941 0 0 1 10 2.756c.273 0 .512.102.717.308a.96.96 0 0 1 .298.701c0 .27-.1.504-.298.702L3.184 12l7.542 7.542a.975.975 0 0 1-.025 1.394.96.96 0 0 1-.701.299.96.96 0 0 1-.702-.298Z"
            />
        </G>
    </Svg>
)
export default SvgComponent