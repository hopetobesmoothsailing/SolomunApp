import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={343}
        height={343}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#F0D770"
                d="M340.662 171.433a171.1 171.1 0 0 1-30.366 97.336c-19.771 28.579-47.772 50.408-80.25 62.561a167.485 167.485 0 0 1-77.951 9.377 167.683 167.683 0 0 1-73.69-27.188c-29.082-19.388-51.518-47.288-64.264-79.914a171.404 171.404 0 0 1-6.987-102.464 169.326 169.326 0 0 1 19.543-47.73C44.345 53.984 70.41 30.574 101.5 16.228a167.547 167.547 0 0 1 77.143-15.16 167.616 167.616 0 0 1 75.574 21.707c29.709 16.866 53.698 42.287 68.866 72.98a169.782 169.782 0 0 1 15.592 49.607 173.809 173.809 0 0 1 1.987 26.071c0 .633 2.338.61 2.338 0a170.746 170.746 0 0 0-31.722-99.473 173.69 173.69 0 0 0-35.765-36.935A170.378 170.378 0 0 0 178.081.13 173.172 173.172 0 0 0 124.9 6.349c-33.84 9.453-63.95 29.158-86.22 56.427C16.41 90.044 3.065 123.547.467 158.712a171.83 171.83 0 0 0 23.697 100.545c18.02 30.268 44.905 54.216 76.986 68.577a171.138 171.138 0 0 0 127.895 5.231c41.711-14.865 76.094-45.321 95.978-85.016a171.153 171.153 0 0 0 17.953-76.523c0-.915-2.314-.774-2.314-.093Z"
            />
            <Path
                fill="#483F50"
                d="M171.558 326.942c85.583 0 154.961-69.645 154.961-155.557 0-85.911-69.378-155.556-154.961-155.556-85.582 0-154.96 69.645-154.96 155.556 0 85.912 69.378 155.557 154.96 155.557Z"
            />
            <Path
                fill="#F0D770"
                d="M144.655 86.712c5.727.49 11.688.163 17.321.14 9.351 0 18.764-.063 28.239-.187 4.067 0 8.111 0 12.155-.21.561 0 2.338 0 2.338-.959 0-.958-1.87-.912-2.338-.912-16.69.421-33.404.468-50.095.398H145.87c-.865 0-2.501 0-2.852.678-.35.678 1.122 1.098 1.637 1.145v-.093ZM201.829 74.4h-19.636l2.758 1.409a40.11 40.11 0 0 0 7.387-11.1 20.303 20.303 0 0 0 2.174-9.574 18.556 18.556 0 0 0-3.88-9.738 18.689 18.689 0 0 0-9.351-5.913 23.032 23.032 0 0 0-12.716-.892 19.353 19.353 0 0 0-8.617 4.426 19.456 19.456 0 0 0-5.409 8.058 21.403 21.403 0 0 0 .281 12.648 18.787 18.787 0 0 0 3.319 6.477c1.426 1.736 3.179 3.167 4.675 4.927l1.73-1.009-18.701.282c-.538 0-2.01.14-1.73 1.009.281.868 2.174.915 2.805.915l18.701-.281c.281 0 2.338-.259 1.73-1.01-1.075-1.337-2.337-2.51-3.53-3.754a16.914 16.914 0 0 1-3.296-4.904 21.832 21.832 0 0 1-1.963-11.03 16.857 16.857 0 0 1 3.081-8.244 16.768 16.768 0 0 1 6.807-5.553 12.718 12.718 0 0 1 9.35-.94 15.165 15.165 0 0 1 8.743 5.445 17.71 17.71 0 0 1 3.39 8.73 19.398 19.398 0 0 1-1.847 8.8 39.91 39.91 0 0 1-7.504 11.404c-.935.962 2.338 1.407 2.759 1.407h19.636c.537 0 2.01-.14 1.729-1.008-.28-.869-2.174-.916-2.805-.916l-.07-.07Z"
            />
            <G fill="#F0D770" opacity={0.7}>
                <Path d="M277.871 93.713a33.448 33.448 0 0 0-6.148.516c.935-1.666 3.132-4.693 3.132-4.693a20.225 20.225 0 0 1-1.449-5.093 39.88 39.88 0 0 1 4.675 1.338 34.697 34.697 0 0 1 4.021-3.074 37.945 37.945 0 0 1-.374 5.163c1.706.75 3.95 1.806 5.61 2.722-1.262.375-5.423 1.408-5.423 1.408a30.116 30.116 0 0 1-.959 4.998l-3.085-3.285ZM56.945 127.809a32.484 32.484 0 0 1 3.133 5.256c.794-1.76 1.916-5.256 1.916-5.256a20.23 20.23 0 0 0 4.956-1.737 35.73 35.73 0 0 0-3.693-2.933 36.709 36.709 0 0 0 0-5.069 38.68 38.68 0 0 0-3.88 3.262c-1.614-.962-3.74-2.182-5.47-3.004.443 1.244 2.01 5.257 2.01 5.257a28.108 28.108 0 0 0-3.507 3.661l4.535.563ZM109.165 70.459a34.405 34.405 0 0 1 5.283 3.19c0-1.9-.795-5.514-.795-5.514a20.402 20.402 0 0 0 3.553-3.919 43.346 43.346 0 0 0-4.675-.844 32.39 32.39 0 0 0-2.338-4.553 40.736 40.736 0 0 0-1.94 4.81c-1.846 0-4.324-.14-6.218 0l4.231 3.732a31.038 31.038 0 0 0-1.332 4.904l4.231-1.806ZM132.708 51.357a32.2 32.2 0 0 1 2.174-5.796c-1.87.47-5.26 1.807-5.26 1.807a20.116 20.116 0 0 0-4.488-2.793 40.187 40.187 0 0 0 0 4.834 36.982 36.982 0 0 0-4.044 3.05c1.663.47 3.358.816 5.072 1.033.258 1.854.655 4.295 1.099 6.172a536.23 536.23 0 0 0 2.829-4.858c1.661.275 3.342.417 5.026.423l-2.408-3.872ZM226.563 54.947a32.944 32.944 0 0 0 1.613-5.96c1.239 1.454 3.226 4.528 3.226 4.528a19.892 19.892 0 0 1 5.26.376 38.656 38.656 0 0 1-2.759 3.919 39.03 39.03 0 0 1 1.497 4.834 35.486 35.486 0 0 1-4.676-2.136c-1.309 1.338-3.062 3.121-4.488 4.365 0-1.314.538-5.609.538-5.609a30.462 30.462 0 0 1-4.348-2.604l4.137-1.713ZM282.57 205.528a32.655 32.655 0 0 0-3.109-5.35c1.893.141 5.47.868 5.47.868a19.987 19.987 0 0 1 3.951-3.496c.364 1.546.629 3.113.794 4.693a33.955 33.955 0 0 1 4.489 2.347 32.651 32.651 0 0 1-4.816 1.877v6.265c-.888-.985-3.6-4.317-3.6-4.317-1.597.568-3.239 1-4.909 1.29l1.73-4.177ZM302.535 144.61a30.986 30.986 0 0 0 .163 6.195c-1.613-1.055-4.394-3.426-4.394-3.426a20.38 20.38 0 0 1-5.143 1.174 41.176 41.176 0 0 1 1.589-4.693 36.742 36.742 0 0 1-2.805-4.224c1.721.116 3.431.351 5.12.704.841-1.666 2.01-3.849 3.039-5.468.28 1.291 1.075 5.515 1.075 5.515 1.668.287 3.31.711 4.909 1.267l-3.553 2.956ZM241.802 103.381a32.809 32.809 0 0 1-3.974 4.694c1.894.187 5.54 0 5.54 0a19.737 19.737 0 0 0 3.296 4.13 37.072 37.072 0 0 0 1.613-4.553 36.098 36.098 0 0 0 4.816-1.525 37.587 37.587 0 0 0-4.418-2.675c.35-1.831.794-4.271 1.005-6.172-1.029.822-4.278 3.638-4.278 3.638a29.217 29.217 0 0 0-4.675-2.089l1.075 4.552ZM122.258 110.115a33.963 33.963 0 0 1-1.193 6.078c1.754-.751 4.886-2.628 4.886-2.628a19.819 19.819 0 0 0 4.886 1.995 38.652 38.652 0 0 0-.818-4.694c0-.328 2.735-2.346 3.483-3.684a38.26 38.26 0 0 0-5.167-.188c-.561-1.783-1.355-4.13-2.08-5.89-.514 1.221-1.987 5.257-1.987 5.257a30.718 30.718 0 0 0-5.049.422l3.039 3.332ZM45.536 211.02a32.255 32.255 0 0 1 5.283 3.144c-.117-1.9-.818-5.491-.818-5.491a20.143 20.143 0 0 0 3.53-3.942 38.41 38.41 0 0 0-4.676-.845 34.74 34.74 0 0 0-2.337-4.529 38.476 38.476 0 0 0-1.964 4.834h-6.218c.958.869 4.254 3.638 4.254 3.638a28.928 28.928 0 0 0-1.285 5.021l4.23-1.83ZM269.153 171.127a32.242 32.242 0 0 1-3.132-5.209c-.795 1.736-1.917 5.233-1.917 5.233-1.723.361-3.39.953-4.956 1.76a38.94 38.94 0 0 0 3.764 3.027 36.508 36.508 0 0 0-.164 5.069 38.586 38.586 0 0 0 3.881-3.356c1.613.939 3.74 2.182 5.47 3.004-.444-1.244-2.011-5.257-2.011-5.257a30.16 30.16 0 0 0 3.507-3.684l-4.442-.587ZM233.596 293.033a33.303 33.303 0 0 1-5.283-3.191c0 1.924.795 5.514.795 5.514a19.669 19.669 0 0 0-3.553 3.919c1.539.385 3.1.675 4.675.868a40.714 40.714 0 0 0 2.338 4.529 37.01 37.01 0 0 0 1.94-4.693c1.87 0 4.324.141 6.241 0-.982-.892-4.254-3.661-4.254-3.661a29.994 29.994 0 0 0 1.332-4.904l-4.231 1.619ZM44.274 141.584a33.547 33.547 0 0 0 3.11 5.35c-1.918-.141-5.494-.868-5.494-.868a19.999 19.999 0 0 1-3.95 3.426 42.008 42.008 0 0 1-.795-4.693 33.946 33.946 0 0 1-4.489-2.347 34.652 34.652 0 0 1 4.816-1.877v-6.265c.865.985 3.6 4.317 3.6 4.317a29.46 29.46 0 0 1 4.885-1.29l-1.683 4.247ZM105.123 287.801a30.15 30.15 0 0 1-5.306-3.168c0 1.924.818 5.514.818 5.514a20.153 20.153 0 0 0-3.53 3.943c1.542.366 3.103.649 4.676.844a34.612 34.612 0 0 0 2.337 4.529 38.448 38.448 0 0 0 1.917-4.834c1.87 0 4.325.118 6.218 0-.958-.868-4.254-3.637-4.254-3.637a29.582 29.582 0 0 0 1.309-4.904l-4.185 1.713Z" />
            </G>
            <G fill="#F0D770" opacity={0.5}>
                <Path d="M88.435 84.537a2.81 2.81 0 0 0-1.198 1.125 2.825 2.825 0 0 0 .225 3.143c.346.442.814.77 1.347.941a2.888 2.888 0 0 0 1.92-.242 2.905 2.905 0 0 0 1.34-1.4 2.92 2.92 0 0 0-.923-3.543 2.726 2.726 0 0 0-2.711-.024ZM265.065 77.474a2.803 2.803 0 0 0-.029-3.172 2.781 2.781 0 0 0-2.963-1.099 2.9 2.9 0 0 0-1.524 1.2 2.917 2.917 0 0 0 .421 3.639 2.894 2.894 0 0 0 1.757.816 2.683 2.683 0 0 0 2.338-1.384ZM203.517 45.185a2.787 2.787 0 0 0 1.595-2.743 2.784 2.784 0 0 0-1.992-2.467 2.864 2.864 0 0 0-1.968.185 2.885 2.885 0 0 0-1.531 3.395 2.886 2.886 0 0 0 1.161 1.606 2.73 2.73 0 0 0 2.735.024ZM264.621 141.067a2.82 2.82 0 0 0 1.37 4.173c.526.197 1.1.231 1.646.098a2.915 2.915 0 0 0 1.087-4.848 2.895 2.895 0 0 0-1.765-.807 2.7 2.7 0 0 0-2.338 1.384ZM251.017 74.4a2.79 2.79 0 0 0 1.605-2.735 2.785 2.785 0 0 0-1.979-2.475 2.89 2.89 0 0 0-1.92.242 2.918 2.918 0 0 0-.418 4.944 2.73 2.73 0 0 0 2.712.024ZM52.482 157.071a2.8 2.8 0 0 0 1.34 4.185c.529.196 1.105.226 1.652.086a2.903 2.903 0 0 0 1.524-1.199 2.92 2.92 0 0 0-.421-3.64 2.89 2.89 0 0 0-1.757-.816 2.692 2.692 0 0 0-2.338 1.384ZM55.452 242.722a2.799 2.799 0 0 0 .374 5.209 2.892 2.892 0 0 0 3.26-1.643 2.919 2.919 0 0 0-.922-3.543 2.729 2.729 0 0 0-2.712-.023ZM69.526 149.491a2.8 2.8 0 0 0-1.366-4.124 2.772 2.772 0 0 0-1.626-.1 2.903 2.903 0 0 0-1.524 1.199 2.92 2.92 0 0 0 .421 3.64 2.89 2.89 0 0 0 1.757.816 2.658 2.658 0 0 0 2.338-1.431ZM297.253 175.116a2.777 2.777 0 0 0-1.007 4.27c.356.44.838.76 1.381.916a2.865 2.865 0 0 0 1.938-.209 2.896 2.896 0 0 0 .4-4.953 2.612 2.612 0 0 0-2.712-.024ZM132.08 84.279a2.795 2.795 0 0 0-.051-3.15 2.774 2.774 0 0 0-2.941-1.098 2.9 2.9 0 0 0-1.524 1.2 2.916 2.916 0 0 0 .422 3.64 2.892 2.892 0 0 0 1.757.816 2.705 2.705 0 0 0 2.337-1.408ZM221.958 93.173a2.796 2.796 0 0 0 1-4.282 2.775 2.775 0 0 0-1.374-.927 2.89 2.89 0 0 0-3.26 1.643 2.918 2.918 0 0 0 .923 3.543 2.726 2.726 0 0 0 2.711.023ZM79.342 74.4a2.8 2.8 0 0 0 1.353 4.154 2.772 2.772 0 0 0 1.64.093 2.877 2.877 0 0 0 1.55-1.183 2.894 2.894 0 0 0-.426-3.654 2.87 2.87 0 0 0-1.78-.794 2.681 2.681 0 0 0-2.337 1.384ZM291.503 112.602a2.798 2.798 0 0 0 .374 5.21 2.892 2.892 0 0 0 3.26-1.643 2.909 2.909 0 0 0-.923-3.543 2.727 2.727 0 0 0-2.711-.024ZM63.4 99.062a2.8 2.8 0 0 0 1.34 4.185c.529.196 1.105.226 1.652.086a2.903 2.903 0 0 0 1.524-1.199 2.918 2.918 0 0 0-.421-3.64 2.894 2.894 0 0 0-1.757-.816 2.681 2.681 0 0 0-2.338 1.384ZM214.548 98.969a2.802 2.802 0 0 0-.982 4.288c.356.441.837.762 1.38.921a2.887 2.887 0 0 0 1.92-.242 2.904 2.904 0 0 0 1.34-1.401 2.91 2.91 0 0 0-.923-3.542 2.655 2.655 0 0 0-2.735-.024ZM69.22 194.077a2.8 2.8 0 0 0 1.34 4.185c.53.196 1.106.226 1.652.086a2.904 2.904 0 0 0 1.524-1.199 2.921 2.921 0 0 0-.421-3.64 2.897 2.897 0 0 0-1.757-.817 2.73 2.73 0 0 0-2.338 1.385ZM291.482 171.221a2.802 2.802 0 0 0 .982-4.288 2.775 2.775 0 0 0-1.38-.921 2.902 2.902 0 0 0-3.26 1.643 2.916 2.916 0 0 0 .923 3.543 2.77 2.77 0 0 0 2.735.023ZM290.498 233.969a2.8 2.8 0 0 0 1.353 4.154 2.775 2.775 0 0 0 1.64.093 2.892 2.892 0 0 0 1.125-4.838 2.877 2.877 0 0 0-1.78-.794 2.636 2.636 0 0 0-2.338 1.385ZM138.742 178.965a2.757 2.757 0 0 0-1.236 1.107 2.775 2.775 0 0 0 1.61 4.079c.65.159 1.335.085 1.937-.209a2.878 2.878 0 0 0 1.359-1.401 2.889 2.889 0 0 0-.959-3.553 2.608 2.608 0 0 0-2.711-.023ZM134.324 155.827a2.808 2.808 0 0 0-.052-3.165 2.783 2.783 0 0 0-2.963-1.082 2.867 2.867 0 0 0-1.55 1.189 2.892 2.892 0 0 0 .44 3.658c.486.463 1.119.74 1.787.784a2.7 2.7 0 0 0 2.338-1.384ZM147.412 172.23a2.796 2.796 0 0 0-.028-3.172 2.778 2.778 0 0 0-2.964-1.099 2.903 2.903 0 0 0-1.955 3.094c.076.662.378 1.278.853 1.745a2.894 2.894 0 0 0 1.757.816 2.656 2.656 0 0 0 2.337-1.384ZM93.298 114.292a2.76 2.76 0 0 0 1.236-1.106 2.78 2.78 0 0 0-.228-3.163 2.759 2.759 0 0 0-1.382-.917 2.892 2.892 0 0 0-3.26 1.643 2.922 2.922 0 0 0 .923 3.543 2.653 2.653 0 0 0 2.711 0ZM191.033 219.256a2.795 2.795 0 0 0 1.339 4.184c.53.197 1.106.227 1.653.086a2.898 2.898 0 0 0 1.524-1.199 2.916 2.916 0 0 0-.421-3.639 2.894 2.894 0 0 0-1.758-.817 2.683 2.683 0 0 0-2.337 1.385ZM213.615 153.926a2.799 2.799 0 0 0 1.339 4.185c.53.196 1.106.226 1.653.086a2.898 2.898 0 0 0 1.524-1.199 2.923 2.923 0 0 0-.421-3.64 2.899 2.899 0 0 0-1.758-.816 2.713 2.713 0 0 0-2.337 1.384ZM192.133 206.092a2.825 2.825 0 0 0 .063 3.163 2.803 2.803 0 0 0 2.953 1.107 2.901 2.901 0 0 0 1.523-1.204 2.912 2.912 0 0 0-2.201-4.451 2.709 2.709 0 0 0-2.338 1.385ZM130.115 303.311a2.795 2.795 0 0 0-.374-5.21 2.904 2.904 0 0 0-3.261 1.643 2.926 2.926 0 0 0-.163 1.936 2.907 2.907 0 0 0 1.086 1.607 2.612 2.612 0 0 0 2.712.024ZM200.198 118.986a2.806 2.806 0 0 0-.029-3.172 2.781 2.781 0 0 0-2.964-1.099 2.9 2.9 0 0 0-1.523 1.199 2.917 2.917 0 0 0 .421 3.64 2.894 2.894 0 0 0 1.757.816 2.686 2.686 0 0 0 2.338-1.384ZM300.947 228.243a2.804 2.804 0 0 0 1.198-1.125 2.825 2.825 0 0 0-.226-3.143 2.806 2.806 0 0 0-1.346-.941 2.891 2.891 0 0 0-3.261 1.643 2.923 2.923 0 0 0 .923 3.543 2.728 2.728 0 0 0 2.712.023ZM257.447 280.901a2.803 2.803 0 0 0 .028 3.172 2.774 2.774 0 0 0 2.964 1.099 2.903 2.903 0 0 0 1.524-1.199 2.923 2.923 0 0 0-.421-3.64 2.899 2.899 0 0 0-1.758-.816 2.709 2.709 0 0 0-2.337 1.384ZM28.639 179.176a2.797 2.797 0 0 0 1.353 4.154 2.773 2.773 0 0 0 1.64.093 2.877 2.877 0 0 0 1.549-1.184 2.896 2.896 0 0 0-.425-3.654 2.874 2.874 0 0 0-1.78-.794 2.684 2.684 0 0 0-2.337 1.385ZM133.807 291.507a2.803 2.803 0 0 0-.028-3.172 2.774 2.774 0 0 0-2.964-1.099 2.903 2.903 0 0 0-1.524 1.199 2.915 2.915 0 0 0 .421 3.64 2.897 2.897 0 0 0 1.757.817 2.73 2.73 0 0 0 2.338-1.385ZM156.765 231.622a2.8 2.8 0 0 0-.028-3.171 2.778 2.778 0 0 0-2.964-1.099 2.896 2.896 0 0 0-1.391 1.216 2.922 2.922 0 0 0 .41 3.487 2.902 2.902 0 0 0 1.635.858 2.777 2.777 0 0 0 2.338-1.291ZM197.416 313.096a2.795 2.795 0 0 0-.028-3.172 2.778 2.778 0 0 0-2.964-1.099 2.903 2.903 0 0 0-1.955 3.094 2.904 2.904 0 0 0 2.61 2.561 2.69 2.69 0 0 0 2.337-1.384ZM155.853 310.468a2.79 2.79 0 0 0 1.605-2.734 2.783 2.783 0 0 0-1.979-2.475 2.9 2.9 0 0 0-3.26 1.643 2.917 2.917 0 0 0 .922 3.543 2.611 2.611 0 0 0 2.712.023ZM244.823 282.074a2.797 2.797 0 0 0 .053 3.165 2.783 2.783 0 0 0 2.963 1.082 2.875 2.875 0 0 0 1.55-1.189 2.897 2.897 0 0 0-.44-3.658 2.873 2.873 0 0 0-1.788-.785 2.716 2.716 0 0 0-2.338 1.385ZM72.304 272.758a2.76 2.76 0 0 0-1.236 1.106 2.78 2.78 0 0 0 .229 3.163c.356.441.838.761 1.381.917a2.891 2.891 0 0 0 3.26-1.643 2.922 2.922 0 0 0 .164-1.936 2.908 2.908 0 0 0-1.086-1.607 2.653 2.653 0 0 0-2.712 0Z" />
            </G>
            <Path
                fill="#483F50"
                d="M196.359 275.574c-2.08-1.454-4.488-2.51-6.428-4.13-1.941-1.619-3.273-3.66-5.307-5.162-1.286-.962-2.969-2.793-4.909-2.488l-2.945-.422a15.292 15.292 0 0 1-3.6-.375l-.14-.423-.702.188-.701-.188-.164.423a15.292 15.292 0 0 1-3.6.375l-2.945.422c-1.94-.305-3.6 1.526-4.909 2.488-2.034 1.502-3.366 3.543-5.306 5.162-1.941 1.62-4.348 2.676-6.429 4.13-1.543 1.103-3.436 1.995-3.132 3.919.608 3.802 7.854 5.186 11.688 6.125a60.028 60.028 0 0 0 8.976 1.314c.585 0 1.66.141 2.946.235 2.419.187 4.85.187 7.27 0 1.285 0 2.337-.165 2.945-.235a60.735 60.735 0 0 0 9-1.314c3.74-.939 10.987-2.347 11.688-6.125.164-1.924-1.753-2.816-3.296-3.919Z"
            />
            <Path
                fill="#F0D770"
                d="M197.249 275.457a45.359 45.359 0 0 1-7.551-5.186 51.777 51.777 0 0 0-5.89-5.444c-3.156-2.347-6.78-1.502-10.52-2.347l1.005.634-.14-.423c-.234-.633-1.496-.821-2.057-.657l-.701.212h1.052l-.702-.212c-.28 0-1.122-.234-1.262.165l-.14.422.421-.235c-2.478.54-5.096.399-7.574.845a9.6 9.6 0 0 0-3.951 2.347 56.354 56.354 0 0 0-4.488 4.364 23.902 23.902 0 0 1-5.143 3.661 21.767 21.767 0 0 0-4.675 3.285c-2.057 2.183 0 4.694 2.104 5.843a28.336 28.336 0 0 0 8.252 2.91 75.84 75.84 0 0 0 11.477 1.807c7.761.692 15.583.13 23.166-1.666a23.31 23.31 0 0 0 8.906-3.356 3.975 3.975 0 0 0 1.73-3.355c-.187-1.76-2.104-2.699-3.389-3.614a2.111 2.111 0 0 0-1.613-.399c-.351 0-.608.329-.164.634 1.216.844 3.156 1.736 2.899 3.496a4.256 4.256 0 0 1-2.104 2.793 23.326 23.326 0 0 1-7.504 2.722 67.725 67.725 0 0 1-20.828 1.9 73.87 73.87 0 0 1-11.337-1.502 34.7 34.7 0 0 1-7.457-2.346 5.215 5.215 0 0 1-2.642-2.347c-.678-1.548.281-2.651 1.496-3.52a64.958 64.958 0 0 0 9.351-6.429 41.93 41.93 0 0 1 4.161-3.99c.631-.492 1.238-1.056 1.916-1.501a4.511 4.511 0 0 1 2.338-.657c.935 0 1.823-.305 2.735-.399.912-.094 3.81.328 4.301-1.056l-1.239.164c.758.259 1.58.259 2.338 0l-2.034-.634c.631 1.784 3.881 1.385 5.423 1.526a10.292 10.292 0 0 1 4.676 1.103 69.955 69.955 0 0 1 6.101 5.702 53.42 53.42 0 0 0 7.317 4.951 2.334 2.334 0 0 0 1.613.423c.514-.118.771-.306.327-.634Z"
            />
            <Path
                fill="#483F50"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M162.887 260.697c0-.587 4.301-1.056 9.607-1.056 5.307 0 9.351.469 9.351 1.056v3.684c0 .563-4.301 1.032-9.631 1.032s-9.351-.469-9.351-1.032l.024-3.684Z"
            />
            <Path
                fill="#483F50"
                d="M240.914 141.467a5.914 5.914 0 0 0-.491-2.112 6.317 6.317 0 0 0-5.634-3.309 64.23 64.23 0 0 0-9.35-.516c-6.335 0-12.646.352-18.981.61h-2.338c-6.499 0-12.6 0-19.075.328a81.546 81.546 0 0 1-10.987 0 6.114 6.114 0 0 0-1.73 0 6.277 6.277 0 0 0-1.753 0 81.546 81.546 0 0 1-10.987 0c-6.475-.305-12.576-.328-19.075-.328h-2.337c-6.312-.258-12.647-.657-18.982-.61a64.23 64.23 0 0 0-9.35.516 6.31 6.31 0 0 0-3.274.87 6.349 6.349 0 0 0-2.36 2.439 5.935 5.935 0 0 0-.491 2.112 15.595 15.595 0 0 0 0 4.294 5.945 5.945 0 0 0 1.964 3.731 7.143 7.143 0 0 0 4.021 1.291 7.24 7.24 0 0 0 3.249-.329 3.662 3.662 0 0 0 2.337-2.347 2.349 2.349 0 0 0-1.145-2.815.791.791 0 0 0-.608 0c-.397.164-.397.75-.491 1.173a1.787 1.787 0 0 1-1.017 1.054 1.772 1.772 0 0 1-1.46-.069c-2.782-1.525.42-3.918 2.01-4.552 1.145-.446 2.127-1.244 3.273-1.713 2.898-1.244 7.012-.657 10.215-.563a150.168 150.168 0 0 1 29.781 5.022c3.46.797 7.855 2.628 11.431 2.346a15.058 15.058 0 0 0 5.119-1.22 14.794 14.794 0 0 0 5.097 1.22c3.599.211 7.971-1.619 11.43-2.346a150.177 150.177 0 0 1 29.782-5.022c3.132 0 7.34-.681 10.238.563 1.123.469 2.104 1.267 3.25 1.713 1.589.634 4.815 3.027 2.01 4.552a1.752 1.752 0 0 1-1.379.009 1.756 1.756 0 0 1-.959-.994c0-.423 0-1.009-.514-1.173a.791.791 0 0 0-.608 0 2.355 2.355 0 0 0-1.145 2.815c.18.548.485 1.045.891 1.453.406.408.901.714 1.447.894a7.238 7.238 0 0 0 3.249.329 6.999 6.999 0 0 0 4.021-1.291 5.947 5.947 0 0 0 1.987-3.708 15.562 15.562 0 0 0-.281-4.317Z"
            />
            <Path
                fill="#F0D770"
                d="M242.038 141.701a6.532 6.532 0 0 0-1.808-3.917 6.491 6.491 0 0 0-3.849-1.926 58.24 58.24 0 0 0-13.091-.845c-4.885 0-9.771.282-14.657.493-4.885.211-9.514.188-14.282.258-4.255 0-8.533.258-12.787.422-1.824 0-3.624.118-5.447 0-1.823-.117-3.273-.305-4.956-.258-1.683.047-3.226.282-4.839.282-1.612 0-3.67 0-5.493-.141a390.876 390.876 0 0 0-12.927-.375c-4.886 0-9.724 0-14.61-.305a217.99 217.99 0 0 0-14.657-.423c-4.11-.29-8.24.099-12.226 1.15-3.693 1.314-4.278 5.35-3.927 8.823a7.05 7.05 0 0 0 2.315 4.47 7 7 0 0 0 4.698 1.772c2.525.282 7.901-.352 7.013-4.224a3.148 3.148 0 0 0-1.083-1.666 3.124 3.124 0 0 0-1.863-.68 1.394 1.394 0 0 0-1.332.492c-.281.446-.444 2.347-1.332 1.549-1.917-1.971 6.568-5.467 7.597-5.655a26.21 26.21 0 0 1 6.358 0c2.338.117 4.535.188 6.779.399 4.793.513 9.554 1.296 14.26 2.346 4.418.963 8.836 1.925 13.184 3.192a24.184 24.184 0 0 0 10.309 1.408 11.314 11.314 0 0 0 4.02-1.127l-1.823-.281a13.98 13.98 0 0 0 6.475 1.572 30.61 30.61 0 0 0 9.701-1.924c3.834-1.103 7.785-1.901 11.689-2.746 3.903-.845 7.831-1.595 11.688-2.112 3.857-.516 7.737-.657 11.688-.821a13.23 13.23 0 0 1 5.516.469 27.352 27.352 0 0 1 4.091 2.159c.935.587 2.502 1.877 1.426 3.027-1.075 1.15-.795-.14-1.052-.727a1.71 1.71 0 0 0-1.098-.986 2.565 2.565 0 0 0-2.926.951 2.592 2.592 0 0 0 .074 3.085c1.823 2.746 6.265 2.746 9.07 1.972 4.278-1.197 4.675-5.421 4.254-9.223 0-.774-2.337-.985-2.337-.469.303 3.051.397 7.04-2.969 8.518a5.753 5.753 0 0 1-5.564-.187 2.667 2.667 0 0 1-.818-2.23c.043-.245.121-.482.234-.704a1.24 1.24 0 0 1 .561-.633c.28-.141.304-.211 0-.165l-1.239-.492c.421.352.304.915.514 1.361.203.349.493.641.842.845a4.476 4.476 0 0 0 2.501.633c1.636 0 2.969-1.525 2.01-3.074-.958-1.549-3.039-2.347-4.675-3.191a14.193 14.193 0 0 0-6.592-1.971c-2.571-.141-5.189 0-7.761.234a90.218 90.218 0 0 0-9.046.892c-6.242.892-12.366 2.346-18.514 3.778-2.993.704-5.891 1.736-8.907 2.347a11.019 11.019 0 0 1-7.293-.446c-.397-.235-1.356-.564-1.823-.258a10.727 10.727 0 0 1-5.681 1.126 39.635 39.635 0 0 1-8.228-1.948c-5.798-1.595-11.688-2.863-17.673-3.919a133.523 133.523 0 0 0-17.555-1.736 17.371 17.371 0 0 0-7.2.727c-1.145.446-2.151 1.197-3.249 1.713a9.157 9.157 0 0 0-2.338 1.408c-1.566 1.408-1.473 3.098.538 3.99a4.076 4.076 0 0 0 2.782.234 2.198 2.198 0 0 0 1.168-.868c.141-.282.234-1.361.585-1.385h-1.146c1.146.352.818 2.347.374 2.981a4.175 4.175 0 0 1-3.927 1.642 4.657 4.657 0 0 1-4.137-1.971 9.954 9.954 0 0 1 1.215-10.653 12.785 12.785 0 0 1 6.803-1.596c5.831-.34 11.677-.34 17.508 0 5.657.258 11.268.375 16.925.446 5.072 0 10.145.258 15.218.446 4.09.14 8.158-.282 12.249 0 4.279.137 8.563.051 12.833-.259 5.657-.211 11.314 0 16.971-.234 6.522-.141 12.997-.681 19.519-.681a68.812 68.812 0 0 1 9.585.423 7.201 7.201 0 0 1 3.459 1.056 5.11 5.11 0 0 1 1.87 3.707c.071.915 2.338 1.127 2.268.634Z"
            />
            <Path
                fill="#F0D770"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M182.873 143.671h-21.039a2.193 2.193 0 0 1-1.545-.637 2.209 2.209 0 0 1-.652-1.545c0-.585.231-1.146.643-1.56a2.196 2.196 0 0 1 1.554-.646h21.039c.582 0 1.141.233 1.553.646.412.414.644.975.644 1.56a2.209 2.209 0 0 1-.652 1.545 2.194 2.194 0 0 1-1.545.637Z"
            />
            <Path
                fill="#483F50"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M177.99 132.314h-11.338v128.641c0 .563 2.548.986 5.681.986 3.132 0 5.657-.423 5.657-.986V132.314Z"
            />
            <Path
                fill="#F0D770"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M172.338 143.038a1.361 1.361 0 1 0 0-2.722 1.361 1.361 0 0 0 0 2.722Z"
            />
            <Path
                fill="#483F50"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M181.774 129.85c0-.68-4.324-1.22-9.631-1.22-5.306 0-9.35.54-9.35 1.22v4.365c0 .68 4.301 1.22 9.631 1.22s9.35-.54 9.35-1.22v-4.365Z"
            />
            <Path
                fill="#483F50"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M177.31 130.155h-9.959c-.411 0-.806-.162-1.099-.452a1.576 1.576 0 0 1-.467-1.096v-1.713c0-.417.165-.817.459-1.112a1.563 1.563 0 0 1 1.107-.461h9.959c.411.006.803.175 1.092.469.289.294.45.691.45 1.104v1.713c-.006.408-.17.799-.458 1.088a1.563 1.563 0 0 1-1.084.46Z"
            />
            <Path
                fill="#F0D770"
                d="M175.135 127.173a.3.3 0 0 0 0-.257l-.14-.117a1.19 1.19 0 0 0-.35-.163 2.338 2.338 0 0 0-1.286-.141 10.71 10.71 0 0 1-1.52 0h-.35a.338.338 0 0 0-.129.034.339.339 0 0 0-.105.083.281.281 0 0 0 0 .374c.187.163.412.276.655.327.287.092.586.14.888.141h1.683a.942.942 0 0 0 .351 0l.233-.117a.28.28 0 0 0 0-.374 1.781 1.781 0 0 0-.654-.351 3.664 3.664 0 0 0-.888 0h-1.684l1.006 1.029a17.043 17.043 0 0 0 1.916-.141l-1.893-.677a.282.282 0 0 0 0 .21.565.565 0 0 0 .21.187c.246.141.515.236.795.28.27.059.549.059.818 0h.211a.326.326 0 0 0 .233-.327Z"
            />
            <Path
                fill="#483F50"
                d="M170.645 126.964h1.689c-.562.038-1.127.038-1.689 0Z"
            />
            <Path
                fill="#F0D770"
                d="M170.108 127.43h1.963a2.99 2.99 0 0 0 .889-.163l.303-.164a.467.467 0 0 0 .187-.187v-.14a.328.328 0 0 0-.187-.211 1.528 1.528 0 0 0-.724 0h-1.379a2.455 2.455 0 0 0-1.169.164c-.234 0-.514.21-.538.491 0 .163.304.257.398.28.277.059.564.059.841 0a1.93 1.93 0 0 0 .795-.233c.14 0 .28-.187.28-.374l-1.706.654c.654.035 1.309.035 1.964 0l.49-.982h-1.379a3.965 3.965 0 0 0-.911 0l-.374.141a.578.578 0 0 0-.281.187s-.187.233 0 .35a.748.748 0 0 0 .538.187Z"
            />
            <Path
                fill="#483F50"
                d="M179.059 116.803a66.351 66.351 0 0 0-4.862-6.406 22.175 22.175 0 0 1-1.87-2.699 29.278 29.278 0 0 1-1.871 2.699 66.457 66.457 0 0 0-4.885 6.406 5.762 5.762 0 0 0 .841 7.627 6.087 6.087 0 0 0 4.231 2.346c.561.038 1.123.038 1.684 0 .552.037 1.107.037 1.659 0a6.084 6.084 0 0 0 4.231-2.346 5.744 5.744 0 0 0 .842-7.627Z"
            />
            <Path
                fill="#F0D770"
                d="M180.14 116.85c-1.94-3.261-4.675-5.866-6.732-9.128-.281-.446-1.894-.868-2.338-.305-1.753 2.91-4.231 5.303-6.125 8.119a9.197 9.197 0 0 0-1.73 3.943 5.532 5.532 0 0 0 .959 3.613 8.62 8.62 0 0 0 2.769 2.942 8.584 8.584 0 0 0 3.8 1.353 9.312 9.312 0 0 0 4.171-.116 9.345 9.345 0 0 0 3.706-1.926 9.054 9.054 0 0 0 2.338-4.036 6.31 6.31 0 0 0-1.005-4.459c-.327-.61-2.548-.586-2.338 0a5.72 5.72 0 0 1 .889 4.459 8.422 8.422 0 0 1-2.572 3.848 6.268 6.268 0 0 1-8.228-.117 7.635 7.635 0 0 1-2.338-4.154 6.8 6.8 0 0 1 1.66-4.247c1.917-3.004 4.675-5.467 6.405-8.542l-2.338-.328c1.94 3.262 4.676 5.866 6.733 9.128.467.493 2.664.446 2.314-.047Z"
            />
            <Path
                fill="#F0D770"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="m144.395 249.081-25.574-2.206v-1.549l-8.953.775-8.976-.775 1.192 1.432-26.766 2.346s-2.337 12.648 28.286 14.784h15.077c27.724-2.769 25.714-14.807 25.714-14.807Z"
            />
            <Path
                fill="#483F50"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M144.397 249.081c0 6.219-15.475 11.24-34.55 11.24-19.075 0-34.574-5.021-34.574-11.24 0-6.218 15.476-11.24 34.574-11.24s34.55 5.045 34.55 11.24Z"
            />
            <Path
                fill="#483F50"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M110.195 260.11c7.514 0 13.605-1.418 13.605-3.168 0-1.749-6.091-3.168-13.605-3.168s-13.605 1.419-13.605 3.168c0 1.75 6.091 3.168 13.605 3.168Z"
            />
            <Path
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="m75.063 248.988 34.83-102.312 34.76 102.406M109.844 238.475v-91.94"
            />
            <Path
                fill="#F0D770"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="m267.824 249.081-25.714-2.206v-1.549l-8.953.775-8.953-.775 1.192 1.432-26.789 2.346s-2.337 12.648 28.309 14.784h15.078c27.841-2.769 25.83-14.807 25.83-14.807Z"
            />
            <Path
                fill="#483F50"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M267.823 249.081c0 6.219-15.475 11.24-34.574 11.24-19.098 0-34.55-5.021-34.55-11.24 0-6.218 15.475-11.24 34.55-11.24 19.075 0 34.574 5.045 34.574 11.24Z"
            />
            <Path
                fill="#483F50"
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="M233.624 260.11c7.514 0 13.605-1.418 13.605-3.168 0-1.749-6.091-3.168-13.605-3.168-7.513 0-13.604 1.419-13.604 3.168 0 1.75 6.091 3.168 13.604 3.168Z"
            />
            <Path
                stroke="#F0D770"
                strokeMiterlimit={10}
                d="m198.488 248.988 34.831-102.312 34.737 102.406M233.273 238.475v-91.94"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h343v343H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent