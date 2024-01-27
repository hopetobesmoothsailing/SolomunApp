import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
        {...props}
    >
        <Mask
            id="a"
            width={36}
            height={36}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "alpha",
            }}
        >
            <Path fill="#D9D9D9" d="M0 0h36v36H0z" />
        </Mask>
        <G mask="url(#a)">
            <Path
                fill="#fff"
                d="M14.071 26.387c-.452.296-.91.312-1.374.049-.465-.264-.697-.666-.697-1.209V11.895c0-.543.232-.945.697-1.209.464-.263.922-.247 1.374.05l10.494 6.68c.412.27.618.653.618 1.145s-.206.874-.618 1.145l-10.494 6.68Z"
            />
        </G>
    </Svg>
)
export default SvgComponent