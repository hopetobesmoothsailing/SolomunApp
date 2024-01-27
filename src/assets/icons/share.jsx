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
                d="M12 14.75a.726.726 0 0 1-.535-.215.726.726 0 0 1-.215-.535V3.72L9.917 5.051a.693.693 0 0 1-.51.208.735.735 0 0 1-.534-.233.76.76 0 0 1-.217-.535c0-.2.072-.374.217-.519l2.494-2.494a.85.85 0 0 1 .289-.19.919.919 0 0 1 .344-.066c.12 0 .235.022.344.066a.851.851 0 0 1 .289.19l2.504 2.504a.727.727 0 0 1 .223.532.694.694 0 0 1-.233.527.76.76 0 0 1-.535.218.708.708 0 0 1-.519-.218L12.75 3.72V14a.726.726 0 0 1-.215.535.726.726 0 0 1-.535.215ZM6.308 21.5c-.505 0-.933-.175-1.283-.525a1.745 1.745 0 0 1-.525-1.283V9.308c0-.505.175-.933.525-1.283.35-.35.778-.525 1.283-.525h1.807c.213 0 .391.072.535.215a.726.726 0 0 1 .215.535.726.726 0 0 1-.215.535.726.726 0 0 1-.535.215H6.308a.294.294 0 0 0-.212.096.294.294 0 0 0-.096.212v10.384c0 .077.032.148.096.212a.294.294 0 0 0 .212.096h11.384a.294.294 0 0 0 .212-.096.294.294 0 0 0 .096-.212V9.308a.294.294 0 0 0-.096-.212.294.294 0 0 0-.212-.096h-1.807a.726.726 0 0 1-.535-.215.726.726 0 0 1-.215-.535c0-.213.071-.391.215-.535a.726.726 0 0 1 .535-.215h1.807c.505 0 .933.175 1.283.525.35.35.525.778.525 1.283v10.384c0 .505-.175.933-.525 1.283-.35.35-.778.525-1.283.525H6.308Z"
            />
        </G>
    </Svg>
)
export default SvgComponent