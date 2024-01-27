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
            fill={props.fill}
            d="M9.38 17.591c-.3.198-.606.209-.916.033A.866.866 0 0 1 8 16.818V7.93c0-.362.155-.63.464-.806.31-.176.615-.165.917.033l6.996 4.454c.274.18.411.435.411.763a.863.863 0 0 1-.411.763L9.38 17.591Z"
        />
    </Svg>
)
export default SvgComponent