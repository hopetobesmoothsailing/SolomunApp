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
            fill="#3C3C43"
            fillOpacity={0.6}
            d="M12 21.75c-1.69 0-3.07-.255-4.142-.765C6.786 20.475 6.25 19.813 6.25 19c0-.487.205-.92.614-1.299.41-.379.976-.69 1.698-.934l.43 1.43c-.315.114-.58.244-.794.389-.214.144-.353.282-.417.414.165.356.657.654 1.476.892.818.239 1.733.358 2.743.358 1.004 0 1.92-.12 2.746-.358.827-.238 1.323-.536 1.489-.892-.064-.132-.204-.269-.418-.41a4.196 4.196 0 0 0-.794-.394l.44-1.429c.722.244 1.284.555 1.685.934s.602.812.602 1.299c0 .813-.536 1.474-1.608 1.985-1.072.51-2.452.765-4.142.765Zm0-5.906c.3-.569.636-1.121 1.008-1.656.372-.536.745-1.047 1.119-1.534.63-.82 1.132-1.561 1.509-2.225.376-.664.564-1.49.564-2.479 0-1.164-.409-2.155-1.227-2.973C14.155 4.159 13.164 3.75 12 3.75s-2.155.409-2.973 1.227C8.209 5.795 7.8 6.786 7.8 7.95c0 .988.19 1.815.57 2.479.379.664.88 1.406 1.503 2.225.374.487.748.998 1.12 1.534.371.535.707 1.087 1.007 1.656Zm0 2.598a.713.713 0 0 1-.452-.162.975.975 0 0 1-.306-.419c-.409-1.119-.895-2.058-1.46-2.816a390.484 390.484 0 0 0-1.632-2.18 14.196 14.196 0 0 1-1.306-2.16C6.481 9.962 6.3 9.043 6.3 7.95c0-1.596.551-2.945 1.653-4.047C9.055 2.8 10.403 2.25 12 2.25c1.596 0 2.945.551 4.047 1.653C17.15 5.005 17.7 6.353 17.7 7.95c0 1.092-.177 2.01-.532 2.756a12.51 12.51 0 0 1-1.318 2.16c-.508.694-1.048 1.42-1.62 2.18-.573.758-1.063 1.696-1.472 2.816a.973.973 0 0 1-.306.418.713.713 0 0 1-.452.162Zm0-8.665c.506 0 .938-.178 1.293-.534.356-.356.534-.787.534-1.293 0-.506-.178-.938-.534-1.293A1.761 1.761 0 0 0 12 6.123c-.506 0-.938.178-1.293.534a1.761 1.761 0 0 0-.534 1.293c0 .506.178.937.534 1.293.355.356.787.534 1.293.534Z"
        />
    </Svg>
)
export default SvgComponent