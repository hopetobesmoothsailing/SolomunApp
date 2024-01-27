import * as React from "react"
import Svg, { G, Path, Mask, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#F0D770"
                d="M31.784 15.994A15.87 15.87 0 0 1 21.46 30.866a15.681 15.681 0 0 1-14.154-1.628 15.898 15.898 0 0 1-5.924-7.25A15.889 15.889 0 0 1 9.443 1.59a15.67 15.67 0 0 1 14.25.572 15.893 15.893 0 0 1 6.448 6.794 15.74 15.74 0 0 1 1.458 4.615c.122.801.184 1.61.185 2.422 0 .063.218.074.218.015 0-1.673-.262-3.335-.777-4.927a15.836 15.836 0 0 0-2.182-4.322A15.99 15.99 0 0 0 16.631.079a16.214 16.214 0 0 0-4.964.576 15.906 15.906 0 0 0-4.41 1.988 16.11 16.11 0 0 0-3.58 3.179 15.928 15.928 0 0 0 5.749 24.712 16.18 16.18 0 0 0 9.755 1.091 15.928 15.928 0 0 0 12.63-13.15c.125-.816.189-1.64.189-2.466 0-.065-.216-.08-.216-.015Z"
            />
            <Path
                fill="#483F50"
                d="M16 30.464c7.987 0 14.463-6.476 14.463-14.464S23.987 1.536 15.999 1.536 1.535 8.012 1.535 16 8.011 30.464 16 30.464Z"
            />
            <G fill="#F0D770" opacity={0.7}>
                <Path d="M7.814 22.343a2.678 2.678 0 0 1-.436-.269c0 .162.065.465.065.465a1.725 1.725 0 0 0-.298.33c.132.033.266.058.401.074.054.131.117.26.19.381.064-.131.118-.267.163-.405h.526c-.08-.077-.358-.31-.358-.31.05-.134.088-.272.114-.413l-.367.147ZM5.12 24.05a2.872 2.872 0 0 1-.183.49c.157-.04.436-.151.436-.151.116.095.243.173.38.233a3.515 3.515 0 0 0 0-.408c.126-.075.245-.16.358-.255a2.987 2.987 0 0 0-.437-.087 7.203 7.203 0 0 0-.094-.52c-.058.094-.237.41-.237.41a2.503 2.503 0 0 0-.437-.036l.214.325ZM26.429 23.54a2.91 2.91 0 0 0-.138.505c-.105-.125-.273-.382-.273-.382a1.66 1.66 0 0 1-.436-.033c.073-.114.153-.224.24-.33a2.849 2.849 0 0 1-.127-.407c.137.05.27.11.398.179.109-.112.257-.26.377-.367 0 .111-.046.471-.046.471.129.062.251.135.367.219l-.362.146ZM22.472 23.422a2.57 2.57 0 0 0-.519.044c.08-.142.266-.386.266-.386a1.708 1.708 0 0 1-.124-.437c.133.03.264.068.393.114.106-.096.22-.183.34-.26 0 .146-.012.292-.033.436.144.066.334.153.474.232-.105.03-.458.118-.458.118a2.444 2.444 0 0 1-.081.42l-.258-.28ZM15.999 11.725c.102.141.19.292.264.45.07-.149.161-.437.161-.437.147-.03.288-.08.422-.148a3.356 3.356 0 0 0-.319-.255c.015-.145.02-.291.013-.437-.118.086-.23.18-.336.28a7.79 7.79 0 0 0-.46-.253c.035.104.168.436.168.436a2.598 2.598 0 0 0-.295.31l.382.054ZM10.51 5.673c.153.076.3.167.436.27 0-.16-.066-.464-.066-.464.114-.097.215-.209.3-.332a3.56 3.56 0 0 0-.402-.072 2.831 2.831 0 0 0-.19-.382 3.19 3.19 0 0 0-.164.404c-.157 0-.366-.01-.526 0 .081.074.358.31.358.31-.05.134-.087.272-.113.412l.366-.146ZM12.575 4.754c.045-.168.107-.33.183-.487-.157.04-.436.151-.436.151a1.61 1.61 0 0 0-.38-.233c-.008.135-.008.27 0 .405a3.363 3.363 0 0 0-.34.258c.143.04.288.07.436.087.022.157.054.362.094.52.056-.094.238-.41.238-.41.144.025.29.037.436.036l-.231-.327ZM20.51 5.058c.061-.163.107-.331.138-.502.105.122.273.381.273.381.146-.009.293.001.436.031a3.297 3.297 0 0 1-.24.33c.052.132.095.269.127.408-.137-.05-.27-.11-.397-.18-.11.114-.258.262-.378.367 0-.111.046-.471.046-.471a2.389 2.389 0 0 1-.367-.218l.363-.146ZM29.067 15.055c-.011.174-.007.348.013.521-.133-.087-.37-.288-.37-.288-.14.051-.287.084-.436.098.038-.131.083-.26.136-.386a2.878 2.878 0 0 1-.238-.353c.146.009.292.029.436.059.074-.142.173-.326.258-.46.026.106.091.464.091.464.141.022.28.057.415.105l-.305.24ZM22.254 25.111a2.77 2.77 0 0 1-.336.4c.16.015.47 0 .47 0 .076.127.169.244.276.346.054-.124.099-.253.135-.384a2.94 2.94 0 0 0 .409-.126 3.147 3.147 0 0 0-.374-.218c.03-.153.068-.36.085-.52-.087.07-.362.306-.362.306a2.47 2.47 0 0 0-.388-.177l.085.373ZM3.308 16.224a2.7 2.7 0 0 1-.1.51c.148-.062.414-.217.414-.217.13.074.268.131.412.17a3.575 3.575 0 0 0-.07-.404c0-.026.234-.194.295-.307a2.931 2.931 0 0 0-.436-.016 6.146 6.146 0 0 0-.177-.497c-.041.102-.168.436-.168.436a2.75 2.75 0 0 0-.423.029l.253.296ZM8.727 24.716c.153.077.299.166.436.268 0-.161-.07-.464-.07-.464.114-.097.215-.209.3-.332a3.477 3.477 0 0 0-.402-.07 3.06 3.06 0 0 0-.192-.382 2.91 2.91 0 0 0-.162.406H8.11c.083.074.36.308.36.308a2.56 2.56 0 0 0-.109.412l.367-.146Z" />
            </G>
            <G fill="#F0D770" opacity={0.5}>
                <Path d="M8.073 14.337a.235.235 0 0 0 .033.437.245.245 0 0 0 .197-.437.218.218 0 0 0-.23 0ZM28.035 10.691a.236.236 0 0 0-.253-.36.244.244 0 0 0 .054.476.23.23 0 0 0 .199-.116ZM24.521 14.989a.236.236 0 0 0-.032-.436.244.244 0 0 0-.197.436.218.218 0 0 0 .23 0ZM23.425 20.883a.235.235 0 0 0 .253.357.245.245 0 0 0-.054-.475.218.218 0 0 0-.199.117ZM15.4 13.366a.234.234 0 0 0-.033-.436.245.245 0 0 0-.196.436.218.218 0 0 0 .23 0ZM3.545 12.624a.234.234 0 0 0 .253.357.244.244 0 0 0-.057-.475.217.217 0 0 0-.196.118ZM5.79 20.866a.236.236 0 0 0 .03.436.244.244 0 0 0 .198-.436.219.219 0 0 0-.229 0ZM4.277 11.058a.236.236 0 0 0-.253-.367.244.244 0 0 0 .054.476.218.218 0 0 0 .199-.11ZM21.453 27.073a.236.236 0 0 0 .03.436.244.244 0 0 0 .2-.436.218.218 0 0 0-.23 0ZM11.536 8.073a.235.235 0 0 0-.254-.358.244.244 0 0 0 .064.482.218.218 0 0 0 .19-.124ZM20.119 8.278a.236.236 0 0 0-.033-.436.244.244 0 0 0-.196.436.218.218 0 0 0 .229 0ZM10.613 26.983a.235.235 0 0 0 .253.358.244.244 0 0 0-.055-.476.218.218 0 0 0-.198.118ZM27.874 11.564a.234.234 0 0 0 .033.436.244.244 0 0 0 .196-.436.219.219 0 0 0-.229 0ZM7.936 13.043a.234.234 0 0 0 .253.357.244.244 0 0 0-.057-.475.218.218 0 0 0-.196.118ZM14.473 9.463a.236.236 0 0 0-.253-.36.247.247 0 0 0 .054.478.233.233 0 0 0 .199-.118ZM19.405 6.445a.236.236 0 0 0 .033.436.244.244 0 0 0 .199-.436.232.232 0 0 0-.232 0ZM17.894 11.02a.237.237 0 0 0-.081.358c.029.037.069.065.114.079a.244.244 0 0 0 .198-.437.23.23 0 0 0-.231 0ZM13.888 8.202a.236.236 0 0 0 .253.36.244.244 0 0 0-.055-.476.23.23 0 0 0-.198.116ZM18.45 3.183a.236.236 0 0 0 .253.36.244.244 0 0 0-.054-.476.23.23 0 0 0-.199.116ZM22.306 20.48a.235.235 0 0 0-.032-.437.244.244 0 0 0-.197.436.219.219 0 0 0 .23 0ZM28.284 16.416a.233.233 0 0 0 .033.436.244.244 0 0 0 .199-.436.23.23 0 0 0-.232 0ZM28.3 20.423a.235.235 0 0 0 .033.436.244.244 0 0 0 .198-.436.218.218 0 0 0-.231 0ZM20.731 28.463a.235.235 0 0 0-.253-.358.245.245 0 0 0 .057.478.218.218 0 0 0 .196-.12ZM25.358 15.906a.236.236 0 0 0-.03-.437.244.244 0 0 0-.199.437.231.231 0 0 0 .23 0ZM3.38 11.5a.236.236 0 0 0 .253.36.245.245 0 0 0-.057-.475.218.218 0 0 0-.196.115ZM7.2 23.988a.233.233 0 0 0 .252.358.244.244 0 0 0-.055-.476.218.218 0 0 0-.196.118ZM5.5 16.379a.235.235 0 0 0 .032.436.245.245 0 0 0 .196-.436.231.231 0 0 0-.229 0ZM8.527 26.938a.236.236 0 0 0-.253-.358.244.244 0 0 0 .054.476.218.218 0 0 0 .199-.118ZM3.165 19.945a.236.236 0 0 0 .253.36.244.244 0 0 0-.054-.476.218.218 0 0 0-.199.116ZM25.358 24.675a.235.235 0 0 0-.03-.436.245.245 0 0 0-.199.436.218.218 0 0 0 .23 0ZM13.643 10.852a.236.236 0 0 0-.03-.436.244.244 0 0 0-.199.436.218.218 0 0 0 .23 0ZM10.089 21.22a.236.236 0 0 0-.253-.36.244.244 0 0 0 .057.476.218.218 0 0 0 .196-.115ZM11.785 28.486a.236.236 0 0 0-.253-.36.244.244 0 0 0 .054.476.229.229 0 0 0 .199-.116Z" />
            </G>
            <Path
                fill="#F0D770"
                d="M14.598 4.476c.06-.219.085-.437.281-.568.042-.026.105-.035.142-.063.037-.028.037 0-.024-.013l.022.03c.034.079.059.16.074.245.022.265.028.532.02.798v2.217c0 .138.436.192.436.085V4.412a1.24 1.24 0 0 0-.067-.464.537.537 0 0 0-.424-.286.746.746 0 0 0-.595.142c-.154.16-.252.366-.278.586-.032.112.391.219.437.086h-.024ZM17.573 7.816a.685.685 0 0 0 .2-.834.728.728 0 0 0-.59-.375.849.849 0 0 0-.742.229c-.219.246-.16.606-.245.903a.368.368 0 0 1-.345.269h-.05a.139.139 0 0 1-.037-.024.54.54 0 0 1-.107-.219c-.041-.11-.469-.093-.423.037a.493.493 0 0 0 .24.31c.175.066.366.081.55.046a.846.846 0 0 0 .471-.183.654.654 0 0 0 .17-.413c.037-.264.03-.6.286-.757l.046-.026.041-.013h.07l.04.018c.036.02.07.044.1.074a.588.588 0 0 1-.057.844c-.076.057.02.107.074.122.1.03.208.022.301-.024l.007.016Z"
            />
            <Path
                fill="#F0D770"
                d="M16.303 5.82v.947a2.84 2.84 0 0 0 .028.624c.116.54.816.73 1.253.436.074-.05-.1-.129-.127-.137a.343.343 0 0 0-.275 0 .4.4 0 0 1-.218.076l-.041-.028a.371.371 0 0 1-.068-.075.826.826 0 0 1-.118-.453c-.017-.437 0-.873 0-1.31 0-.137-.436-.196-.436-.09l.002.01Z"
            />
            <Path
                fill="#F0D770"
                d="M15.536 4.955a.813.813 0 0 1 .24-.591.367.367 0 0 1 .242-.096h.057c.026 0 .042 0 0 0l.04.021c.187.131.19.437.183.633v.873c0 .14.42.218.42.111v-.822a1.134 1.134 0 0 0-.13-.703.923.923 0 0 0-.605-.319.744.744 0 0 0-.608.125.873.873 0 0 0-.277.641c0 .14.42.218.423.114l.015.013Z"
            />
            <Path
                fill="#483F50"
                d="M6.278 7.458c.384-.873.737-1.045 1.353-1.09a2.86 2.86 0 0 1 .833-.031h.044c.973.126 1.403.861 1.7 1.32.477.735 3.213 5.913 3.927 7.724-.926.528-1.918.932-2.95 1.202-.423.118-.847.332-1.091-.055-.188-.292-.142-.84-.2-1.171a36.52 36.52 0 0 0-1.932-5.64c-.193.23-.364.479-.512.741a36.201 36.201 0 0 0-1.327 3.404c-.098.327-.718 1.617-.912 1.222-.168-.343.471-6.26 1.067-7.626Z"
            />
            <Path
                fill="#F0D770"
                d="M6.383 7.493c.161-.382.38-.801.794-.967.166-.057.34-.091.515-.103.144-.022.29-.038.436-.045.15 0 .301.02.452.015l-.146-.05a.436.436 0 0 0 .231.074 1.678 1.678 0 0 1 .858.447c.234.238.437.504.606.792.2.314.378.655.556.973.681 1.24 1.334 2.499 1.969 3.758.316.63.628 1.263.927 1.902.116.251.231.504.34.757.024.06.144.264.116.315-.029.05-.107.065-.135.082l-.149.083a7.772 7.772 0 0 1-.355.181c-.475.224-.963.417-1.462.579-.236.078-.474.15-.714.218a5.94 5.94 0 0 1-.654.185.325.325 0 0 1-.328-.078.713.713 0 0 1-.141-.312 4.025 4.025 0 0 1-.072-.668 3.82 3.82 0 0 0-.127-.654 35.144 35.144 0 0 0-1.569-4.64 17.87 17.87 0 0 0-.26-.588c-.02-.042-.159-.118-.198-.068a4.55 4.55 0 0 0-.578.858c-.092.187-.17.38-.251.571a53.55 53.55 0 0 0-.635 1.632c-.146.393-.268.792-.415 1.183a5.038 5.038 0 0 1-.296.63c-.09.201-.22.38-.384.526 0 0-.037.018-.042.027-.004.008-.013 0-.013 0s.074.032.076.028c.003-.004-.021-.033-.024-.044-.002-.01 0-.06-.013-.091a2.371 2.371 0 0 1 0-.33c0-.377.04-.753.072-1.128.095-1.07.224-2.137.389-3.199.104-.9.291-1.789.558-2.655a2.05 2.05 0 0 1 .074-.192c.022-.052-.18-.131-.218-.07-.134.339-.237.69-.305 1.047a23.825 23.825 0 0 0-.284 1.528 47.663 47.663 0 0 0-.419 3.342c-.037.404-.072.81-.083 1.218 0 .16-.056.454.077.58.347.325.687-.414.8-.632.175-.371.324-.753.448-1.144.198-.56.41-1.117.628-1.671.163-.459.364-.903.6-1.329.13-.212.277-.414.437-.604l-.219-.068a32.872 32.872 0 0 1 1.659 4.597c.154.47.257.957.305 1.45.024.355.042.82.41.999.369.179.746-.02 1.091-.116a11.306 11.306 0 0 0 2.926-1.187.017.017 0 0 0 0-.022 26.952 26.952 0 0 0-.814-1.791c-.373-.77-.759-1.528-1.15-2.293-.613-1.19-1.213-2.4-1.904-3.54a4.897 4.897 0 0 0-.559-.809 2.21 2.21 0 0 0-1.33-.69l.121.049a.543.543 0 0 0-.334-.07 3.15 3.15 0 0 0-.517.013c-.23.014-.46.053-.683.115-.464.158-.71.596-.899 1.022-.024.054.182.133.208.072Z"
            />
            <Mask
                id="b"
                width={10}
                height={11}
                x={5}
                y={6}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <Path
                    fill="#fff"
                    d="M6.278 7.458c.384-.873.737-1.045 1.353-1.09a2.86 2.86 0 0 1 .833-.031h.044c.973.126 1.403.861 1.7 1.32.477.735 3.213 5.913 3.927 7.724-.926.528-1.918.932-2.95 1.202-.423.118-.847.332-1.091-.055-.188-.292-.142-.84-.2-1.171a36.52 36.52 0 0 0-1.932-5.64c-.193.23-.364.479-.512.741a36.201 36.201 0 0 0-1.327 3.404c-.098.327-.718 1.617-.912 1.222-.168-.343.471-6.26 1.067-7.626Z"
                />
            </Mask>
            <G fill="#F0D770" mask="url(#b)">
                <Path d="M9.54 14.264a5.992 5.992 0 0 1 3.514-1.623c.048 0 .039-.033.015-.06a.218.218 0 0 0-.15-.036 6.096 6.096 0 0 0-3.577 1.638c-.043.044.155.118.199.074v.007ZM8.664 11.613c.947-.78 2.055-1.294 3.301-1.257.04 0 .068-.01.052-.048-.015-.037-.106-.052-.14-.052a4.552 4.552 0 0 0-1.828.314 5.954 5.954 0 0 0-1.582.969c-.043.037.147.115.197.074ZM7.909 9.956c.46-.48.956-.924 1.486-1.327a5.154 5.154 0 0 1 1.77-.933c.039 0 .063-.029.037-.062-.027-.032-.118-.017-.151 0a5.252 5.252 0 0 0-1.809.94c-.551.416-1.068.876-1.545 1.375-.03.033.066.05.079.05a.17.17 0 0 0 .133-.034v-.009ZM8.315 6.295c-.414-.033-.896 0-1.197.33A1.252 1.252 0 0 0 6.899 7.7c.05.271.137.534.258.781.028.057.238.055.218 0-.218-.436-.386-1.003-.218-1.494.168-.491.685-.655 1.165-.605.026 0 .11 0 .113-.03.005-.03-.08-.055-.102-.057h-.018ZM5.45 9.094c-.025.437.293.836.616 1.091.351.31.798.489 1.266.506.24.003.475-.073.667-.218.04-.03-.02-.052-.043-.057a.218.218 0 0 0-.149.029c-.406.323-.988.08-1.364-.17-.375-.251-.8-.699-.774-1.2 0-.055-.218-.048-.218.02ZM5.1 11.837c.017.314.307.523.567.654.332.15.694.225 1.058.219.17.003.339-.028.496-.092.041-.02.03-.046 0-.061a.218.218 0 0 0-.155 0 .927.927 0 0 1-.437.054 2.253 2.253 0 0 1-.589-.118c-.305-.104-.705-.312-.724-.678 0-.061-.218-.05-.218.013l.002.009Z" />
                <Path d="M7.273 8.625c.263.417.491.855.681 1.31.026.058.234.073.218.02a8.785 8.785 0 0 0-.683-1.308.168.168 0 0 0-.124-.06c-.013 0-.109 0-.085.038h-.007Z" />
            </G>
            <Path
                fill="#483F50"
                d="M25.72 7.458c-.383-.873-.738-1.045-1.351-1.091a2.878 2.878 0 0 0-.836-.03h-.05c-.974.126-1.403.861-1.7 1.32-.478.735-3.214 5.913-3.928 7.723.929.53 1.923.934 2.957 1.203.436.118.847.331 1.09-.055.189-.292.143-.84.204-1.171a36.454 36.454 0 0 1 1.926-5.647c.194.23.365.48.513.742.5 1.11.943 2.247 1.327 3.403.1.328.718 1.617.912 1.222.172-.336-.467-6.253-1.065-7.619Z"
            />
            <Path
                fill="#F0D770"
                d="M25.824 7.458c-.205-.462-.474-.905-.986-1.056a3.816 3.816 0 0 0-.801-.118 2.836 2.836 0 0 0-.873.07c-.811.218-1.276.917-1.671 1.604-.91 1.58-1.746 3.212-2.55 4.846-.422.846-.85 1.697-1.2 2.575 0 .015.021.03.028.035.81.474 1.68.84 2.585 1.09.218.066.436.125.655.19.18.067.37.104.563.11.41 0 .554-.367.598-.725a8.12 8.12 0 0 1 .098-.873c.054-.218.117-.451.18-.676.206-.725.437-1.442.677-2.156.3-.902.646-1.787 1.037-2.653l-.219-.013c.23.266.428.559.587.873.099.218.186.42.273.632.231.563.436 1.13.655 1.7.144.39.255.799.42 1.18.1.236.218.463.354.679.094.148.218.345.395.4.297.087.308-.18.31-.387 0-.358-.028-.718-.057-1.073a46.401 46.401 0 0 0-.386-3.273c-.08-.54-.17-1.078-.28-1.613a9.133 9.133 0 0 0-.298-1.184 3.228 3.228 0 0 0-.079-.201c-.028-.066-.235-.06-.218 0 .128.32.226.65.293.988.11.487.198.978.279 1.469.176 1.078.315 2.16.416 3.246.042.415.077.83.096 1.244v.412a.701.701 0 0 1-.02.234c0 .013-.014.026-.017.037-.002.01-.024.024-.024.026 0 .002.075.042.048 0a.62.62 0 0 0-.078-.07.977.977 0 0 1-.103-.128 4.08 4.08 0 0 1-.37-.655c-.164-.347-.267-.72-.398-1.091a56.326 56.326 0 0 0-.615-1.621 7.792 7.792 0 0 0-.585-1.28 5.841 5.841 0 0 0-.403-.55c-.035-.044-.184-.081-.219-.016a33.023 33.023 0 0 0-1.586 4.364c-.137.417-.25.842-.34 1.272-.066.366 0 .799-.18 1.132a.42.42 0 0 1-.505.205c-.192-.043-.378-.11-.568-.163a11.072 11.072 0 0 1-2.836-1.152l.028.032c.238-.6.52-1.184.801-1.765.367-.76.748-1.512 1.135-2.262.624-1.159 1.228-2.359 1.913-3.494.15-.264.322-.515.515-.75.151-.184.333-.342.537-.465a1.715 1.715 0 0 1 .584-.22c.055-.011.123 0 .166-.046l-.078.022c.133 0 .266-.018.401-.018.152.007.304.022.454.046.168.008.335.042.493.098.389.164.598.58.757.945.027.048.238.048.212-.009Z"
            />
            <Mask
                id="c"
                width={10}
                height={11}
                x={17}
                y={6}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <Path
                    fill="#fff"
                    d="M25.72 7.458c-.383-.873-.738-1.045-1.351-1.091a2.878 2.878 0 0 0-.836-.03h-.05c-.974.126-1.403.861-1.7 1.32-.478.735-3.214 5.913-3.928 7.723.929.53 1.923.934 2.957 1.203.436.118.847.331 1.09-.055.189-.292.143-.84.204-1.171a36.454 36.454 0 0 1 1.926-5.647c.194.23.365.48.513.742.5 1.11.943 2.247 1.327 3.403.1.328.718 1.617.912 1.222.172-.336-.467-6.253-1.065-7.619Z"
                />
            </Mask>
            <G fill="#F0D770" mask="url(#c)">
                <Path d="M22.651 14.226c-.953-.964-2.324-1.527-3.66-1.682-.145-.018-.058.085.038.096a5.832 5.832 0 0 1 3.428 1.584.2.2 0 0 0 .142.052c.024 0 .09-.013.052-.05ZM23.515 11.564c-.995-.818-2.182-1.348-3.491-1.309-.14 0 .022.102.09.1a4.244 4.244 0 0 1 1.745.308c.54.231 1.041.543 1.488.923.044.037.25.05.164-.022h.004ZM24.302 9.933c-.476-.5-.992-.959-1.544-1.373a5.22 5.22 0 0 0-1.811-.938c-.066-.017-.245.046-.107.079a5.153 5.153 0 0 1 1.767.938c.53.401 1.027.845 1.486 1.327.046.048.244 0 .218-.033h-.009ZM23.737 6.382c.26-.035.526.01.76.13a.837.837 0 0 1 .362.47c.164.485-.013 1.043-.218 1.484-.029.063.183.1.218.046a2.35 2.35 0 0 0 .275-1.333.978.978 0 0 0-.655-.792 2.012 2.012 0 0 0-.829-.083c-.04 0-.065.02-.046.057.02.037.114.032.146.03l-.013-.009ZM26.324 9.095c.033.497-.378.93-.762 1.187s-.955.478-1.363.155a.169.169 0 0 0-.138-.018s-.104.033-.07.06c.352.278.84.241 1.242.097a2.26 2.26 0 0 0 1.11-.848 1.09 1.09 0 0 0 .2-.655c0-.061-.219-.044-.219.02v.002ZM26.68 11.837c-.018.362-.415.57-.716.67a2.142 2.142 0 0 1-.572.113.954.954 0 0 1-.436-.056.204.204 0 0 0-.148 0c-.022 0-.083.039-.038.06.31.112.645.128.963.047a1.91 1.91 0 0 0 .958-.424.633.633 0 0 0 .218-.419c0-.056-.218-.054-.218.013l-.011-.004Z" />
                <Path d="M24.519 8.604a8.717 8.717 0 0 0-.69 1.31c-.02.047.186.11.219.045.19-.448.416-.88.676-1.29.037-.056-.168-.115-.2-.065h-.005Z" />
            </G>
            <Path
                fill="#483F50"
                d="M10.286 16.94c-.203.155-.437.269-.626.437a3.49 3.49 0 0 0-.498.467c-.412.484-1.721.997-2.321 1.139a6.352 6.352 0 0 1-1.853.039c-.414-.033-.58.072-.613.295.042.087.09.173.142.255.171.261.423.46.718.565.684.29 1.454.299 2.144.026.616-.273 1.264-.615 1.694-1.148.15-.197.29-.402.419-.615.09-.19.207-.366.347-.523.311-.25.794-.144 1.09-.463a.82.82 0 0 0 .046-.995c-.229.188-.484.362-.69.521Z"
            />
            <Path
                fill="#F0D770"
                d="M10.193 16.916c-.25.19-.53.334-.768.543-.179.16-.318.356-.502.509a4.536 4.536 0 0 1-1.241.674 4.718 4.718 0 0 1-1.431.364 7.31 7.31 0 0 1-1.002-.023 1.746 1.746 0 0 0-.75.026c-.127.05-.278.196-.208.342.109.236.274.441.48.598.49.312 1.063.47 1.643.452a3.453 3.453 0 0 0 1.621-.482c.508-.25.948-.618 1.285-1.072.105-.148.201-.299.297-.454.072-.12.131-.248.218-.364.18-.26.476-.28.755-.356a.82.82 0 0 0 .59-.482.874.874 0 0 0-.092-.785c-.03-.048-.16-.05-.2-.018-.22.183-.46.347-.688.524-.066.048.14.085.187.048.23-.175.465-.338.688-.522l-.199-.017a.841.841 0 0 1 .103.716.722.722 0 0 1-.554.473c-.21.033-.413.099-.603.194-.174.148-.31.335-.399.546-.273.493-.652.92-1.11 1.248a5.616 5.616 0 0 1-.716.401 3.103 3.103 0 0 1-.812.293c-.297.044-.6.036-.894-.022a2.472 2.472 0 0 1-.85-.295 1.495 1.495 0 0 1-.516-.576c-.12-.218.098-.345.296-.351.29 0 .59.041.873.05.302.014.604.002.903-.037.408-.065.805-.18 1.185-.34.45-.157.876-.378 1.264-.655.192-.148.333-.345.51-.51.247-.219.541-.38.807-.58.083-.06-.122-.097-.17-.06Z"
            />
            <Path
                fill="#F0D770"
                d="M4.989 19.012a6.35 6.35 0 0 0 1.852-.029c.6-.13 1.91-.641 2.33-1.128a3.49 3.49 0 0 1 .49-.478c.198-.157.423-.27.626-.436.202-.166.46-.334.687-.522a.764.764 0 0 0-.218-.218 1.5 1.5 0 0 1-1.528.674c-.56-.06-.938-.292-1.492-.074-.666.288-1.22.838-1.826 1.229-.356.218-.7.475-1.076.67-.162.082-.476.152-.517.349a.471.471 0 0 0 .059.248c.032-.213.205-.314.613-.285Z"
            />
            <Path
                fill="#F0D770"
                d="M5.017 19.057a7.747 7.747 0 0 0 1.622 0 5.016 5.016 0 0 0 1.069-.292c.379-.14.744-.315 1.09-.524.144-.083.277-.183.398-.297.157-.148.288-.318.451-.462.219-.186.467-.316.696-.487.23-.17.493-.358.727-.55a.024.024 0 0 0 0-.023.999.999 0 0 0-.255-.243c-.035-.022-.15-.054-.181 0a1.476 1.476 0 0 1-1.091.655c-.524.037-1.02-.218-1.54-.166-.522.052-.974.436-1.373.729-.47.351-.943.69-1.438 1.004a6.71 6.71 0 0 1-.733.386.508.508 0 0 0-.231.174.358.358 0 0 0 .03.336c.018.044.2.087.218.024.046-.266.3-.281.528-.266.146 0 .05-.087-.043-.094-.273-.017-.642 0-.699.323l.219.026c-.048-.115-.094-.233 0-.336a.715.715 0 0 1 .279-.159c.229-.097.448-.216.654-.353.454-.293.913-.603 1.349-.934.226-.178.462-.343.707-.493.232-.16.502-.257.783-.28.275.022.548.069.814.14.216.039.436.048.655.028a1.595 1.595 0 0 0 1.123-.694l-.183-.013c.054.03.102.07.142.118.052.076.017.098-.048.149-.103.08-.218.159-.314.235-.219.155-.421.306-.64.45-.199.124-.384.27-.55.436-.119.14-.248.27-.386.39a4.453 4.453 0 0 1-1.012.57 6.354 6.354 0 0 1-1.028.354 5.911 5.911 0 0 1-1.85.045c-.028 0-.092 0-.085.042.006.041.094.05.126.052Z"
            />
            <Path
                fill="#483F50"
                d="M21.713 16.94c.203.155.436.269.628.437.178.143.341.303.487.478.421.486 1.73.997 2.333 1.128a6.348 6.348 0 0 0 1.852.039c.412-.033.58.072.611.295a2.495 2.495 0 0 1-.14.255 1.448 1.448 0 0 1-.726.576c-.685.29-1.456.299-2.147.026-.609-.284-1.264-.626-1.7-1.159a6.971 6.971 0 0 1-.421-.615 2.226 2.226 0 0 0-.345-.523c-.312-.25-.796-.144-1.09-.463a.825.825 0 0 1-.047-.995c.245.188.5.362.705.521Z"
            />
            <Path
                fill="#F0D770"
                d="M21.6 16.965c.217.172.481.303.7.486.185.155.33.347.506.51.315.266.67.478 1.054.63.368.168.75.303 1.143.405a5.534 5.534 0 0 0 1.717.079c.203-.014.537-.096.705.067a.197.197 0 0 1 .041.249c-.056.12-.13.232-.218.332-.38.436-1.05.584-1.601.593a3.273 3.273 0 0 1-1.626-.515 3.435 3.435 0 0 1-1.215-1.09c-.087-.132-.175-.263-.253-.398a3.14 3.14 0 0 0-.219-.351.98.98 0 0 0-.606-.314c-.28-.064-.543-.14-.68-.415a.822.822 0 0 1 .063-.816l-.219.026c.218.183.459.347.688.522.052.041.244-.02.207-.048-.218-.177-.467-.34-.69-.524a.174.174 0 0 0-.218.026.812.812 0 0 0 .34 1.213c.219.088.465.094.677.201.25.124.342.41.484.633.168.263.36.51.576.735.19.19.4.36.627.504a4.187 4.187 0 0 0 1.573.668 3.248 3.248 0 0 0 1.745-.242c.232-.095.436-.245.596-.437.076-.097.142-.202.198-.312a.217.217 0 0 0-.013-.25.562.562 0 0 0-.466-.177c-.315 0-.633.045-.95.052a4.407 4.407 0 0 1-1.612-.242 5.76 5.76 0 0 1-1.434-.692 5.238 5.238 0 0 1-.571-.55 8.993 8.993 0 0 0-.832-.606c-.056-.042-.246.02-.218.048Z"
            />
            <Path
                fill="#F0D770"
                d="M27.01 19.01a6.348 6.348 0 0 1-1.852-.039c-.602-.13-1.911-.641-2.332-1.128a3.472 3.472 0 0 0-.487-.477c-.2-.158-.436-.271-.628-.437-.192-.166-.46-.334-.688-.521a.79.79 0 0 1 .219-.219 1.502 1.502 0 0 0 1.527.675c.541-.06.932-.3 1.475-.064.654.288 1.22.838 1.824 1.229.356.218.7.476 1.078.67.16.083.473.152.515.349a.45.45 0 0 1-.06.249c-.01-.214-.178-.315-.59-.286Z"
            />
            <Path
                fill="#F0D770"
                d="M26.946 18.961a6.873 6.873 0 0 1-1.625 0 4.933 4.933 0 0 1-1.004-.303 5.461 5.461 0 0 1-1.047-.524c-.31-.207-.522-.513-.81-.746-.218-.175-.46-.304-.68-.47-.22-.165-.454-.335-.67-.51l.015.048a.89.89 0 0 1 .231-.218l-.196-.04c.226.333.562.576.949.686.47.12.919 0 1.381-.083.295-.069.605-.03.873.111a5 5 0 0 1 .676.437c.437.327.886.654 1.349.96.25.175.515.327.792.456.107.036.209.085.305.144.136.1.094.233.035.368l.218.044c-.06-.36-.493-.38-.783-.36-.05 0-.037.035-.015.059a.2.2 0 0 0 .148.04c.218-.014.402 0 .436.23 0 .053.188.099.219.042a.329.329 0 0 0-.127-.476c-.188-.115-.404-.18-.596-.292-.508-.3-.998-.632-1.466-.993-.416-.316-.855-.674-1.36-.84-.503-.166-1 .052-1.526.098a1.388 1.388 0 0 1-.747-.113c-.226-.124-.42-.3-.563-.515a.183.183 0 0 0-.196-.04.841.841 0 0 0-.218.219c-.015.02 0 .035.015.048.205.17.423.323.637.482.214.16.437.284.642.436.33.25.56.594.91.823.339.214.698.393 1.073.537.33.139.673.247 1.023.323a6.741 6.741 0 0 0 1.85.028c.05 0 .04-.033.016-.059a.22.22 0 0 0-.164-.037ZM15.999 26.88c-.472-.046-1.194 0-2.093-.042.18.436.218 1.067.513 1.46.268.347.82.331 1.296.353.094.013.189.017.284.013.094.005.19 0 .283-.013.476-.022 1.028 0 1.296-.353.304-.393.336-1.013.515-1.46-.899.046-1.62 0-2.094.041Z"
            />
            <Path
                fill="#F0D770"
                d="M16.048 26.837c-.694-.063-1.396 0-2.092-.041-.022 0-.177.013-.157.063.165.436.194.899.414 1.31.22.41.609.488 1.03.516.448.029.897.029 1.344 0 .384-.02.845-.065 1.091-.392.32-.415.33-.985.513-1.46.015-.04-.066-.042-.083-.04-.696.033-1.4-.021-2.095.042-.028 0-.12.013-.126.052-.007.04.056.044.083.042.693-.066 1.398 0 2.094-.044l-.085-.041c-.146.38-.185.792-.345 1.167a.89.89 0 0 1-.36.452c-.192.085-.4.129-.61.128-.397.022-.795.022-1.192 0-.4-.02-.812-.065-1.034-.436-.223-.37-.264-.899-.437-1.333l-.154.063c.693.035 1.398-.022 2.092.044.08.002.249-.092.11-.092Z"
            />
            <Path
                fill="#F0D770"
                d="M22.221 16.43c-.078-.118-.436 0-.53-.074-.164-.133-.08-.321.175-.28-.284-.048-.873-.272-1.06-.512-.252-.312-.058-.315-.514-.29a1.006 1.006 0 0 1-.639-.125c-.155-.107-.192-.349-.347-.436-.312-.155-1.244.218-1.09-.437-.04.542-.538.79-1.046.893-.087.017-.748.046-1.18.063-.437-.017-1.091-.046-1.179-.063-.508-.103-1.005-.351-1.047-.893.155.655-.774.284-1.09.437-.156.078-.195.32-.35.436a1.006 1.006 0 0 1-.64.125c-.436-.014-.25 0-.501.3-.192.24-.78.465-1.06.513.253-.041.338.146.174.28-.098.078-.452-.044-.53.074-.127.19.364.94.452 1.123.523 1.091.62 2.117.872 3.273.218.958.707 1.746 1 2.678.23.722.3 1.45.595 2.166.23.559.447 1.288.978 1.648a2.13 2.13 0 0 0 1.815.18.888.888 0 0 0 .502-.412c.11.196.29.343.504.413a2.124 2.124 0 0 0 1.813-.181c.533-.36.749-1.091.978-1.648.296-.715.366-1.444.595-2.166.295-.923.788-1.72 1-2.678.26-1.16.355-2.181.872-3.273.112-.194.605-.944.478-1.134Z"
            />
            <Path
                fill="#F0D770"
                d="M22.318 16.426a.483.483 0 0 0-.386-.096c-.08 0-.174.037-.218-.061-.044-.098.07-.157.164-.146.093.01.082-.072-.014-.09-.356-.05-.689-.209-.953-.454-.076-.085-.111-.203-.188-.283a.34.34 0 0 0-.24-.083c-.207.019-.415.01-.62-.029-.218-.072-.246-.283-.394-.436-.149-.153-.443-.129-.657-.129a.959.959 0 0 1-.386 0c-.129-.054-.116-.218-.092-.325l-.218-.04a.923.923 0 0 1-.628.758 2.381 2.381 0 0 1-.838.14c-.363.022-.728.027-1.091.013a4.143 4.143 0 0 1-.847-.068c-.406-.107-.783-.351-.825-.803l-.218-.028a.29.29 0 0 1-.076.32.57.57 0 0 1-.319.05c-.218 0-.493-.065-.69.047-.15.085-.185.279-.307.395-.183.172-.465.141-.698.137a.494.494 0 0 0-.292.037c-.075.059-.112.179-.168.253-.128.148-.29.263-.472.334-.184.09-.38.156-.582.194-.11.02.074.098.117.092.147-.018.12.155.025.205-.097.05-.219 0-.293 0-.124 0-.26.026-.262.175.022.161.08.317.168.453.077.157.166.308.251.46.546.965.675 2.12.9 3.186.13.578.318 1.14.562 1.68.252.544.457 1.107.616 1.685.12.603.283 1.197.486 1.778.147.454.36.883.633 1.274a1.9 1.9 0 0 0 1.403.642c.508.028 1.154-.068 1.433-.548l-.218-.037c.218.378.655.52 1.06.57a2.25 2.25 0 0 0 1.334-.219c.363-.228.643-.567.798-.966.215-.442.393-.9.533-1.37.154-.563.244-1.142.436-1.694.174-.51.41-.995.613-1.494a8.39 8.39 0 0 0 .452-1.576c.105-.521.196-1.047.336-1.562a6.02 6.02 0 0 1 .556-1.412c.098-.165.187-.337.266-.512.046-.11.125-.28.06-.397-.033-.057-.238-.062-.219-.014.055.094 0 .24-.046.332a3.83 3.83 0 0 1-.218.454c-.184.32-.339.656-.463 1.004-.325.95-.399 1.963-.682 2.919-.156.481-.34.953-.553 1.412a8.916 8.916 0 0 0-.51 1.48 12.337 12.337 0 0 1-.417 1.55c-.14.41-.315.807-.526 1.185a1.629 1.629 0 0 1-1.158.784c-.491.082-1.154.021-1.427-.452-.024-.042-.177-.092-.208-.04-.272.47-.903.564-1.398.507a1.581 1.581 0 0 1-1.22-.812 5.017 5.017 0 0 1-.303-.654c-.098-.247-.2-.491-.284-.742-.194-.59-.279-1.21-.462-1.8-.173-.557-.437-1.091-.655-1.615a8.734 8.734 0 0 1-.486-1.689c-.201-1.019-.387-2.049-.904-2.963a3.938 3.938 0 0 1-.272-.543.55.55 0 0 1-.053-.242c.013-.11.12-.092.218-.088.149 0 .384.03.424-.168.039-.198-.273-.244-.41-.229l.117.092a2.27 2.27 0 0 0 .986-.426c.104-.094.19-.207.254-.331.063-.098.194-.057.296-.055.214.024.43-.01.627-.096.176-.096.218-.277.342-.412a.438.438 0 0 1 .351-.083c.133 0 .269.017.402 0a.569.569 0 0 0 .347-.096.347.347 0 0 0 .07-.354c-.014-.054-.219-.076-.219-.026a.997.997 0 0 0 .655.81c.299.118.617.179.938.179.417.021.827.032 1.246.015.33.005.657-.031.978-.107.416-.129.798-.393.842-.857 0-.064-.2-.1-.218-.04-.057.269.08.417.342.463.131.013.264.013.395 0a.998.998 0 0 1 .369 0c.153.052.2.3.327.403a.946.946 0 0 0 .565.18h.312a.508.508 0 0 0 .116 0c0-.02.022 0 0 0a.873.873 0 0 0 .218.311c.311.263.689.436 1.091.498l-.013-.09c-.168-.02-.47.068-.295.286a.328.328 0 0 0 .243.114c.07 0 .292-.04.334 0 .04.039.257.09.202.026Z"
            />
            <Path
                fill="#483F50"
                d="M11.036 17.805a2.7 2.7 0 0 1 1.93.776c.41.49.68 1.08.78 1.71.129.68.207 1.368.233 2.058.02.642.088 1.28.203 1.912.03.193.088.38.172.556.1.154.257.263.437.301a2.491 2.491 0 0 0 1.545-.056c.129-.06-.057-.09-.118-.062-.233.083-.48.114-.727.092a1.745 1.745 0 0 1-.694-.129c-.31-.155-.355-.573-.412-.872-.1-.626-.16-1.257-.183-1.89a12.802 12.802 0 0 0-.247-2.038 3.49 3.49 0 0 0-.779-1.63c-.54-.58-1.309-.792-2.088-.82-.096 0-.196.085-.048.091h-.004ZM11.968 22.535c.19.302.435.566.723.777a.19.19 0 0 0 .146.032c.026 0 .083-.021.046-.054a2.745 2.745 0 0 1-.703-.753c-.02-.04-.092-.046-.129-.046-.037 0-.102 0-.083.044ZM13.442 17.172c.394.08.74.31.969.642.033.054.242.037.218-.014a1.354 1.354 0 0 0-.456-.436 2.153 2.153 0 0 0-.61-.258.194.194 0 0 0-.15 0c-.036.029 0 .055.036.062l-.007.004ZM14.318 16.801c.27.295.594.567.755.943.017.041.083.056.122.063.04.006.105 0 .087-.033-.165-.384-.493-.654-.77-.969a.196.196 0 0 0-.14-.052c-.026 0-.087 0-.054.048ZM15.789 17.643a5.544 5.544 0 0 0-.153-1.35c0-.06-.218-.096-.218-.03.104.433.155.878.153 1.324 0 .07.218.109.218.056ZM13.983 24.793a1.148 1.148 0 0 0-.72.76c-.101.347-.073.72.078 1.05.027.056.238.05.219 0-.282-.62-.116-1.478.58-1.729.041-.015.037-.04 0-.061a.199.199 0 0 0-.155-.013l-.002-.007Z"
            />
            <Path
                fill="#483F50"
                d="M20.893 17.71a2.972 2.972 0 0 0-1.911.67c-.436.428-.74.973-.873 1.57-.345 1.284-.242 2.63-.436 3.927a6.282 6.282 0 0 1-.1.5.913.913 0 0 1-.238.508c-.206.132-.447.2-.692.194a1.77 1.77 0 0 1-.86-.094c-.06-.026-.25 0-.122.055.447.165.933.199 1.399.096a.93.93 0 0 0 .495-.206.872.872 0 0 0 .218-.418c.146-.632.23-1.277.251-1.925.02-.695.077-1.389.175-2.077a3.947 3.947 0 0 1 .706-1.778c.509-.655 1.284-.902 2.082-.93.04 0 .068-.013.05-.052-.017-.04-.111-.044-.144-.044v.004ZM19.818 22.52a2.753 2.753 0 0 1-.705.752c-.033.03.05.061.066.066.015.004.104.022.137 0 .286-.21.53-.473.718-.775.022-.041-.183-.1-.218-.035l.002-.008ZM18.43 17.09c-.21.053-.411.137-.596.252a1.31 1.31 0 0 0-.451.436c-.035.059.172.116.2.066.233-.338.586-.572.987-.655.04 0 .048-.035.013-.061a.218.218 0 0 0-.153-.03v-.007ZM17.489 16.76c-.275.303-.602.582-.768.966-.024.052.18.127.218.066.163-.376.484-.655.755-.948.046-.047-.15-.13-.194-.085h-.011ZM16.472 17.575c-.002-.45.049-.9.153-1.337 0-.057-.205-.083-.218-.018a5.536 5.536 0 0 0-.153 1.338c0 .067.218.074.218.017ZM17.893 24.859c.694.248.843 1.108.563 1.721-.02.044.186.1.218.037.151-.33.177-.703.075-1.051a1.169 1.169 0 0 0-.731-.764c-.04-.013-.114-.037-.15 0-.038.037 0 .052.027.066l-.002-.01ZM13.872 27.492c.392.158.82.212 1.239.157a1.262 1.262 0 0 0 .993-.539l-.218-.015c.218.375.654.51 1.053.558.449.055.903-.02 1.31-.218.045-.024-.016-.054-.035-.063a.218.218 0 0 0-.15 0c-.577.288-1.598.34-1.965-.299-.026-.044-.18-.063-.218-.013-.349.604-1.292.602-1.863.369a.203.203 0 0 0-.155 0c-.028.017-.052.041 0 .06l.009.003ZM11.707 19.836c.365-.024 1.528.314 1.45.873-.066.373-.503.412-.839.28-.537-.215-.755-.697-.61-1.153Z"
            />
            <Path
                fill="#483F50"
                d="M20.29 19.836c-.366-.024-1.527.314-1.45.873.058.377.51.417.84.284.536-.219.768-.7.61-1.157ZM17.382 24.874c-.459.06-.921.09-1.384.085a9.783 9.783 0 0 1-1.38-.085c.253.273.547.506.872.69.12.263.274.51.46.73 0-.043.027-.082.04-.122.015.04.028.079.041.122.186-.22.341-.467.46-.73.33-.184.63-.416.89-.69Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h32v32H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent
