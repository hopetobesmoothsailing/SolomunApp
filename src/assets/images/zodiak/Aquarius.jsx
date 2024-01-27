import * as React from "react"
import Svg, { G, Path, Mask, Defs, ClipPath } from "react-native-svg"
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
                fill="#483F50"
                d="M171.453 327.144c85.611 0 155.012-69.693 155.012-155.662 0-85.97-69.401-155.663-155.012-155.663-85.61 0-155.012 69.693-155.012 155.663 0 85.969 69.402 155.662 155.012 155.662Z"
            />
            <G fill="#F0D770" opacity={0.7}>
                <Path d="M266.21 88.848a31.22 31.22 0 0 0-5.565.47c.865-1.503 2.852-4.157 2.852-4.157a18.136 18.136 0 0 1-1.332-4.696 37.34 37.34 0 0 1 4.209 1.197 31.572 31.572 0 0 1 3.647-2.794 34.33 34.33 0 0 1-.35 4.697c1.543.68 3.577 1.62 5.074 2.348-1.146.329-4.911 1.291-4.911 1.291a25.885 25.885 0 0 1-.865 4.509l-2.759-2.865ZM71.14 176.648a29.831 29.831 0 0 1 2.829 4.837c.724-1.573 1.73-4.696 1.73-4.696a17.837 17.837 0 0 0 4.513-1.597 35.825 35.825 0 0 0-3.414-2.794c.19-1.558.245-3.13.164-4.697a31.79 31.79 0 0 0-3.602 3.006c-1.45-.869-3.39-1.996-4.957-2.724.398 1.127 1.824 4.696 1.824 4.696a27.856 27.856 0 0 0-3.18 3.335l4.092.634ZM118.305 57.993a29.837 29.837 0 0 1 4.677 2.888c0-1.738-.725-5.002-.725-5.002a18.394 18.394 0 0 0 3.227-3.545 37.993 37.993 0 0 0-4.256-.846 35.483 35.483 0 0 0-2.034-4.11 34.509 34.509 0 0 0-1.777 4.345h-5.636c.865.799 3.835 3.311 3.835 3.311a28.84 28.84 0 0 0-1.192 4.438l3.881-1.48ZM124.269 103.83a29.143 29.143 0 0 1 1.964-5.26c-1.683.423-4.676 1.62-4.676 1.62a18.725 18.725 0 0 0-4.069-2.512 37.843 37.843 0 0 0 0 4.391 29.903 29.903 0 0 0-3.648 2.747 31.04 31.04 0 0 0 4.677.94c.233 1.69.584 3.898.982 5.588.631-1.009 2.572-4.414 2.572-4.414 1.506.265 3.031.399 4.56.399l-2.362-3.499ZM219.698 53.72a29.834 29.834 0 0 0 1.45-5.402c1.122 1.315 2.923 4.11 2.923 4.11a17.61 17.61 0 0 1 4.677.329 35.435 35.435 0 0 1-2.573 3.545 34.341 34.341 0 0 1 1.357 4.391 31.796 31.796 0 0 1-4.256-1.925c-1.193 1.22-2.76 2.818-4.069 3.945 0-1.198.491-5.072.491-5.072a26.672 26.672 0 0 1-3.928-2.349l3.928-1.573ZM288.517 134.967a30.503 30.503 0 0 0 .14 5.612c-1.45-.939-3.975-3.1-3.975-3.1a18.627 18.627 0 0 1-4.677 1.057 34.895 34.895 0 0 1 1.45-4.133 33.054 33.054 0 0 1-2.572-3.827c1.572.101 3.134.313 4.677.634.771-1.503 1.824-3.499 2.759-4.955.257 1.174.982 5.002.982 5.002 1.501.256 2.979.633 4.42 1.127l-3.204 2.583ZM248.156 101.293a29.786 29.786 0 0 1-3.601 4.298c1.707.164 5.027 0 5.027 0a18.002 18.002 0 0 0 2.97 3.733 33.51 33.51 0 0 0 1.45-4.133 31.176 31.176 0 0 0 4.373-1.362 33.855 33.855 0 0 0-3.999-2.348c.327-1.643.725-3.874.912-5.588-.935.751-3.882 3.287-3.882 3.287a26.43 26.43 0 0 0-4.162-1.902l.912 4.015ZM82.365 119.492a31.404 31.404 0 0 1-1.076 5.518c1.59-.704 4.42-2.348 4.42-2.348a17.776 17.776 0 0 0 4.419 1.808 34.753 34.753 0 0 0-.725-4.32c0-.282 2.479-2.09 3.157-3.335a34.945 34.945 0 0 0-4.677-.164c-.514-1.597-1.24-3.734-1.894-5.331-.468 1.104-1.8 4.697-1.8 4.697a24.519 24.519 0 0 0-4.677.375l2.853 3.1ZM64.966 111.368a29.61 29.61 0 0 1 4.817 2.982c-.117-1.738-.749-5.002-.749-5.002a18.17 18.17 0 0 0 3.087-3.687 37.63 37.63 0 0 0-4.232-.704 31.323 31.323 0 0 0-2.058-4.109 34.43 34.43 0 0 0-1.707 4.367h-5.66c.89.799 3.86 3.311 3.86 3.311a27.43 27.43 0 0 0-1.193 4.438l3.835-1.596ZM295.464 226.218a29.82 29.82 0 0 1-2.853-4.837c-.725 1.573-1.731 4.696-1.731 4.696a17.738 17.738 0 0 0-4.489 1.597 33.114 33.114 0 0 0 3.414 2.747 33.186 33.186 0 0 0-.164 4.697 34.24 34.24 0 0 0 3.601-2.982c1.45.845 3.391 1.972 4.957 2.7-.397-1.104-1.8-4.696-1.8-4.696a27.886 27.886 0 0 0 3.157-3.335l-4.092-.587ZM81.967 59.332a29.095 29.095 0 0 1-1.964 5.26c1.683-.423 4.677-1.62 4.677-1.62a17.452 17.452 0 0 0 4.045 2.512 33.97 33.97 0 0 0 0-4.391 31.878 31.878 0 0 0 3.648-2.748 31.754 31.754 0 0 0-4.677-.939c-.257-1.69-.608-3.898-1.005-5.589-.632 1.01-2.55 4.415-2.55 4.415a26.527 26.527 0 0 0-4.676-.4l2.502 3.5ZM86.901 161.008a31.537 31.537 0 0 0-1.473 5.425c-1.1-1.339-2.9-4.133-2.9-4.133a17.606 17.606 0 0 1-4.676-.329 35.552 35.552 0 0 1 2.572-3.546 30.82 30.82 0 0 1-1.357-4.391 33.22 33.22 0 0 1 4.256 1.926c1.17-1.198 2.76-2.795 4.046-3.945 0 1.197-.468 5.072-.468 5.072a27.991 27.991 0 0 1 3.929 2.348l-3.929 1.573ZM33.094 212.974a30.47 30.47 0 0 0-.14-5.613c1.45.916 4.092 3.264 4.092 3.264a18.632 18.632 0 0 1 4.677-1.056 33.379 33.379 0 0 1-1.45 4.132 33.217 33.217 0 0 1 2.572 3.828 33.643 33.643 0 0 1-4.676-.634c-.772 1.503-1.824 3.499-2.76 4.955-.257-1.174-.982-5.002-.982-5.002a29.312 29.312 0 0 1-4.443-1.127l3.11-2.747ZM35.129 148.023a31.276 31.276 0 0 1 3.601-4.297c-1.707-.165-5.004 0-5.004 0a18.396 18.396 0 0 0-2.993-3.734 33.508 33.508 0 0 0-1.45 4.133c-1.489.346-2.95.802-4.373 1.362a33.713 33.713 0 0 0 3.999 2.348c-.328 1.667-.725 3.875-.912 5.589.935-.752 3.882-3.288 3.882-3.288a26.34 26.34 0 0 0 4.162 1.902l-.912-4.015ZM312.063 171.481c.19-1.861.55-3.7 1.075-5.495-1.59.681-4.419 2.349-4.419 2.349a18.679 18.679 0 0 0-4.42-1.809c.149 1.455.391 2.898.725 4.321 0 .282-2.479 2.09-3.157 3.335 1.553.171 3.116.226 4.677.164.514 1.62 1.239 3.757 1.894 5.354.468-1.104 1.824-4.697 1.824-4.697a29.642 29.642 0 0 0 4.56-.375l-2.759-3.147ZM279.491 249.817a29.63 29.63 0 0 1-4.793-2.865c.116 1.738.748 4.978.748 4.978a18.952 18.952 0 0 0-3.204 3.57c1.418.34 2.855.599 4.303.775a32.94 32.94 0 0 0 2.058 4.085 30.233 30.233 0 0 0 1.73-4.367c1.707 0 3.929.117 5.659 0-.889-.799-3.858-3.288-3.858-3.288a28.84 28.84 0 0 0 1.169-4.461l-3.812 1.573Z" />
            </G>
            <G fill="#F0D770" opacity={0.5}>
                <Path d="M94.544 80.536a2.544 2.544 0 0 0-.869 3.853c.314.397.738.691 1.22.844a2.61 2.61 0 0 0 1.74-.217c.539-.272.968-.72 1.215-1.272a2.64 2.64 0 0 0-.85-3.208 2.331 2.331 0 0 0-2.456 0ZM254.512 74.125a2.54 2.54 0 0 0-.052-2.851 2.527 2.527 0 0 0-2.66-1 2.624 2.624 0 0 0-1.39 1.08 2.64 2.64 0 0 0 .377 3.303c.432.423.997.683 1.597.736a2.48 2.48 0 0 0 2.128-1.268ZM224.817 96.081a2.53 2.53 0 0 0 1.08-1.017 2.548 2.548 0 0 0-.211-2.836 2.53 2.53 0 0 0-1.22-.843 2.61 2.61 0 0 0-2.985 1.47 2.636 2.636 0 0 0 .857 3.226 2.516 2.516 0 0 0 2.479 0ZM239.43 241.998a2.55 2.55 0 0 0 .029 2.874 2.515 2.515 0 0 0 2.683 1.001 2.634 2.634 0 0 0-.584-5.119 2.33 2.33 0 0 0-2.128 1.244ZM241.84 71.378a2.508 2.508 0 0 0 1.459-2.463 2.51 2.51 0 0 0-1.786-2.234 2.61 2.61 0 0 0-2.985 1.471 2.633 2.633 0 0 0 .857 3.226 2.33 2.33 0 0 0 2.455 0ZM51.563 140.18a2.546 2.546 0 0 0 .03 2.874 2.515 2.515 0 0 0 2.683 1.001 2.621 2.621 0 0 0 1.389-1.086 2.638 2.638 0 0 0-.393-3.306 2.614 2.614 0 0 0-1.605-.727 2.331 2.331 0 0 0-2.104 1.244ZM112.923 160.986a2.53 2.53 0 0 0-1.408 2.467 2.54 2.54 0 0 0 1.759 2.229c.59.14 1.21.069 1.754-.199a2.626 2.626 0 0 0 1.23-1.272 2.63 2.63 0 0 0-.856-3.225 2.516 2.516 0 0 0-2.479 0ZM56.473 122.615a2.54 2.54 0 0 0-1.216-3.792c-.479-.179-1-.207-1.496-.082a2.618 2.618 0 0 0-1.39 1.08 2.639 2.639 0 0 0 .377 3.303 2.61 2.61 0 0 0 1.597.736 2.46 2.46 0 0 0 2.128-1.245ZM312.974 146.215a2.543 2.543 0 0 0 .35 4.697 2.615 2.615 0 0 0 2.985-1.471 2.642 2.642 0 0 0 .147-1.767 2.629 2.629 0 0 0-1.004-1.459 2.472 2.472 0 0 0-2.478 0ZM123.562 86.171a2.518 2.518 0 0 0-1.212-3.789 2.493 2.493 0 0 0-1.5-.062 2.624 2.624 0 0 0-1.39 1.086 2.639 2.639 0 0 0 .393 3.306 2.613 2.613 0 0 0 1.605.727 2.332 2.332 0 0 0 2.104-1.268ZM215.531 88.379a2.542 2.542 0 0 0-.35-4.696 2.61 2.61 0 0 0-2.985 1.47 2.633 2.633 0 0 0 .857 3.226 2.467 2.467 0 0 0 2.478 0ZM86.313 71.378a2.544 2.544 0 0 0 .03 2.874 2.526 2.526 0 0 0 2.682 1 2.62 2.62 0 0 0 1.391-1.068 2.638 2.638 0 0 0-.346-3.297 2.615 2.615 0 0 0-1.583-.754 2.331 2.331 0 0 0-2.174 1.245ZM278.505 105.967a2.532 2.532 0 0 0-1.408 2.467c.038.506.225.988.539 1.386.313.397.738.691 1.22.843a2.61 2.61 0 0 0 2.954-1.488 2.635 2.635 0 0 0-.85-3.208 2.327 2.327 0 0 0-2.455 0ZM71.86 93.709a2.545 2.545 0 0 0 .053 2.852 2.526 2.526 0 0 0 2.66 1 2.621 2.621 0 0 0 1.39-1.08 2.639 2.639 0 0 0-.377-3.304 2.614 2.614 0 0 0-1.597-.736 2.332 2.332 0 0 0-2.129 1.268ZM154.967 101.129a2.54 2.54 0 0 0-1.217-3.793c-.479-.178-1-.207-1.496-.081a2.635 2.635 0 0 0-1.036 4.431c.448.424 1.03.675 1.644.711a2.33 2.33 0 0 0 2.105-1.268ZM226.006 79.127a2.544 2.544 0 0 0-.886 3.847c.311.398.734.694 1.214.85.59.139 1.21.069 1.754-.2a2.625 2.625 0 0 0 1.23-1.271 2.642 2.642 0 0 0-.856-3.226 2.331 2.331 0 0 0-2.456 0ZM301.095 204.427a2.54 2.54 0 0 0 .351 4.696 2.621 2.621 0 0 0 2.954-1.488 2.633 2.633 0 0 0-.85-3.208 2.328 2.328 0 0 0-2.455 0ZM56.66 77.225a2.544 2.544 0 0 0 1.217 3.793c.479.178 1 .207 1.496.082a2.62 2.62 0 0 0 1.39-1.08 2.639 2.639 0 0 0-.378-3.303 2.614 2.614 0 0 0-1.597-.736 2.446 2.446 0 0 0-2.128 1.244ZM101.863 175.896a2.54 2.54 0 0 0 1.217 3.793c.479.178 1 .207 1.496.081a2.621 2.621 0 0 0 1.39-1.08 2.64 2.64 0 0 0-.378-3.303 2.621 2.621 0 0 0-1.597-.736 2.451 2.451 0 0 0-2.128 1.245ZM114.956 126.091a2.51 2.51 0 0 0-1.449 2.47 2.505 2.505 0 0 0 1.8 2.226 2.609 2.609 0 0 0 1.741-.217c.538-.271.967-.72 1.214-1.271a2.633 2.633 0 0 0-.85-3.208 2.328 2.328 0 0 0-2.456 0ZM256.055 251.531a2.536 2.536 0 0 0-.029-2.873 2.523 2.523 0 0 0-2.683-1.001 2.621 2.621 0 0 0-1.39 1.08 2.64 2.64 0 0 0 .377 3.303c.432.423.997.683 1.597.736a2.47 2.47 0 0 0 2.128-1.245ZM149.286 113.622a2.532 2.532 0 0 0-1.408 2.467c.038.506.226.988.539 1.385.314.398.739.692 1.22.844a2.609 2.609 0 0 0 1.741-.217c.538-.271.967-.72 1.214-1.271a2.641 2.641 0 0 0-.851-3.208 2.471 2.471 0 0 0-2.455 0ZM31.22 183.481a2.504 2.504 0 0 0 1.114-1.001 2.522 2.522 0 0 0-.2-2.859 2.502 2.502 0 0 0-1.241-.836 2.585 2.585 0 0 0-1.809.133 2.598 2.598 0 0 0-1.28 1.29 2.616 2.616 0 0 0 .96 3.273 2.328 2.328 0 0 0 2.456 0ZM124.242 133.793a2.513 2.513 0 0 0-1.45 2.471c.038.511.231.998.553 1.396.322.398.757.687 1.247.829a2.603 2.603 0 0 0 1.741-.217c.538-.271.967-.72 1.214-1.271a2.64 2.64 0 0 0-.85-3.208 2.328 2.328 0 0 0-2.455 0ZM297.517 251.579a2.532 2.532 0 0 0 1.408-2.467 2.528 2.528 0 0 0-1.759-2.229 2.603 2.603 0 0 0-1.741.217c-.538.271-.967.72-1.214 1.271a2.64 2.64 0 0 0 .85 3.208 2.475 2.475 0 0 0 2.456 0ZM57.645 200.552a2.544 2.544 0 0 0 .031 2.922 2.519 2.519 0 0 0 2.752.953 2.622 2.622 0 0 0 1.39-1.08 2.64 2.64 0 0 0-.378-3.303 2.617 2.617 0 0 0-1.597-.737 2.457 2.457 0 0 0-2.198 1.245ZM113.767 143.021a2.505 2.505 0 0 0 1.11-1.007 2.523 2.523 0 0 0-.214-2.859 2.496 2.496 0 0 0-1.247-.83 2.609 2.609 0 0 0-1.741.217c-.538.271-.967.72-1.214 1.271a2.641 2.641 0 0 0 .85 3.208 2.328 2.328 0 0 0 2.456 0ZM290.642 160.798a2.532 2.532 0 0 0 1.408-2.468 2.536 2.536 0 0 0-1.759-2.229 2.615 2.615 0 0 0-2.955 1.489 2.638 2.638 0 0 0 .85 3.208 2.336 2.336 0 0 0 2.456 0ZM297.164 96.88a2.547 2.547 0 0 0-.03-2.875 2.518 2.518 0 0 0-2.683-1 2.633 2.633 0 0 0 .608 5.119 2.33 2.33 0 0 0 2.105-1.245Z" />
            </G>
            <Path
                fill="#F0D770"
                d="M141.03 40.499c4.116.634 5.215 5.8 6.173 9.158a22.742 22.742 0 0 0 2.339 5.917 7.442 7.442 0 0 0 2.982 2.608 7.414 7.414 0 0 0 3.893.703c4.513-.258 5.565-6.246 6.313-9.792.304-1.362.562-2.747.982-4.086.226-.744.515-1.467.866-2.16.164-.334.352-.656.561-.963.304-.38.632-.741.982-1.08l-.842-.235.374.235c.234.235.538.4.795.634.44.437.824.926 1.146 1.456a16.821 16.821 0 0 1 1.45 3.57c1.286 4.367 1.66 10.636 7.015 12.092a5.987 5.987 0 0 0 4.014-.183 6.015 6.015 0 0 0 3.001-2.681 21.953 21.953 0 0 0 1.824-5.401 30.094 30.094 0 0 1 2.081-6.293 6.798 6.798 0 0 1 1.637-2.184c.351-.282 1.497-.728 1.544-.799.046-.07.233 0-.187 0h-.632c-.514-.117-.351-.234-.257 0 .094.235.585.658.795.986a15.924 15.924 0 0 1 1.45 3.664 46.717 46.717 0 0 0 2.993 9.392 8.028 8.028 0 0 0 3.799 3.388 7.987 7.987 0 0 0 5.063.417c.912-.188.889-.822.211-1.315a4.8 4.8 0 0 0-3.274-.54h-.327.538c.14 0 .28 0 0 0-.141 0 0 0-.164-.118a4.983 4.983 0 0 1-.702-.704 10.771 10.771 0 0 1-1.613-3.24c-.982-2.748-1.497-5.684-2.338-8.454a7.057 7.057 0 0 0-1.915-3.422 7.006 7.006 0 0 0-3.44-1.862 6.99 6.99 0 0 0-4.826.778 7.033 7.033 0 0 0-3.148 3.754 37.067 37.067 0 0 0-1.941 6.176c-.337 2-1.077 3.91-2.175 5.612 0 0-1.567 1.503-1.613 1.315h.584c.678.212.795.188.374 0a4.931 4.931 0 0 0-.491-.516 10.144 10.144 0 0 1-1.707-3.452c-.701-2.208-1.075-4.509-1.777-6.693a10.848 10.848 0 0 0-4.256-6.105c-2.198-1.385-5.752-2.16-7.787 0a15.417 15.417 0 0 0-3.086 7.702 35.37 35.37 0 0 1-1.848 6.552 8.289 8.289 0 0 1-.841 1.55c-.234.328-.866.704-1.029 1.056l-.257.117c.935.235 1.192.259.818 0a2.776 2.776 0 0 1-.702-.68 7.918 7.918 0 0 1-.982-1.597 38.44 38.44 0 0 1-2.338-6.599 15.945 15.945 0 0 0-2.97-6.058 11.182 11.182 0 0 0-7.015-3.382c-.538 0-2.338-.305-2.338.564s1.683 1.221 2.151 1.292l.07-.094ZM140.498 68.96c4.349.657 5.565 5.424 6.618 9.064a25.311 25.311 0 0 0 2.338 5.94 7.027 7.027 0 0 0 2.813 2.65 6.987 6.987 0 0 0 3.781.755c4.677-.14 5.893-5.706 6.735-9.392.304-1.362.561-2.748.959-4.11a14.309 14.309 0 0 1 2.128-4.273l.42-.33h-.841l.841.611c.461.42.869.892 1.216 1.41a14.755 14.755 0 0 1 1.544 3.522c1.286 4.156 1.543 10.684 6.524 12.21a6.357 6.357 0 0 0 4.206-.027 6.391 6.391 0 0 0 3.277-2.65 19.463 19.463 0 0 0 1.894-5.354 32.243 32.243 0 0 1 2.058-6.387 8.337 8.337 0 0 1 1.566-2.23c.259-.243.55-.449.866-.611l.35-.164c.258-.118.234 0 .234 0a6.767 6.767 0 0 1-1.052-.141c.338.297.636.636.888 1.01a15.276 15.276 0 0 1 1.474 3.616 52.173 52.173 0 0 0 2.969 9.392 7.62 7.62 0 0 0 3.617 3.374c1.546.69 3.277.84 4.919.43.631-.14 1.636-.493.935-1.22a4.128 4.128 0 0 0-3.157-.588c-.818.141 0 0 .234.188-.257-.258-.678-.399-1.052-.798a10.229 10.229 0 0 1-1.754-3.311c-1.006-2.748-1.52-5.683-2.339-8.454a6.791 6.791 0 0 0-1.62-3.246 6.757 6.757 0 0 0-3.056-1.943 7.27 7.27 0 0 0-5.122.45 7.313 7.313 0 0 0-3.554 3.73 34.016 34.016 0 0 0-1.987 6.058 18.536 18.536 0 0 1-1.941 5.565 7.99 7.99 0 0 1-.538.705c-.211.258-.819.587-.935.845l-.164.118c.888.258 1.122.234.748 0l-.655-.658a10.11 10.11 0 0 1-1.52-3.053c-.795-2.348-1.169-4.696-1.917-7.044a10.541 10.541 0 0 0-3.952-5.824c-2.338-1.456-5.846-2.16-7.974-.14a14.733 14.733 0 0 0-3.18 7.63 38.287 38.287 0 0 1-1.777 6.459 7.702 7.702 0 0 1-.795 1.573c-.304.493-.795.798-1.099 1.244-.445.165-.164.165.795 0 0 0-.585-.47-.655-.563a7.44 7.44 0 0 1-1.122-1.714 36.758 36.758 0 0 1-2.339-6.434 16.711 16.711 0 0 0-2.853-6.13 10.6 10.6 0 0 0-6.571-3.38c-.701 0-2.502-.376-2.923.422-.42.798 1.029 1.198 1.52 1.291l-.023-.093Z"
            />
            <Mask
                id="b"
                width={311}
                height={313}
                x={16}
                y={15}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <Path
                    fill="#fff"
                    d="M171.453 327.144c85.611 0 155.012-69.693 155.012-155.662 0-85.97-69.401-155.663-155.012-155.663-85.61 0-155.012 69.693-155.012 155.663 0 85.969 69.402 155.662 155.012 155.662Z"
                />
            </Mask>
            <G mask="url(#b)">
                <Path
                    fill="#483F50"
                    d="M189.203 111.603a25.154 25.154 0 0 1 4.864-11.624c2.993-3.992 9.658-4.814 14.311-4.015 11.481 1.972 13.539 10.426 20.671 18.128a29.149 29.149 0 0 0 9.822 7.631c1.145.517 3.928-.422 4.536 4.251.234 1.714-3.601 1.268-4.957 1.315a19.02 19.02 0 0 0-6.408 1.573c-2.338.845-2.572 2.184-4.045 0-1.473-2.184-2.97-5.049-4.677-7.467a102.3 102.3 0 0 0-6.734-9.088c-2.666-3.029-6.22-7.35-10.546-7.702-5.636-.47-5.94 3.781-5.8 8.148.258 5.448-8.067 2.442-11.037-1.15Z"
                />
                <Path
                    fill="#F0D770"
                    d="M190.351 111.743c1.028-5.142 2.993-11.6 8.044-14.089a17.331 17.331 0 0 1 15.737.869c4.116 2.348 6.758 6.481 9.494 10.238a44.504 44.504 0 0 0 11.294 11.553 16.79 16.79 0 0 0 3.461 1.832c.585.188 1.216.188 1.824.329 1.473.399 3.227 3.898 1.076 4.297-.888.071-1.779.071-2.666 0a15.715 15.715 0 0 0-3.765.446 27.488 27.488 0 0 0-3.718 1.221 8.13 8.13 0 0 0-1.567.775l-.444.235c.678.235.842.188.491-.118l-.421-.54c-1.941-2.7-3.414-5.753-5.285-8.5-1.87-2.748-3.46-4.955-5.378-7.28-3.087-3.71-6.781-8.242-11.879-8.899a6.739 6.739 0 0 0-6.126 1.62 9.422 9.422 0 0 0-1.31 6.293c0 2.137-.795 3.569-3.133 2.982a11.54 11.54 0 0 1-5.776-3.592c-.398-.47-2.666-.447-2.058.234 2.338 2.818 7.319 5.354 11.084 4.321 1.917-.54 2.221-2.066 2.198-3.874-.023-1.808 0-4.697 1.59-6.247 2.572-2.348 6.22.141 8.255 1.926a49.46 49.46 0 0 1 6.29 7.045 94.422 94.422 0 0 1 5.846 8.406c.959 1.55 1.847 3.147 2.829 4.697.608.962 1.216 2.066 2.339 2.348a3.17 3.17 0 0 0 2.338-.141 37.39 37.39 0 0 1 4.092-1.691 13.961 13.961 0 0 1 4.28-.704c1.085.058 2.174.011 3.25-.141.701 0 1.567-.329 1.871-1.057a4.711 4.711 0 0 0-.842-3.287c-1.006-1.48-2.479-1.433-4.022-1.855a13.364 13.364 0 0 1-3.765-2.137 33.226 33.226 0 0 1-3.788-3.241 60.722 60.722 0 0 1-5.963-7.044c-2.946-4.039-5.729-8.337-10.125-10.943a22.105 22.105 0 0 0-17.725-1.949c-6.478 2.207-9.003 9.087-10.242 15.31-.117.611 2.198 1.033 2.315.352Z"
                />
                <Path
                    fill="#483F50"
                    d="M238.144 125.363a38.203 38.203 0 0 1 22.029 5.618 38.439 38.439 0 0 1 14.987 17.16c2.339 5.048 5.192 14.347 7.016 19.631 2.478 7.373 4.045 25.243 4.162 30.174.164 8.336-13.703 26.394-17.281 28.625a141.846 141.846 0 0 1-26.564 5.659c-5.495.399-18.497 1.69-24.109.962-4.887-.634-10.125-.422-14.591-2.7-8.255-4.227-17.889-11.412-20.929-20.5-3.344-10.027-1.987-20.006-2.689-30.292-.491-4.297-4.303-10.355-8.839-11.341 13.329-22.684 22.565-29.987 26.658-39.708.912-2.184.701-4.697 1.8-6.81 5.753 0 7.717 8.923 13.165 10.59.912.259 2.105.305 2.549-.54a40.695 40.695 0 0 1 6.15-1.62c2.338-.845 4.677-1.879 7.015-2.771a33.799 33.799 0 0 1 9.471-2.137Z"
                />
                <Path
                    fill="#F0D770"
                    d="M238.148 125.833a35.766 35.766 0 0 1 14.646 2.234 35.913 35.913 0 0 1 12.502 7.98 39.93 39.93 0 0 1 8.629 12.07 128.362 128.362 0 0 1 5.168 14.089 96.362 96.362 0 0 1 3.274 11.412c.818 4.321 1.379 8.689 1.847 13.08.374 3.475.701 7.045.842 10.473a19.178 19.178 0 0 1-2.339 8.9 70.464 70.464 0 0 1-12.814 18.644 8.895 8.895 0 0 1-4.817 2.677c-3.765 1.033-7.6 1.902-11.412 2.677a172.416 172.416 0 0 1-23.781 2.748 77.889 77.889 0 0 1-12.604-.118 75.177 75.177 0 0 1-8.886-1.056 25.903 25.903 0 0 1-7.483-3.358 48.189 48.189 0 0 1-12.206-9.98 30.035 30.035 0 0 1-6.501-15.217 150.577 150.577 0 0 1-.842-18.644 23.888 23.888 0 0 0-.912-7.843 15.925 15.925 0 0 0-3.507-5.566 10.612 10.612 0 0 0-5.051-2.982l.561.517a238.672 238.672 0 0 1 14.943-22.285 139.504 139.504 0 0 0 9.821-13.619 32.74 32.74 0 0 0 1.707-3.382c1.029-2.348.888-4.978 1.987-7.255l-1.426.375c3.461.165 5.612 4.204 7.576 6.575 1.965 2.372 4.677 4.697 7.951 4.11a5.027 5.027 0 0 0 1.567-.94 7.929 7.929 0 0 1 1.613-.469c1.31-.306 2.666-.493 3.952-.869 2.338-.705 4.677-1.808 6.851-2.701a33.646 33.646 0 0 1 9.073-2.16c.258 0 1.193 0 1.146-.517-.047-.516-.912-.446-1.169-.422a51.277 51.277 0 0 0-14.732 4.109 26.59 26.59 0 0 1-4.677 1.456 15.284 15.284 0 0 0-3.835 1.08c-.14 0-.233.212-.35.282-.655.305-.912.188-1.567-.164a8.468 8.468 0 0 1-2.034-1.503 40.113 40.113 0 0 1-3.251-3.922 10.283 10.283 0 0 0-3.195-3.35 10.232 10.232 0 0 0-4.334-1.604c-.351 0-1.216 0-1.427.375-1.005 2.09-.912 4.462-1.707 6.599a23.51 23.51 0 0 1-1.52 3.193 61.219 61.219 0 0 1-4.045 6.27c-3.999 5.471-8.255 10.755-12.113 16.32a316.526 316.526 0 0 0-9.05 14.089c-.187.305.374.47.562.517 4.676 1.15 7.833 7.044 8.137 11.482.398 6.505 0 13.056.608 19.537a33.564 33.564 0 0 0 5.215 16.438 43.181 43.181 0 0 0 11.318 10.849 60.307 60.307 0 0 0 6.734 3.945 24.637 24.637 0 0 0 7.857 2.066c4.65.626 9.339.924 14.03.892 8.43-.113 16.84-.851 25.162-2.207a201.012 201.012 0 0 0 12.837-2.7 24.134 24.134 0 0 0 7.249-2.349 25.43 25.43 0 0 0 5.636-5.753 86.484 86.484 0 0 0 7.015-10.332 37.005 37.005 0 0 0 4.466-10.191 30.651 30.651 0 0 0 0-8.9 109.156 109.156 0 0 0-4.209-25.196c-3.11-9.393-5.705-19.584-12.206-27.403a39.429 39.429 0 0 0-25.044-13.902 37.493 37.493 0 0 0-7.436-.188c-1.474.165-1.474 1.104 0 .987Z"
                />
                <Mask
                    id="c"
                    width={116}
                    height={113}
                    x={171}
                    y={121}
                    maskUnits="userSpaceOnUse"
                    style={{
                        maskType: "luminance",
                    }}
                >
                    <Path
                        fill="#fff"
                        d="M238.144 125.363a38.203 38.203 0 0 1 22.029 5.618 38.439 38.439 0 0 1 14.987 17.16c2.339 5.048 5.192 14.347 7.016 19.631 2.478 7.373 4.045 25.243 4.162 30.174.164 8.336-13.703 26.394-17.281 28.625a141.846 141.846 0 0 1-26.564 5.659c-5.495.399-18.497 1.69-24.109.962-4.887-.634-10.125-.422-14.591-2.7-8.255-4.227-17.889-11.412-20.929-20.5-3.344-10.027-1.987-20.006-2.689-30.292-.491-4.297-4.303-10.355-8.839-11.341 13.329-22.684 22.565-29.987 26.658-39.708.912-2.184.701-4.697 1.8-6.81 5.753 0 7.717 8.923 13.165 10.59.912.259 2.105.305 2.549-.54a40.695 40.695 0 0 1 6.15-1.62c2.338-.845 4.677-1.879 7.015-2.771a33.799 33.799 0 0 1 9.471-2.137Z"
                    />
                </Mask>
                <G fill="#F0D770" mask="url(#c)">
                    <Path d="M162.919 189.916a29.217 29.217 0 0 0 9.342 7.816 29.097 29.097 0 0 0 11.704 3.314 37.906 37.906 0 0 0 23.103-7.045 67.712 67.712 0 0 0 18.707-20.899 76.215 76.215 0 0 0 10.803-25.83 32.56 32.56 0 0 0-.537-15.803c-1.38-4.25-4.467-9.393-9.05-10.614-.444 0-1.239-.258-1.637 0-.397.258-.514.517 0 .658 4.022 1.103 6.875 5.823 8.185 9.557a29.276 29.276 0 0 1 1.145 12.797 65.405 65.405 0 0 1-8.488 24.492c-7.857 14.301-20.134 29.846-37.555 31.56a26.677 26.677 0 0 1-13.015-2.237 26.795 26.795 0 0 1-10.368-8.213c-.421-.54-2.619 0-2.339.353v.094Z" />
                    <Path d="M167.806 183.411a24.598 24.598 0 0 0 9.182 7.407 24.472 24.472 0 0 0 11.56 2.267 34.053 34.053 0 0 0 21.536-10.026 75.58 75.58 0 0 0 15.784-23.482 49.27 49.27 0 0 0 4.677-19.561c0-6.598-1.59-14.418-8.839-16.273-.702-.188-2.619.446-1.169.822 5.893 1.526 7.436 8.359 7.646 13.666a44.362 44.362 0 0 1-3.063 17.424 82.809 82.809 0 0 1-12.697 22.331 37.576 37.576 0 0 1-19.432 13.479 21.867 21.867 0 0 1-12.686-.686 21.96 21.96 0 0 1-10.184-7.627c-.444-.563-2.619-.211-2.338.259h.023Z" />
                    <Path d="M175.922 177.47c-.421 0 .14 0 .257.164l.701.4 1.286.774a9.543 9.543 0 0 0 3.017 1.292c2.603.521 5.29.441 7.857-.235a28.22 28.22 0 0 0 13.867-9.04 63.218 63.218 0 0 0 10.967-16.18c2.338-5.001 4.934-9.745 5.074-15.404a22.788 22.788 0 0 0-5.542-16.061c-.491-.541-2.642 0-2.338.328a21.772 21.772 0 0 1 5.401 13.362 24.266 24.266 0 0 1-.467 6.88 36.132 36.132 0 0 1-2.9 7.35 72.595 72.595 0 0 1-8.792 15.169 37.634 37.634 0 0 1-12.815 11.483 14.425 14.425 0 0 1-9.166 1.432c-2.105-.516-3.625-2.348-5.823-2.724-1.005 0-2.174.752-.584.94v.07ZM281.732 157.651c.397 3.945.935 7.89.982 11.741a56.549 56.549 0 0 1-1.263 11.201 68.064 68.064 0 0 1-7.74 20.641 97.3 97.3 0 0 1-23.01 28.178 79.039 79.039 0 0 1-16.532 10.027c-1.099.493 1.076.963 1.637.728a79.781 79.781 0 0 0 27.593-20.57 108.841 108.841 0 0 0 11.084-15.616 72.087 72.087 0 0 0 8.488-19.748 62.742 62.742 0 0 0 2.035-12.492 98.525 98.525 0 0 0-.936-14.09c0-.704-2.338-.681-2.338 0Z" />
                    <Path d="M279.418 155.209c.537 4.074.865 8.173.982 12.281a57.682 57.682 0 0 1-1.379 11.13 67.615 67.615 0 0 1-7.67 20.265 97.486 97.486 0 0 1-23.057 28.179 78.875 78.875 0 0 1-16.556 10.027c-.818.375 1.216 1.315 1.778 1.056a78.918 78.918 0 0 0 27.71-20.758 112.07 112.07 0 0 0 10.896-15.381 71.896 71.896 0 0 0 8.559-20.147 60.002 60.002 0 0 0 1.917-12.539 99.502 99.502 0 0 0-.958-13.69c0-.635-2.339-1.151-2.222-.423Z" />
                </G>
                <Path
                    fill="#483F50"
                    d="M195.517 143.092c-2.689 3.781-6.009 7.045-8.605 10.778a111.59 111.59 0 0 1-10.032 11.741c-4.443 4.861-12.65 12.939-19.408 7.186-2.689-2.348-1.988-7.327-1.731-10.45 1.17-14.089 4.677-30.902 14.428-41.892a41.08 41.08 0 0 1 19.923-11.999 9.319 9.319 0 0 1 7.015.822c11.879 7.42 4.397 25.431-1.59 33.814Z"
                />
                <Path
                    fill="#F0D770"
                    d="M194.443 142.763c-2.035 2.794-4.397 5.33-6.548 8.031-2.151 2.7-4.069 5.588-6.337 8.171a81.785 81.785 0 0 1-12.066 12.258 12.855 12.855 0 0 1-7.272 3.076 5.646 5.646 0 0 1-3.533-1.384 5.684 5.684 0 0 1-1.869-3.312 27.657 27.657 0 0 1 0-7.35c.257-2.935.608-5.847 1.052-8.759 1.801-11.436 5.285-23.482 13.002-32.264a39.735 39.735 0 0 1 15.363-10.731c3.18-1.268 7.015-2.724 10.195-.728a11.836 11.836 0 0 1 4.373 4.978 20.862 20.862 0 0 1 0 14.582 45.659 45.659 0 0 1-6.548 13.502c-.397.587 1.778 1.198 2.175.658a46.815 46.815 0 0 0 6.641-13.103 23.002 23.002 0 0 0 .561-14.348 12.372 12.372 0 0 0-4.503-6.079 12.296 12.296 0 0 0-7.189-2.304 25.84 25.84 0 0 0-9.54 2.795 44.125 44.125 0 0 0-8.699 5.33c-10.382 8.195-15.059 21.439-17.398 34.072-.608 3.241-1.052 6.481-1.403 9.745a49.555 49.555 0 0 0-.467 8.102 7.252 7.252 0 0 0 .957 3.633 7.223 7.223 0 0 0 2.644 2.66 10.203 10.203 0 0 0 7.132 1.127c6.29-1.245 10.897-7.045 15.012-11.483a94.278 94.278 0 0 0 8.185-9.862c2.572-3.616 5.729-6.763 8.324-10.356.351-.563-1.847-1.197-2.244-.657Z"
                />
                <Path
                    fill="#483F50"
                    d="M188.527 118.154c-11.365-1.738-21.046 17.33-25.512 28.437-1.193 3.052-3.624 13.361-1.286 16.273 3.554 4.367 16.883-14.559 18.707-17.119a107.293 107.293 0 0 0 10.336-17.963 8.99 8.99 0 0 0 .322-5.154 8.956 8.956 0 0 0-2.567-4.474Z"
                />
                <Path
                    fill="#F0D770"
                    d="M188.338 117.661c-8.653-1.198-14.943 7.045-18.988 13.549a60.694 60.694 0 0 0-9.517 23.834c-.328 2.607-.959 7.374 2.104 8.665a6.289 6.289 0 0 0 6.361-1.949 73.348 73.348 0 0 0 12.603-14.911 144.356 144.356 0 0 0 8.138-13.032 21.023 21.023 0 0 0 3.297-8.407 8.991 8.991 0 0 0-2.782-7.232 2.331 2.331 0 0 0-1.497-.541c-.234 0-.982.141-.561.517a8.373 8.373 0 0 1 2.572 6.692 16.793 16.793 0 0 1-2.338 6.599 130.693 130.693 0 0 1-7.928 13.103 107.673 107.673 0 0 1-10.055 12.962 19.24 19.24 0 0 1-6.43 5.26c-.234 0-.632.141-.795.211.421-.164.304.352.234 0-.071-.352-.421-.657-.515-.939a11.786 11.786 0 0 1-.351-5.19 54.266 54.266 0 0 1 7.507-21.368 52.062 52.062 0 0 1 8.465-11.741c2.829-2.842 6.641-5.565 10.85-5.002 1.59.164.608-.963-.374-1.08Z"
                />
                <Path
                    fill="#F0D770"
                    d="M336.567 340.67c-4.092-9.604-15.457-14.089-20.905-22.848-4.256-6.904-4.35-15.545-7.39-23.06-6.454-16.014-24.646-23.81-41.623-26.605-15.036-2.489-33.579-4.532-39.355-18.785-6.665-16.438-1.707-24.962-15.153-38.558-7.553-7.655-19.385-13.619-24.015-23.67-3.858-8.359-7.436-19.56-7.015-28.742 0-8.406 2.806-15.779 6.15-23.341 3.344-7.561 2.946-10.801-6.595-11.248-4.676-.211-7.412 1.903-11.388 3.852a54.46 54.46 0 0 1-13.445 3.569c-8.863 1.996-14.545 10.778-17.585 19.372-3.04 8.595-4.49 17.941-9.517 25.549-8.535 12.915-23.524 15.357-36.292 22.237-13.75 7.538-27.336 15.968-35.894 29.47-7.81 12.422-6.571 38.91-17.164 46.542C22.357 286.638.564 290.841-13.56 307.278c-11.248 13.056-6.033 22.59-10.313 36.703-3.905 12.868-25.301 19.678-34.959 29.141-12.767 12.633-24.553 29.024-12.79 45.79 7.81 11.154 21.466 7.937 34.538 8.946 50.018 3.875 101.766 6.223 151.714 0 21.326-2.653 43.027-5.541 64.516-5.753 3.438 0 7.437.376 11.529.681v2.067a360.19 360.19 0 0 0 51.094-1.433c18.239 4.157 37.765-1.268 53.198-11.741 15.433-10.473 27.149-25.83 36.245-42.267 5.144-8.923 9.283-19.49 5.355-28.742Z"
                />
                <Path
                    fill="#F0D770"
                    d="M337.691 340.458c-3.134-7.044-9.751-11.201-15.2-16.202a29.164 29.164 0 0 1-7.015-9.017 70.428 70.428 0 0 1-3.905-13.455 37.304 37.304 0 0 0-10.944-19.631 54.907 54.907 0 0 0-18.894-10.779 127.43 127.43 0 0 0-21.536-4.813 69.457 69.457 0 0 1-21.046-5.988 24.874 24.874 0 0 1-7.997-6.458 30.6 30.6 0 0 1-4.677-10.402c-1.824-6.2-2.175-12.775-4.186-18.927a39.72 39.72 0 0 0-12.884-17.635c-5.94-5.025-12.768-9.393-17.468-15.686a42.823 42.823 0 0 1-5.542-11.365 73.298 73.298 0 0 1-3.554-13.15 50.3 50.3 0 0 1 3.554-27.098 51.826 51.826 0 0 0 3.812-10.004 4.288 4.288 0 0 0-1.731-4.696 15.937 15.937 0 0 0-8.278-1.667 21.826 21.826 0 0 0-10.289 3.311c-7.506 3.945-16.626 2.911-23.243 8.688-6.08 5.307-9.05 13.056-11.295 20.617-2.548 8.618-4.676 17.659-11.13 24.375-5.379 5.706-12.581 8.946-19.666 11.928-15.083 6.34-30.4 14.254-41.88 26.253a44.907 44.907 0 0 0-11.085 18.128c-1.94 6.458-3.016 13.127-4.56 19.678-1.332 5.683-2.946 12.422-7.249 16.649a43.791 43.791 0 0 1-9.657 6.411c-3.414 1.902-7.015 3.663-10.5 5.353-14.03 6.787-30.399 13.878-38.49 28.179-3.53 6.363-3.67 13.314-4.279 20.382a43.86 43.86 0 0 1-2.128 11.248 21.138 21.138 0 0 1-5.378 7.726 97.71 97.71 0 0 1-17.304 11.976c-2.83 1.761-5.682 3.522-8.325 5.541a60.92 60.92 0 0 0-7.833 7.515c-5.636 6.175-10.944 13.314-12.815 21.626a24.826 24.826 0 0 0 .445 12.321 24.739 24.739 0 0 0 6.313 10.574c5.145 4.861 12.324 5.777 19.082 5.965 3.788 0 7.6 0 11.388.164 5.004.212 9.984.728 14.965 1.08 20.555 1.456 41.132 2.56 61.757 2.842a600.861 600.861 0 0 0 61.663-2.067c20.789-1.831 41.39-5.236 62.225-6.692 5.215-.352 10.429-.611 15.644-.705 4.677 0 9.353.306 14.03.658l-.888-.399v2.043c0 .328.701.399.888.399 13.632.567 27.285.395 40.899-.517a88.29 88.29 0 0 1 10.195-.822c3.017.188 6.033 1.01 9.096 1.198a66.057 66.057 0 0 0 17.842-1.432c24.67-5.354 43.892-23.036 57.431-43.7a110.537 110.537 0 0 0 10.406-18.786c2.666-6.598 4.069-13.901 1.333-20.711-.281-.705-2.526-.282-2.339.164 4.817 11.953-2.689 24.68-8.769 34.66a126.286 126.286 0 0 1-22.752 28.178 80.755 80.755 0 0 1-31.615 18.128 62.504 62.504 0 0 1-18.707 2.56 56.226 56.226 0 0 1-9.517-1.01 30.263 30.263 0 0 0-8.372.211 368.176 368.176 0 0 1-44.663.846l.888.375v-2.043c0-.352-.701-.375-.888-.399-4.677-.352-9.517-.728-14.311-.634a338.3 338.3 0 0 0-15.083.658c-10.125.681-20.227 1.784-30.399 2.982-20.227 2.348-40.36 4.696-60.798 5.471-20.437.775-40.828.399-61.219-.516a1307.375 1307.375 0 0 1-30.399-1.762c-8.862-.61-17.655-1.361-26.54-1.432-7.624 0-15.878-.446-21.35-6.504a24.627 24.627 0 0 1-5.736-11.471 24.684 24.684 0 0 1 .802-12.81c2.76-8.453 8.792-15.592 14.919-21.815a81.882 81.882 0 0 1 16.368-11.741 68.203 68.203 0 0 0 15.387-11.435c4.677-5.166 5.823-11.741 6.384-18.528.584-7.044.865-14.089 4.677-20.405a52.808 52.808 0 0 1 18.613-17.048c6.782-4.133 14.03-7.35 21.21-10.849 3.507-1.738 7.015-3.522 10.405-5.518a38.319 38.319 0 0 0 8.114-5.636c3.882-4.015 5.519-9.862 6.852-15.122 1.684-6.716 2.736-13.573 4.677-20.218a44.14 44.14 0 0 1 10.476-18.152 91.392 91.392 0 0 1 20.507-16.085 165.053 165.053 0 0 1 21.046-10.52c6.758-2.841 13.656-5.847 19.105-10.919 6.36-5.918 9.353-13.855 11.691-22.003 2.339-8.148 4.467-15.803 9.868-22.073a19.534 19.534 0 0 1 10.897-6.575 58.045 58.045 0 0 0 12.207-3.053c1.777-.798 3.461-1.855 5.261-2.677a13.617 13.617 0 0 1 7.717-1.127c2.338.259 5.214.846 5.565 3.546.351 2.701-1.379 5.871-2.338 8.36a76.711 76.711 0 0 0-4.42 12.539 50.496 50.496 0 0 0 1.31 26.3c2.338 7.585 5.121 14.981 10.78 20.641 5.659 5.659 12.159 9.392 17.631 14.981a36.372 36.372 0 0 1 10.266 18.34 120.944 120.944 0 0 0 4.676 19.701c5.215 13.126 20.228 16.437 32.738 18.433 14.849 2.536 30.399 5.448 41.483 16.79a33.157 33.157 0 0 1 6.197 8.712 56.122 56.122 0 0 1 3.811 12.422 44.87 44.87 0 0 0 3.999 11.858 33.35 33.35 0 0 0 7.296 8.501c5.214 4.696 11.224 8.665 14.03 15.239.257.447 2.549.141 2.245-.54Z"
                />
                <Path
                    fill="#483F50"
                    d="M175.172 128.627a23.189 23.189 0 0 0-9.907 4.22 23.312 23.312 0 0 0-6.952 8.249c-3.929 8.171-4.467 17.987-4.864 26.887-.398 8.899 0 17.846-4.677 25.642-6.01 9.792-16.369 15.944-26.073 21.392-9.704 5.448-19.619 10.755-26.962 19.208a30.431 30.431 0 0 0-7.015 12.962 25.436 25.436 0 0 0 1.1 14.277 78.459 78.459 0 0 1 4.676 14.841 14.785 14.785 0 0 1-.54 6.312 14.743 14.743 0 0 1-3.131 5.5c-5.846 7.044-14.568 11.294-22.238 15.803a101.79 101.79 0 0 0-10.874 7.044 83.127 83.127 0 0 0-10.102 9.581c-6.851 7.397-13.726 16.954-13.258 27.568a23.051 23.051 0 0 0 1.613 7.397c.234.61 2.526.516 2.338-.165-4.068-10.449.772-20.992 7.203-29.282a78.75 78.75 0 0 1 20.718-18.785c7.763-4.697 16.135-8.876 23.08-14.864a22.526 22.526 0 0 0 7.015-8.83c1.637-4.461.444-9.392-1.006-13.69a84.256 84.256 0 0 1-4.49-14.089 24.366 24.366 0 0 1 2.924-15.028c5.12-9.393 14.708-15.874 23.758-21.134 9.774-5.636 20.063-10.614 28.06-18.786a33.776 33.776 0 0 0 7.904-11.741 38.378 38.378 0 0 0 2.081-11.741c.491-9.58.421-19.255 2.643-28.648 1.73-7.35 5.331-14.089 12.417-17.329a29.639 29.639 0 0 1 5.822-1.926c1.473-.329-.444-1.01-1.146-.845h-.117Z"
                />
                <Path
                    fill="#483F50"
                    d="M168.953 148.634a57.128 57.128 0 0 0 3.18 48.561 54.589 54.589 0 0 0 16.556 18.128c6.711 4.696 15.737 7.538 19.642 15.287a37.48 37.48 0 0 1 3.087 15.193c.234 5.048 0 10.12 0 15.192a49.505 49.505 0 0 0 3.648 20.078 21.121 21.121 0 0 0 5.738 7.28 21.008 21.008 0 0 0 8.292 4.108c7.881 2.067 16.135.306 24.086 1.832 8.652 1.691 14.615 8.665 19.619 15.451a100.48 100.48 0 0 1 13.843 25.431 53.853 53.853 0 0 1 1.777 5.941c.164.658 2.339 1.08 2.339.423a85.84 85.84 0 0 0-11.201-24.891c-4.677-7.327-10.102-15.287-17.585-19.913-6.547-4.062-14.03-4.227-21.537-4.274-7.506-.047-15.433-.54-20.577-7.044-4.163-5.166-5.402-12.14-5.916-18.598-.725-9.393.514-18.786-1.1-28.178a23.248 23.248 0 0 0-5.565-12.352 40.056 40.056 0 0 0-9.517-6.88 79.125 79.125 0 0 1-10.78-7.045 54.432 54.432 0 0 1-8.886-9.252 56.283 56.283 0 0 1-9.989-23.034 56.386 56.386 0 0 1 1.01-25.104 60.197 60.197 0 0 1 2.011-6.011c.233-.587-1.988-1.339-2.339-.681l.164.352ZM156.465 202.784c-4.677 12.468-18.707 19.983-19.853 34.048-1.029 12.845 8.98 23.13 12.3 34.918a28.292 28.292 0 0 1-1.239 18.786 56.213 56.213 0 0 1-11.225 15.85c-4.419 4.697-9.213 9.182-13.445 14.089a52.371 52.371 0 0 0-10.967 19.303 54.228 54.228 0 0 0-1.567 19.865c.514 5.8 2.034 12.469 7.015 15.968a2.33 2.33 0 0 0 1.614.399c.35-.141.608-.328.14-.657-4.677-3.17-6.01-9.393-6.571-14.676a56.933 56.933 0 0 1 .818-17.588 48.854 48.854 0 0 1 10.079-19.749c4.069-5.119 8.886-9.581 13.399-14.3 8.629-8.994 17.093-19.796 15.176-33.087-1.824-12.375-11.692-21.979-13.072-34.448-1.894-16.179 14.522-24.538 19.573-38.158.21-.563-2.011-1.221-2.339-.563h.164ZM170.753 233.193c6.711 9.674 14.544 19.584 16.368 31.559a44.292 44.292 0 0 1-1.169 18.035c-1.169 4.438-2.642 8.805-3.835 13.243-2.174 8.078-5.144 20.077 1.824 26.723 4.42 4.203 10.874 4.955 16.112 7.679 6.08 3.146 10.71 9.557 13.539 15.662a71.961 71.961 0 0 1 5.425 22.003 166.757 166.757 0 0 1 .865 23.669c0 .752 2.339 1.198 2.339.658.374-13.643-.187-27.803-4.35-40.882a41.685 41.685 0 0 0-10.359-17.072 26.329 26.329 0 0 0-7.506-5.213c-2.946-1.362-6.08-2.348-9.026-3.498a12.534 12.534 0 0 1-6.017-4.164 12.619 12.619 0 0 1-2.682-6.826 41.154 41.154 0 0 1 1.426-15.169c2.339-10.239 6.782-19.984 6.15-30.738-.818-13.667-9.564-24.774-17.047-35.552-.35-.517-2.572-.845-2.057 0v-.117Z"
                />
            </G>
            <Path
                fill="#F0D770"
                d="M340.591 171.411a172.729 172.729 0 0 1-8.16 52.436 169.56 169.56 0 0 1-39.599 66.739 168.625 168.625 0 0 1-65.102 41.97 168.018 168.018 0 0 1-76.912 8.374 168.242 168.242 0 0 1-72.547-26.983c-28.465-18.989-50.585-46.136-63.487-77.913A170.719 170.719 0 0 1 2.81 184.796a173.147 173.147 0 0 1 4.233-53.421 170.192 170.192 0 0 1 19.525-47.763c17.615-29.395 43.609-52.806 74.618-67.205a167.365 167.365 0 0 1 77.098-15.379 167.437 167.437 0 0 1 75.622 21.53 170.096 170.096 0 0 1 56.499 51.574 170.958 170.958 0 0 1 28.291 71.214 176.566 176.566 0 0 1 1.965 26.065c0 .681 2.338.799 2.338.165a173.612 173.612 0 0 0-8.325-53.023 170.72 170.72 0 0 0-23.384-46.517 171.527 171.527 0 0 0-58.227-51.488A170.761 170.761 0 0 0 178.19.134a173.144 173.144 0 0 0-53.198 6.199C86.817 16.987 53.522 40.645 30.815 73.25 8.107 105.857-2.598 145.379.535 185.043c3.132 39.663 19.906 76.997 47.448 105.601 27.54 28.605 64.133 46.697 103.503 51.176a172.644 172.644 0 0 0 54.063-2.184c34.273-6.843 65.629-24.083 89.833-49.392 24.205-25.31 40.091-57.468 45.513-92.134a176.817 176.817 0 0 0 2.035-26.534c0-.705-2.339-.869-2.339-.165Z"
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
