import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={23}
        height={23}
        fill="none"
        {...props}
    >
        <Path
            fill={props.fill}
            d="M11.5 15.01a.932.932 0 0 1-.318-.056.784.784 0 0 1-.288-.19l-4.322-4.321a.654.654 0 0 1-.2-.498.706.706 0 0 1 .215-.498.688.688 0 0 1 .505-.208c.198 0 .366.07.505.208l3.903 3.904 3.918-3.918a.654.654 0 0 1 .498-.201.706.706 0 0 1 .497.215.687.687 0 0 1 .209.505c0 .198-.07.366-.209.505l-4.306 4.307a.794.794 0 0 1-.607.245Z"
        />
    </Svg>
)
export default SvgComponent