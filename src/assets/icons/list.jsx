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
                fill="#000"
                d="M10 17.75a.725.725 0 0 1-.534-.216A.726.726 0 0 1 9.25 17c0-.213.072-.391.216-.535A.726.726 0 0 1 10 16.25h10c.212 0 .39.072.534.216a.726.726 0 0 1 .216.534c0 .213-.072.391-.216.535a.726.726 0 0 1-.534.215H10Zm-6-10a.725.725 0 0 1-.534-.216A.726.726 0 0 1 3.25 7c0-.213.072-.391.216-.535A.726.726 0 0 1 4 6.25h16c.212 0 .39.072.534.216A.726.726 0 0 1 20.75 7c0 .213-.072.391-.216.535A.726.726 0 0 1 20 7.75H4Zm6 5a.725.725 0 0 1-.534-.216A.726.726 0 0 1 9.25 12c0-.213.072-.391.216-.535A.726.726 0 0 1 10 11.25h10c.212 0 .39.072.534.216a.726.726 0 0 1 .216.534c0 .213-.072.391-.216.535a.726.726 0 0 1-.534.215H10Z"
            />
        </G>
    </Svg>
)
export default SvgComponent