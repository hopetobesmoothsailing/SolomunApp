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
            d="M11.5 7.99a.933.933 0 0 0-.318.056.785.785 0 0 0-.288.19l-4.322 4.321a.654.654 0 0 0-.2.498.706.706 0 0 0 .215.498.688.688 0 0 0 .505.208c.198 0 .366-.07.505-.208L11.5 9.649l3.918 3.918a.654.654 0 0 0 .498.201.706.706 0 0 0 .497-.215.688.688 0 0 0 .209-.505.687.687 0 0 0-.209-.505l-4.306-4.307a.795.795 0 0 0-.607-.245Z"
        />
    </Svg>
)
export default SvgComponent