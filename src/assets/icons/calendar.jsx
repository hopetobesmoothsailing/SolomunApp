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
            fillOpacity={0.6}
            d="M5.308 21.5c-.505 0-.933-.175-1.283-.525a1.745 1.745 0 0 1-.525-1.283V6.308c0-.505.175-.933.525-1.283.35-.35.778-.525 1.283-.525h1.384V3.154c0-.22.074-.402.22-.55a.745.745 0 0 1 .55-.22c.219 0 .402.074.549.22.146.148.22.33.22.55V4.5h7.577V3.135c0-.213.071-.391.215-.535a.726.726 0 0 1 .535-.215c.212 0 .39.071.534.215a.726.726 0 0 1 .216.535V4.5h1.384c.505 0 .933.175 1.283.525.35.35.525.778.525 1.283v13.384c0 .505-.175.933-.525 1.283-.35.35-.778.525-1.283.525H5.308Zm0-1.5h13.384a.294.294 0 0 0 .212-.096.294.294 0 0 0 .096-.212v-9.384H5v9.384c0 .077.032.148.096.212a.294.294 0 0 0 .212.096ZM5 8.808h14v-2.5a.294.294 0 0 0-.096-.212.294.294 0 0 0-.212-.096H5.308a.294.294 0 0 0-.212.096.294.294 0 0 0-.096.212v2.5Z"
        />
    </Svg>
)
export default SvgComponent