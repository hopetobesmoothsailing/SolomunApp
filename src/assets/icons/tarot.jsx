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
                d="m15.221 9.674.67 2.415a.861.861 0 0 1-.018.547.9.9 0 0 1-.344.447l-2.048 1.404a.388.388 0 0 1-.4.058.447.447 0 0 1-.283-.313l-.67-2.416a.86.86 0 0 1 .018-.547.9.9 0 0 1 .344-.447l2.048-1.404a.388.388 0 0 1 .4-.058c.145.056.24.16.283.314ZM4.308 4.416l-.623.294a1.833 1.833 0 0 0-1.06 1.127A2.022 2.022 0 0 0 2.7 7.395l1.608 3.467V4.416ZM8.5 2.587c-.55 0-1.02.199-1.413.595-.391.397-.587.87-.587 1.42v5.35l2.444-6.715c.05-.123.095-.237.135-.342.04-.105.101-.208.184-.308H8.5Zm4.756.548a1.79 1.79 0 0 0-1.396.056 1.718 1.718 0 0 0-.945 1.02L6.673 15.896c-.17.472-.15.934.06 1.388.211.454.553.766 1.025.937l6.967 2.548c.472.17.934.15 1.388-.06a1.74 1.74 0 0 0 .937-1.025L21.308 8c.17-.472.151-.935-.056-1.389a1.722 1.722 0 0 0-1.02-.936l-6.976-2.539Zm-.518 1.423 6.973 2.539a.312.312 0 0 1 .178.159.286.286 0 0 1 .005.235L15.64 19.164a.312.312 0 0 1-.158.178.287.287 0 0 1-.236.005l-6.958-2.539a.312.312 0 0 1-.178-.158.287.287 0 0 1-.004-.236l4.238-11.673a.312.312 0 0 1 .159-.178.287.287 0 0 1 .235-.005Z"
            />
        </G>
    </Svg>
)
export default SvgComponent