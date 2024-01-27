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
                d="M340.661 171.412a171.28 171.28 0 0 1-30.368 97.42c-19.776 28.606-47.789 50.461-80.284 62.634a167.461 167.461 0 0 1-77.957 9.54 167.681 167.681 0 0 1-73.766-27.057c-28.489-19.021-50.615-46.211-63.5-78.031a171.63 171.63 0 0 1-.572-127.121c16.087-40.874 47.232-73.959 86.97-92.39a167.404 167.404 0 0 1 77.113-15.381 167.475 167.475 0 0 1 75.639 21.533c29.831 16.85 53.915 42.332 69.113 73.124a169.888 169.888 0 0 1 15.624 49.664 173.488 173.488 0 0 1 1.988 26.065c0 .681 2.339.799 2.339.165a172.897 172.897 0 0 0-8.326-53.023 170.69 170.69 0 0 0-23.389-46.518 171.635 171.635 0 0 0-58.212-51.465A170.892 170.892 0 0 0 178.226.134a173.144 173.144 0 0 0-53.209 6.2 170.176 170.176 0 0 0-47.269 21.392 172.903 172.903 0 0 0-38.38 34.213A171.684 171.684 0 0 0 4.58 131.994a172.089 172.089 0 0 0-.139 78.28 171.691 171.691 0 0 0 34.54 70.179 170.816 170.816 0 0 0 62.016 47.444 172.814 172.814 0 0 0 104.571 11.741c34.28-6.843 65.642-24.083 89.851-49.393 24.209-25.309 40.099-57.468 45.523-92.133a173.974 173.974 0 0 0 2.035-26.535c0-.705-2.316-.869-2.316-.165Z"
            />
            <Path
                fill="#483F50"
                d="M171.466 327.146c85.628 0 155.044-69.693 155.044-155.663 0-85.97-69.416-155.663-155.044-155.663-85.629 0-155.044 69.693-155.044 155.663 0 85.97 69.415 155.663 155.044 155.663Z"
            />
            <G fill="#F0D770" opacity={0.7}>
                <Path d="M266.215 88.849a31.243 31.243 0 0 0-5.567.47c.842-1.503 2.83-4.157 2.83-4.157a18.459 18.459 0 0 1-1.309-4.696c1.425.316 2.831.716 4.21 1.198a32.971 32.971 0 0 1 3.625-2.795 31.022 31.022 0 0 1-.351 4.697c1.544.68 3.579 1.62 5.099 2.348-1.146.329-4.912 1.291-4.912 1.291a26.107 26.107 0 0 1-.889 4.509l-2.736-2.865ZM86.94 280.323a29.828 29.828 0 0 1 2.83 4.837c.726-1.573 1.731-4.697 1.731-4.697a17.455 17.455 0 0 0 4.491-1.596 33.386 33.386 0 0 0-3.415-2.748c.179-1.558.234-3.129.164-4.696a31.692 31.692 0 0 0-3.602 3.006c-1.45-.869-3.391-1.996-4.958-2.724.397 1.127 1.824 4.696 1.824 4.696a27.795 27.795 0 0 0-3.18 3.335l4.116.587ZM113.346 67.786a28.707 28.707 0 0 1 4.677 2.888c0-1.738-.701-5.002-.701-5.002a18.54 18.54 0 0 0 3.204-3.545c-1.419-.341-2.855-.6-4.304-.775a27.916 27.916 0 0 0-2.034-4.11 34.288 34.288 0 0 0-1.754 4.344c-1.684 0-3.93-.117-5.661 0 .889.822 3.86 3.335 3.86 3.335a27.263 27.263 0 0 0-1.217 4.438l3.93-1.573ZM141.365 68.655a29.088 29.088 0 0 1 1.965-5.26c-1.684.423-4.678 1.644-4.678 1.644a18.144 18.144 0 0 0-4.046-2.536 33.865 33.865 0 0 0 0 4.391c-1.295.85-2.523 1.8-3.672 2.841 1.537.411 3.099.717 4.677.916.258 1.69.608 3.898 1.006 5.589.632-1.01 2.549-4.391 2.549-4.391 1.457.198 2.928.277 4.398.235l-2.199-3.429ZM219.812 53.72a31.836 31.836 0 0 0 1.474-5.4c1.122 1.314 2.923 4.109 2.923 4.109 1.567-.102 3.141.009 4.678.328a35.447 35.447 0 0 1-2.573 3.546 30.876 30.876 0 0 1 1.357 4.391 33.206 33.206 0 0 1-4.257-1.925c-1.169 1.22-2.76 2.818-4.046 3.945 0-1.198.491-5.072.491-5.072a25.542 25.542 0 0 1-3.929-2.349l3.882-1.573ZM170.694 124.871a30.582 30.582 0 0 0 0 5.612c-1.45-.939-3.976-3.099-3.976-3.099a18.274 18.274 0 0 1-4.677 1.056c.396-1.407.88-2.787 1.45-4.133a33.062 33.062 0 0 1-2.573-3.827c1.572.101 3.135.313 4.678.634.772-1.503 1.824-3.499 2.76-4.955.257 1.174.982 5.002.982 5.002 1.508.259 2.994.636 4.444 1.127l-3.088 2.583ZM248.18 101.295a29.783 29.783 0 0 1-3.602 4.298c1.731.164 5.029 0 5.029 0a18.41 18.41 0 0 0 2.947 3.804 38.255 38.255 0 0 0 1.45-4.133 31.359 31.359 0 0 0 4.373-1.362 33.95 33.95 0 0 0-4.022-2.348c.327-1.644.748-3.875.935-5.59-.935.752-3.882 3.288-3.882 3.288a26.817 26.817 0 0 0-4.187-1.902l.959 3.945ZM98.33 100.098a29.422 29.422 0 0 1-1.076 5.518c1.59-.705 4.444-2.348 4.444-2.348a17.787 17.787 0 0 0 4.42 1.808 39.022 39.022 0 0 0-.748-4.321c0-.282 2.479-2.09 3.157-3.334a34.745 34.745 0 0 0-4.677-.165c-.515-1.62-1.216-3.733-1.895-5.33-.444 1.103-1.801 4.696-1.801 4.696-1.567-.025-3.134.101-4.677.376l2.853 3.1ZM58.897 94.744c1.68.819 3.284 1.785 4.794 2.888-.117-1.738-.748-5.002-.748-5.002a18.948 18.948 0 0 0 3.204-3.569 37.453 37.453 0 0 0-4.327-.751 29.931 29.931 0 0 0-2.058-4.11 31.23 31.23 0 0 0-1.707 4.32h-5.66c.888.8 3.859 3.312 3.859 3.312a27.413 27.413 0 0 0-1.193 4.438l3.836-1.526ZM110.913 290.796a31.527 31.527 0 0 1-1.965 5.236c1.684-.423 4.678-1.62 4.678-1.62a18.47 18.47 0 0 0 4.07 2.536 38.287 38.287 0 0 0 0-4.391 33.408 33.408 0 0 0 3.672-2.771 31.735 31.735 0 0 0-4.678-.939c-.257-1.668-.608-3.898-1.006-5.589-.631 1.033-2.549 4.414-2.549 4.414a26.864 26.864 0 0 0-4.678-.375l2.456 3.499ZM230.571 263.815a31.506 31.506 0 0 0-1.403 5.518c-1.123-1.338-2.924-4.109-2.924-4.109a17.79 17.79 0 0 1-4.678-.353 38.422 38.422 0 0 1 2.573-3.545 30.27 30.27 0 0 1-1.38-4.392 37.066 37.066 0 0 1 4.28 1.926c1.17-1.198 2.737-2.794 4.047-3.922 0 1.175-.492 5.073-.492 5.073a23.738 23.738 0 0 1 3.93 2.348l-3.953 1.456ZM211.764 307.327a29.72 29.72 0 0 1 3.602-4.297c-1.731-.165-5.029 0-5.029 0a18.342 18.342 0 0 0-2.994-3.734 38.104 38.104 0 0 0-1.45 4.133 30.246 30.246 0 0 0-4.35 1.362 32.167 32.167 0 0 0 3.999 2.348c-.327 1.667-.748 3.874-.935 5.589.935-.752 3.882-3.288 3.882-3.288a26.835 26.835 0 0 0 4.187 1.902l-.912-4.015ZM265.677 270.765a29.633 29.633 0 0 1-4.678-2.865c0 1.738.748 4.979.748 4.979a18.946 18.946 0 0 0-3.204 3.569c1.424.35 2.87.609 4.327.775a31.462 31.462 0 0 0 2.058 4.109 36.097 36.097 0 0 0 1.731-4.368h5.637c-.866-.798-3.86-3.311-3.86-3.311.521-1.443.92-2.927 1.193-4.438l-3.952 1.55Z" />
            </G>
            <G fill="#F0D770" opacity={0.5}>
                <Path d="M94.565 80.536a2.544 2.544 0 0 0-.887 3.847c.312.398.734.694 1.215.85.59.14 1.21.069 1.754-.2.545-.267.98-.717 1.23-1.271a2.64 2.64 0 0 0-.856-3.226 2.332 2.332 0 0 0-2.456 0ZM254.591 74.125a2.525 2.525 0 0 0-.018-2.876 2.505 2.505 0 0 0-2.696-.975 2.633 2.633 0 0 0 .609 5.12 2.332 2.332 0 0 0 2.105-1.269ZM221.587 98.054a2.532 2.532 0 0 0 1.408-2.468 2.54 2.54 0 0 0-1.759-2.229 2.611 2.611 0 0 0-2.985 1.47 2.642 2.642 0 0 0-.147 1.768 2.628 2.628 0 0 0 1.004 1.459 2.467 2.467 0 0 0 2.479 0ZM277.793 258.554a2.55 2.55 0 0 0 .03 2.874 2.523 2.523 0 0 0 2.683 1.001 2.634 2.634 0 0 0-.584-5.119 2.455 2.455 0 0 0-2.129 1.244ZM241.889 71.378a2.509 2.509 0 0 0 1.449-2.47 2.516 2.516 0 0 0-1.8-2.227 2.624 2.624 0 0 0-2.956 1.489 2.64 2.64 0 0 0 .851 3.208 2.331 2.331 0 0 0 2.456 0ZM30.011 131.093a2.544 2.544 0 0 0 1.203 3.779c.475.181.993.215 1.487.096a2.623 2.623 0 0 0 1.39-1.08 2.638 2.638 0 0 0-.377-3.303 2.611 2.611 0 0 0-1.598-.736 2.45 2.45 0 0 0-2.105 1.244ZM110.96 268.158a2.543 2.543 0 0 0 .327 4.697 2.616 2.616 0 0 0 2.985-1.471 2.636 2.636 0 0 0-.856-3.226 2.341 2.341 0 0 0-2.456 0ZM56.465 122.616a2.54 2.54 0 0 0-1.216-3.792 2.517 2.517 0 0 0-1.497-.082 2.62 2.62 0 0 0-1.39 1.085 2.639 2.639 0 0 0 .394 3.307 2.614 2.614 0 0 0 1.605.727 2.341 2.341 0 0 0 2.105-1.245ZM227.763 289.48a2.53 2.53 0 0 0-1.408 2.467 2.532 2.532 0 0 0 1.759 2.229 2.609 2.609 0 0 0 1.741-.217 2.638 2.638 0 0 0 .364-4.479 2.328 2.328 0 0 0-2.456 0ZM123.545 86.172a2.547 2.547 0 0 0-.053-2.851 2.521 2.521 0 0 0-2.661-1 2.618 2.618 0 0 0-1.389 1.08 2.64 2.64 0 0 0 .377 3.303c.432.423.996.683 1.597.736.438.01.869-.104 1.245-.328.376-.224.682-.55.884-.94ZM215.553 88.379a2.533 2.533 0 0 0 1.408-2.468 2.53 2.53 0 0 0-1.759-2.229 2.623 2.623 0 0 0-2.956 1.489 2.64 2.64 0 0 0 .851 3.208 2.331 2.331 0 0 0 2.456 0ZM86.309 71.378a2.544 2.544 0 0 0 .03 2.874 2.527 2.527 0 0 0 2.683 1 2.62 2.62 0 0 0 1.39-1.08 2.639 2.639 0 0 0-.377-3.302 2.615 2.615 0 0 0-1.598-.736 2.448 2.448 0 0 0-2.128 1.244ZM285.815 94.954a2.545 2.545 0 0 0-.887 3.847c.311.398.734.694 1.215.85a2.611 2.611 0 0 0 2.985-1.471 2.633 2.633 0 0 0-.857-3.226 2.332 2.332 0 0 0-2.456 0ZM71.875 93.71a2.52 2.52 0 0 0 .018 2.876 2.504 2.504 0 0 0 2.695.975 2.621 2.621 0 0 0 1.39-1.086 2.639 2.639 0 0 0-.393-3.306 2.615 2.615 0 0 0-1.605-.727 2.331 2.331 0 0 0-2.105 1.268ZM131.309 108.269a2.542 2.542 0 0 0-1.216-3.793 2.518 2.518 0 0 0-1.497-.082 2.618 2.618 0 0 0-1.389 1.086 2.64 2.64 0 0 0 .392 3.306 2.617 2.617 0 0 0 1.605.727 2.34 2.34 0 0 0 2.105-1.244ZM226.033 79.127a2.543 2.543 0 0 0-.87 3.853 2.53 2.53 0 0 0 1.22.843 2.613 2.613 0 0 0 2.956-1.488 2.64 2.64 0 0 0-.851-3.208 2.331 2.331 0 0 0-2.455 0ZM187.23 77.507a2.503 2.503 0 0 0-1.11 1.007 2.524 2.524 0 0 0 .213 2.86c.322.397.758.687 1.248.83.588.13 1.203.053 1.741-.218a2.634 2.634 0 0 0 .364-4.48 2.331 2.331 0 0 0-2.456 0ZM148.754 87.557a2.548 2.548 0 0 0 .03 2.874 2.528 2.528 0 0 0 2.683 1 2.634 2.634 0 0 0-.584-5.12 2.459 2.459 0 0 0-2.129 1.245ZM168.986 25.236a2.531 2.531 0 0 0-.411 1.434 2.536 2.536 0 0 0 1.64 2.328c.475.178.992.21 1.484.089a2.624 2.624 0 0 0 1.39-1.08 2.637 2.637 0 0 0-.378-3.303 2.613 2.613 0 0 0-1.597-.736 2.47 2.47 0 0 0-2.128 1.268ZM240.721 296.431a2.513 2.513 0 0 0 1.449-2.471 2.516 2.516 0 0 0-1.8-2.226 2.621 2.621 0 0 0-2.956 1.489 2.638 2.638 0 0 0 .851 3.208 2.336 2.336 0 0 0 2.456 0ZM118.818 262.757a2.517 2.517 0 0 0-1.199-3.774 2.498 2.498 0 0 0-1.491-.077 2.626 2.626 0 0 0-1.787 2.799c.069.602.343 1.162.775 1.584a2.61 2.61 0 0 0 1.597.736 2.327 2.327 0 0 0 2.105-1.268ZM193.779 114.35c.454-.222.83-.577 1.081-1.016a2.543 2.543 0 0 0-1.432-3.68 2.609 2.609 0 0 0-1.741.217 2.638 2.638 0 0 0-.364 4.479 2.33 2.33 0 0 0 2.456 0ZM129.529 279.852a2.54 2.54 0 0 0 1.229 3.763c.475.178.991.209 1.484.088a2.621 2.621 0 0 0 1.39-1.08 2.637 2.637 0 0 0-.378-3.303 2.61 2.61 0 0 0-1.597-.736 2.496 2.496 0 0 0-2.128 1.268ZM64.134 263.602a2.504 2.504 0 0 0 1.114-1.001 2.522 2.522 0 0 0-.2-2.859 2.502 2.502 0 0 0-1.242-.836 2.61 2.61 0 0 0-1.755.199 2.64 2.64 0 0 0-.374 4.497 2.329 2.329 0 0 0 2.457 0ZM298.958 125.364a2.547 2.547 0 0 0 .053 2.851 2.516 2.516 0 0 0 2.66 1 2.634 2.634 0 0 0-.584-5.119 2.487 2.487 0 0 0-2.129 1.268ZM127.822 238.148a2.55 2.55 0 0 0-.03-2.874 2.515 2.515 0 0 0-2.683-1.001 2.634 2.634 0 0 0 .585 5.119 2.33 2.33 0 0 0 1.24-.318c.376-.22.684-.541.888-.926ZM139.005 310.614a2.541 2.541 0 0 0-.03-2.874 2.523 2.523 0 0 0-2.684-1.001 2.631 2.631 0 0 0-1.78 2.809 2.627 2.627 0 0 0 2.389 2.31 2.333 2.333 0 0 0 2.105-1.244ZM168.989 146.685a2.54 2.54 0 0 0 1.216 3.793 2.526 2.526 0 0 0 1.497.082 2.63 2.63 0 0 0 1.012-4.383 2.617 2.617 0 0 0-1.597-.737 2.499 2.499 0 0 0-2.128 1.245ZM120.549 45.29a2.509 2.509 0 0 0 1.449-2.47 2.516 2.516 0 0 0-1.8-2.227 2.609 2.609 0 0 0-1.741.217 2.627 2.627 0 0 0-1.357 3.028c.155.584.505 1.097.993 1.452a2.331 2.331 0 0 0 2.456 0ZM174.157 318.809a2.517 2.517 0 0 0-1.213-3.789 2.487 2.487 0 0 0-1.5-.062 2.623 2.623 0 0 0-1.39 1.085 2.64 2.64 0 0 0 .393 3.307 2.612 2.612 0 0 0 1.605.727 2.48 2.48 0 0 0 2.105-1.268ZM212.795 272.619a2.543 2.543 0 0 0-.03-2.874 2.527 2.527 0 0 0-2.684-1 2.615 2.615 0 0 0-1.389 1.08 2.637 2.637 0 0 0 .377 3.303 2.61 2.61 0 0 0 1.597.736 2.33 2.33 0 0 0 2.129-1.245Z" />
            </G>
            <Path
                fill="#F0D770"
                d="M147.006 45.43a7.74 7.74 0 0 1 2.754-3.357 7.696 7.696 0 0 1 4.122-1.339 8.7 8.7 0 0 1 6.315 3.382 19.838 19.838 0 0 1 2.666 4.955 49.023 49.023 0 0 1 2.526 7.232 104.423 104.423 0 0 1 2.339 12.352c.772 5.73.842 11.576 1.24 17.353 0 1.174 4.373 2.348 4.467 1.15.561-8.383 1.333-16.672 2.596-24.96a51.857 51.857 0 0 1 2.666-11.249 15.418 15.418 0 0 1 7.438-8.97 10.464 10.464 0 0 1 6.151-.751c1.708.446 2.877 2.489 3.649 3.921a3.674 3.674 0 0 0 2.549 1.503c.281 0 2.339.211 1.918-.61a12.712 12.712 0 0 0-4.184-4.858 12.646 12.646 0 0 0-6.013-2.187 13.654 13.654 0 0 0-6.59.586 13.704 13.704 0 0 0-5.549 3.617 26.975 26.975 0 0 0-5.496 12.046c-.983 4.532-1.614 9.182-2.152 13.784-.678 5.59-1.053 11.225-1.45 16.86l4.444 1.151c-.749-10.872-.936-21.909-4.351-32.358a26.117 26.117 0 0 0-6.385-11.741 17.387 17.387 0 0 0-10.688-4.485 9.606 9.606 0 0 0-5.535 1.33 9.662 9.662 0 0 0-3.821 4.235c-.515 1.057 3.836 2.724 4.444 1.409h-.07ZM176.381 286.146a14.367 14.367 0 0 0-3.251 0h-3.251a14.367 14.367 0 0 0-3.251 0c-1.707 0-3.415 0-5.122-.305a21.918 21.918 0 0 1-2.736-.376 4.383 4.383 0 0 0-1.521-.376c-2.339.376-1.029 4.321-.608 5.612a12.672 12.672 0 0 0 4.982 6.082 22.185 22.185 0 0 0 3.672 2.161c.631.305 3.134.728 3.462 1.197.654.916.584 1.949 1.075 2.936.15-.529.492-.982.959-1.268.538.563.702 1.361 1.263 1.902.169-.684.48-1.324.912-1.879.287.471.515.976.679 1.503 0-1.808 1.029-2.677 2.339-3.734.678-.516 1.684-.775 2.339-1.268.654-.493 1.473-1.197 2.338-1.691a13.793 13.793 0 0 0 4.07-3.311 11.988 11.988 0 0 0 2.339-4.555c.234-.869.397-1.738.561-2.607.164-.868.421-1.103-.304-1.291a9.98 9.98 0 0 0-2.76.563 39.36 39.36 0 0 1-2.853.4c-.959.094-4.327.845-5.333.305Z"
            />
            <Path
                fill="#483F50"
                d="M177.34 285.77a14.427 14.427 0 0 0-5.029-.117 55.088 55.088 0 0 0-5.917 0c-.351 0-.327 0 0 0h-1.427c-.467 0-1.52 0-2.338-.165a41.918 41.918 0 0 1-4.234-.751 3.006 3.006 0 0 0-2.026.134 3.021 3.021 0 0 0-1.482 1.392 7.065 7.065 0 0 0 .468 4.274 11.867 11.867 0 0 0 3.648 5.354 17.597 17.597 0 0 0 5.847 3.616c.799.167 1.581.403 2.339.705.959.516.983 2.066 1.38 3.005.398.94 2.035.423 2.339-.164.121-.397.358-.748.678-1.01h-1.964c.468.611.772 1.315 1.263 1.902.491.587 2.011.282 2.339-.282a7.846 7.846 0 0 1 .935-1.878l-2.339.282c.246.441.45.905.608 1.385.258.611 2.339.423 2.339-.282a4.705 4.705 0 0 1 2.947-3.804 46.314 46.314 0 0 0 4.327-2.747 13.521 13.521 0 0 0 5.918-7.655c.233-.799.397-1.597.561-2.349 0-.399.421-1.244.187-1.643-.444-.775-1.918-.54-2.62-.423-1.59.305-3.11.705-4.677.916-1.1.141-2.877.822-3.953.399a2.192 2.192 0 0 0-1.59 0c-.234 0-.866.493-.351.704 2.128.846 4.818 0 7.016-.305a24.162 24.162 0 0 0 2.55-.422c.21 0 1.309-.517 1.473-.376a15.359 15.359 0 0 1-.514 2.583 15.87 15.87 0 0 1-.796 2.536c-1.356 3.381-4.139 5.049-7.016 7.045-2.339 1.69-5.637 2.348-5.707 5.823l2.339-.282c-.199-.558-.442-1.1-.725-1.62-.374-.587-1.918-.164-2.339.282a6.581 6.581 0 0 0-.936 1.855l2.339-.282c-.491-.587-.795-1.291-1.263-1.878-.468-.587-1.567-.235-1.964 0-.563.359-.99.896-1.217 1.526l2.339-.164c-.631-1.456-.514-3.03-2.198-3.617a23.079 23.079 0 0 1-4.514-1.761 13.695 13.695 0 0 1-4.48-3.719 13.762 13.762 0 0 1-2.537-5.251 5.645 5.645 0 0 1-.164-2.066c.008-.297.106-.583.281-.822-.257-.141-.164 0 .257 0h.375c2.384.501 4.814.745 7.25.728.483.035.967.035 1.45 0h6.713c.658-.09 1.323-.129 1.988-.118a2.333 2.333 0 0 0 1.614 0c.093.118.725-.258.21-.493Z"
            />
            <Path
                fill="#F0D770"
                d="M191.864 256.207a63.632 63.632 0 0 1-3.227-34.613c1.73-9.393 4.841-20.946 10.805-28.413a25.714 25.714 0 0 1 11.695-7.749c5.543 12.539.654 25.83-1.427 39.074-2.339 15.756-3.836 32.358-8.397 47.551a30.975 30.975 0 0 1-2.175 5.401 13.33 13.33 0 0 0 0-1.385c-.912-7.022-4.654-13.291-7.274-19.866Z"
            />
            <Path
                fill="#483F50"
                d="M193.011 256.206a63.216 63.216 0 0 1-3.392-33.438c1.567-9.393 4.046-19.162 9.356-27.099a25.509 25.509 0 0 1 13.027-9.839l-1.918-.399c5.006 11.577 1.287 23.975-.888 35.74-2.176 11.765-3.205 24.116-5.45 36.092a75.353 75.353 0 0 1-5.613 19.936l2.339.353c-.398-7.632-4.678-14.418-7.344-21.346-.258-.634-2.526-.634-2.339 0 2.736 6.857 6.876 13.549 7.297 21.134 0 .634 1.988.869 2.339.352a69.085 69.085 0 0 0 5.145-17.282c1.263-6.129 2.176-12.352 3.041-18.575.865-6.223 1.59-12.21 2.619-18.292 1.03-6.082 2.526-12.094 3.322-18.222a37.55 37.55 0 0 0-2.129-19.913c-.234-.54-1.497-.564-1.918-.399a26.882 26.882 0 0 0-12.068 7.937 44.334 44.334 0 0 0-6.713 12.75 79.032 79.032 0 0 0-5.052 31.725 63.408 63.408 0 0 0 4.187 18.785c.117.634 2.409.634 2.152 0Z"
            />
            <Path
                fill="#F0D770"
                d="M151.611 256.207a63.33 63.33 0 0 0 3.228-34.613c-1.731-9.393-4.842-20.946-10.806-28.413a25.533 25.533 0 0 0-11.694-7.749c-5.567 12.539-.678 25.83 1.403 39.074 2.456 15.756 3.836 32.358 8.397 47.551a30.975 30.975 0 0 0 2.175 5.401 13.33 13.33 0 0 1 0-1.385c.936-7.022 4.701-13.291 7.297-19.866Z"
            />
            <Path
                fill="#483F50"
                d="M152.755 256.371a63.877 63.877 0 0 0 3.227-34.636c-1.73-9.393-4.28-19.631-10.033-27.521a27.061 27.061 0 0 0-13.005-9.111c-.421-.165-1.543-.4-1.801.164-5.028 11.741-1.309 24.046.866 35.857 2.222 12.164 3.251 24.539 5.566 36.679a75.395 75.395 0 0 0 5.567 19.608c.234.446 2.339.892 2.339.188.421-7.585 4.677-14.325 7.32-21.134.211-.493-2.034-1.01-2.338-.306-2.76 6.881-7.017 13.62-7.321 21.134l2.339.188a70.125 70.125 0 0 1-5.146-17.424c-1.239-6.105-2.152-12.281-2.994-18.457-.842-6.175-1.567-12.022-2.572-18.01-1.006-5.988-2.55-12.094-3.321-18.222a37.33 37.33 0 0 1 2.081-19.796l-1.801.165a24.864 24.864 0 0 1 12.139 8.594 48.476 48.476 0 0 1 6.245 12.798 78.068 78.068 0 0 1 4.537 30.527 63.12 63.12 0 0 1-4.14 18.409c-.257.494 1.988 1.01 2.246.306Z"
            />
            <Path
                fill="#F0D770"
                d="M210.454 183.67c-7.016-13.173-27.645-11.741-40.135-12.469-11.928-.704-30.686.282-37.118 12.469-.304.587-.537 1.174-.795 1.761a25.536 25.536 0 0 1 11.695 7.749c5.964 7.468 9.074 19.138 10.805 28.414a63.334 63.334 0 0 1-3.227 34.612c-2.597 6.575-6.362 12.845-7.228 19.866a13.35 13.35 0 0 0 0 1.386 19.99 19.99 0 0 0 9.87 9.604 122.054 122.054 0 0 0 12.28 5.495 8.769 8.769 0 0 0 4.56.939h1.474a8.938 8.938 0 0 0 4.678-.939 124.026 124.026 0 0 0 12.092-5.495 19.99 19.99 0 0 0 9.87-9.604 13.35 13.35 0 0 0 0-1.386c-.866-7.044-4.678-13.291-7.227-19.866a63.637 63.637 0 0 1-3.228-34.612c1.731-9.393 4.841-20.946 10.805-28.414a25.727 25.727 0 0 1 11.695-7.749 8.737 8.737 0 0 1-.866-1.761Z"
            />
            <Path
                fill="#483F50"
                d="M211.485 183.717c-5.707-10.661-19.927-12.093-30.756-12.587-11.554-.54-23.763-1.761-34.943 1.879a22.69 22.69 0 0 0-8.662 4.514 22.8 22.8 0 0 0-5.979 7.744c0 .211.397.422.514.469a25.713 25.713 0 0 1 10.969 7.186 39.726 39.726 0 0 1 6.105 10.919 83.188 83.188 0 0 1 5.847 26.065 63.93 63.93 0 0 1-5.333 28.766 96.557 96.557 0 0 0-5.379 13.455c-.468 1.808-1.357 4.344-.398 6.058a22.38 22.38 0 0 0 3.415 4.697c3.087 3.24 7.157 4.696 11.086 6.692a60.509 60.509 0 0 0 6.292 2.841 23.442 23.442 0 0 0 4.514 1.433c1.918.246 3.859.246 5.777 0a20.282 20.282 0 0 0 5.052-1.55 65.727 65.727 0 0 0 6.292-2.865c2.081-1.033 4.303-1.902 6.338-3.076a20.072 20.072 0 0 0 4.537-3.663 19.39 19.39 0 0 0 1.731-2.207 9.907 9.907 0 0 0 1.684-2.818 14.131 14.131 0 0 0-1.006-6.153 52.769 52.769 0 0 0-2.339-6.504 121.8 121.8 0 0 1-5.519-13.596 62.61 62.61 0 0 1-2.55-14.841 79.425 79.425 0 0 1 3.906-26.817c2.339-8.054 6.081-16.695 13.566-21.133a34.506 34.506 0 0 1 5.894-2.771.239.239 0 0 0 .161-.125.239.239 0 0 0 .002-.204 23.518 23.518 0 0 0-.818-1.738c-.304-.563-2.55-.634-2.339 0 .21.634.561 1.151.819 1.738l.163-.329a28.281 28.281 0 0 0-10.338 6.152 33.548 33.548 0 0 0-6.361 9.886 84.57 84.57 0 0 0-6.549 24.234 63.828 63.828 0 0 0 2.923 28.178c1.544 4.462 3.719 8.642 5.497 12.986a46.328 46.328 0 0 1 2.175 6.599 14.13 14.13 0 0 1 .538 3.569 6.511 6.511 0 0 1-1.474 2.982 20.117 20.117 0 0 1-3.929 4.297 25.551 25.551 0 0 1-5.73 3.241c-2.128.986-4.187 2.09-6.315 3.076a32.871 32.871 0 0 1-5.847 2.348c-4.257 1.127-8.444-.516-12.256-2.348-2.082-.963-4.116-2.043-6.198-3.006a24.747 24.747 0 0 1-5.8-3.405 19.703 19.703 0 0 1-3.953-4.696 4.52 4.52 0 0 1-1.006-2.935c.137-1.18.356-2.35.655-3.499a82.392 82.392 0 0 1 5.192-13.244 64.657 64.657 0 0 0 5.707-27.85 84.485 84.485 0 0 0-4.911-25.102c-2.62-7.585-6.479-15.029-13.683-19.115a36.542 36.542 0 0 0-5.52-2.512l.515.469c5.005-11.247 18.267-13.76 29.376-14.089 5.052 0 10.104.282 15.156.446a83.011 83.011 0 0 1 16.7 1.761 21.219 21.219 0 0 1 8.329 3.379 21.316 21.316 0 0 1 6.195 6.531c.328.728 2.573.728 2.269.188Z"
            />
            <Path
                fill="#F0D770"
                d="M115.309 187.145c-2.338-2.958-7.975-10.473-13.191-12.21a5.13 5.13 0 0 0-.842.305c-5.613 2.536.351 13.807 2.339 17.283a31.316 31.316 0 0 0 12.315 12.914 31.144 31.144 0 0 0 17.342 4.063l1.59-.188a54.756 54.756 0 0 1-4.818-3.686c-6.011-5.213-9.8-12.328-14.735-18.481Z"
            />
            <Path
                fill="#483F50"
                d="M116.434 187.145c-3.368-4.18-6.759-8.829-11.507-11.53a4.501 4.501 0 0 0-5.94.306 6.26 6.26 0 0 0-1.077 5.377 37.044 37.044 0 0 0 4.959 12.258 33.845 33.845 0 0 0 12.676 12.516 31.313 31.313 0 0 0 19.811 3.663c.257 0 .888-.305.444-.611a47.255 47.255 0 0 1-10.665-10.074c-2.971-3.921-5.614-8.101-8.701-11.905-.444-.54-2.619-.305-2.339.141 3.181 3.968 5.894 8.313 9.028 12.328a47.932 47.932 0 0 0 10.595 9.933l.445-.634c-15.905 2.348-29.119-10.637-33.423-25.055-.865-2.936-1.614-7.327 2.105-8.478h-1.403a20.51 20.51 0 0 1 7.555 5.801c1.8 1.925 3.438 4.038 5.098 6.105.468.493 2.807.235 2.339-.141Z"
            />
            <Path
                fill="#F0D770"
                d="M140.291 190.41c-5.94-5.777-11.273-3.968-18.173-6.833-5.239-2.184-13.331-10.685-20.067-8.618 5.215 1.737 10.782 9.252 13.191 12.21 4.935 6.129 8.724 13.244 14.688 18.457a54.574 54.574 0 0 0 4.818 3.687"
            />
            <Path
                fill="#483F50"
                d="M141.366 190.198a19.705 19.705 0 0 0-10.431-4.932 29.327 29.327 0 0 1-10.736-3.499c-5.59-3.522-11.835-9.181-18.968-7.044-.421 0-.445.516 0 .657a22.85 22.85 0 0 1 8.771 7.045c2.338 2.583 4.467 5.354 6.502 8.148 2.736 3.382 5.075 7.115 7.928 10.661a46.86 46.86 0 0 0 9.356 8.383c.478.287 1.05.371 1.59.235.258 0 .889-.305.445-.634a46.217 46.217 0 0 1-10.057-9.393c-2.76-3.475-5.146-7.232-7.836-10.778-2.034-2.701-4.163-5.401-6.455-7.89a22.092 22.092 0 0 0-8.607-6.481v.728c3.181-.916 6.666 1.244 9.356 2.865 2.689 1.62 5.168 3.616 7.952 5.095a30.89 30.89 0 0 0 9.355 2.677 18.135 18.135 0 0 1 9.917 4.697c.468.422 2.69.211 2.035-.423l-.117-.117Z"
            />
            <Path
                fill="#F0D770"
                d="M228.768 187.145c2.339-2.958 7.975-10.473 13.191-12.21.288.08.569.182.842.305 5.59 2.536-.374 13.807-2.339 17.283a31.297 31.297 0 0 1-12.347 12.925 31.128 31.128 0 0 1-17.38 4.029l-1.567-.188a57.566 57.566 0 0 0 4.795-3.687c6.057-5.189 9.87-12.304 14.805-18.457Z"
            />
            <Path
                fill="#483F50"
                d="M229.845 187.521c3.555-4.438 7.461-10.144 13.051-12.093h-1.333c3.157.986 2.572 4.978 1.918 7.491a41.992 41.992 0 0 1-3.462 8.359 33.429 33.429 0 0 1-16.536 15.733 27.118 27.118 0 0 1-14.431 1.879l1.287.869a46.857 46.857 0 0 0 10.618-10.004c3.064-3.968 5.754-8.218 8.888-12.14.421-.54-1.731-1.244-2.152-.728-3.204 3.828-5.8 8.078-8.888 12a46.868 46.868 0 0 1-10.688 10.05c-.562.376 1.146.869 1.286.892a31.725 31.725 0 0 0 17.564-2.828 31.874 31.874 0 0 0 13.309-11.848 41.29 41.29 0 0 0 5.52-12.305 8.577 8.577 0 0 0-.14-5.776 4.678 4.678 0 0 0-4.795-2.489 18.7 18.7 0 0 0-7.484 5.518c-2.035 2.113-3.836 4.438-5.684 6.716-.444.516 1.731 1.244 2.152.704Z"
            />
            <Path
                fill="#F0D770"
                d="M203.695 190.41c5.941-5.777 11.297-3.968 18.197-6.833 5.239-2.184 13.331-10.685 20.067-8.618-5.215 1.737-10.805 9.252-13.191 12.21-4.935 6.129-8.747 13.244-14.711 18.457a57.566 57.566 0 0 1-4.795 3.687"
            />
            <Path
                fill="#483F50"
                d="M204.749 190.503a17.958 17.958 0 0 1 9.823-4.532 31.535 31.535 0 0 0 9.356-2.747c2.9-1.48 5.239-3.452 7.952-5.119 2.713-1.668 6.011-3.64 9.355-2.701l.164-.775a22.588 22.588 0 0 0-8.631 6.481c-2.338 2.349-4.28 5.002-6.268 7.632-2.689 3.522-5.098 7.28-7.835 10.778a45.423 45.423 0 0 1-10.197 9.558c-1.006.704 1.216.798 1.73.446a45.751 45.751 0 0 0 9.356-8.383c2.783-3.335 5.145-7.045 7.695-10.473 2.105-2.889 4.327-5.73 6.689-8.407a22.773 22.773 0 0 1 8.677-7.045c.444-.164.772-.587.14-.751-7.016-2.02-13.518 3.968-19.061 7.397a30.33 30.33 0 0 1-10.666 3.381 19.774 19.774 0 0 0-10.337 4.978c-.609.587 1.613.658 2.081.212l-.023.07ZM140.055 223.871c3.415.47 11.414 4.391 9.73 9.111-1.38 3.922-6.175 2.348-8.07.399a9.86 9.86 0 0 1-1.66-9.51ZM203.443 223.871c-3.415.47-11.391 4.391-9.73 9.111 1.38 3.922 6.175 2.348 8.093.399a9.912 9.912 0 0 0 1.637-9.51ZM170.695 276.87v16.672c0 .634 2.339.611 2.339 0v-16.648c0-.658-2.339-.634-2.339 0v-.024Z"
            />
            <Path
                fill="#483F50"
                d="M184.332 269.967a5.885 5.885 0 0 0-3.064-1.479 140.959 140.959 0 0 0-18.36-.141 6.7 6.7 0 0 0-3.695 1.62c-2.854 3.194 0 8.43 2.128 11.201a13.722 13.722 0 0 0 3.017 3.147.188.188 0 0 0 .187 0v-.141a.47.47 0 0 1 .562-.141c.19.106.364.241.514.399a6.738 6.738 0 0 0 5.988 1.714c1.122-.164 2.339 0 3.461-.187a4.688 4.688 0 0 0 1.838-.697 4.697 4.697 0 0 0 1.39-1.393l.164-.141a.255.255 0 0 1 .304.141c.35.516.748.422 1.076 0 .295-.403.623-.78.982-1.127a24.072 24.072 0 0 0 1.988-2.607 14.665 14.665 0 0 0 2.479-6.105 5.133 5.133 0 0 0-.959-4.063ZM160.713 165.142c-.375-15.568-12.397-28.577-24.044-37.125-14.314-10.496-35.083-15.146-52.508-13.103-20.535 2.348-39.153 22.872-45 42.268-7.204 23.811-9.355 48.89 4.678 69.695 7.39 10.989 22.172 25.149 37.212 27.028 10.244 2.113 27.411-5.66 30.405-14.536 1.614-4.837 3.578-9.815 3.415-14.911a37.31 37.31 0 0 0-4.474-15.943 37.145 37.145 0 0 0-10.924-12.413 36.973 36.973 0 0 0-15.207-6.42 36.9 36.9 0 0 0-16.477.844c.468-7.302 2.503-14.347 7.274-18.785a37.525 37.525 0 0 1 22.313-8.595c8.63 0 15.67 5.096 21.377 11.272 5.707 6.176 9.987 14.747 18.875 16.155 7.016 1.081 10.642-3.475 15.507-7.819a20.574 20.574 0 0 0 5.959-7.865 20.65 20.65 0 0 0 1.619-9.747Zm-72.014 45.673c7.016 7.467 7.016 18.246-1.825 22.966a14.67 14.67 0 0 1-3.602-.517c-8.724-2.348-11.484-14.629-13.425-22.402-.538-2.16-1.029-4.696-1.403-7.186 7.555-.305 15.436 1.973 20.255 7.139Z"
            />
            <Path
                fill="#F0D770"
                d="M161.878 165.025c-.538-14.043-9.893-25.784-20.301-34.237a74.698 74.698 0 0 0-36.838-15.921 79.756 79.756 0 0 0-20.208-.47 45.189 45.189 0 0 0-17.518 5.965 66.478 66.478 0 0 0-25.961 28.93 92.845 92.845 0 0 0-6.221 20.077 103.707 103.707 0 0 0-2.527 22.12 63.57 63.57 0 0 0 13.121 39.38 76.71 76.71 0 0 0 14.198 14.089 46.529 46.529 0 0 0 17.985 8.876 31.85 31.85 0 0 0 15.998-.564 36.06 36.06 0 0 0 14.712-7.983 15.57 15.57 0 0 0 4.069-5.683 57.315 57.315 0 0 0 3.275-11.248 32.467 32.467 0 0 0-4.14-20.077 38.548 38.548 0 0 0-14.473-14.631 38.358 38.358 0 0 0-19.908-5.071 39.11 39.11 0 0 0-9.987 1.621l1.8.211a33.376 33.376 0 0 1 3.65-14.089 21.922 21.922 0 0 1 9.729-8.83 37.314 37.314 0 0 1 13.05-3.827c4.722-.355 9.431.831 13.426 3.381a43.66 43.66 0 0 1 10.431 9.135 120.814 120.814 0 0 0 7.882 9.393c5.824 5.659 14.174 7.608 21.05 2.63a62.252 62.252 0 0 0 5.473-4.697 32.303 32.303 0 0 0 4.865-5.26 21.95 21.95 0 0 0 3.485-13.103c0-.634-2.339-.469-2.339.258a21.787 21.787 0 0 1-2.994 12.07 43.138 43.138 0 0 1-9.355 9.393 13.293 13.293 0 0 1-5.871 3.1 11.65 11.65 0 0 1-6.829-1.104 27.55 27.55 0 0 1-9.122-8.054c-5.426-6.693-10.969-13.62-19.296-16.766-8.326-3.147-17.19-1.034-24.745 2.559a24.186 24.186 0 0 0-10.618 8.923 33.33 33.33 0 0 0-4.14 15.099c0 .587 1.544.282 1.777.212a36.123 36.123 0 0 1 15.078-.607c5.013.861 9.79 2.77 14.02 5.605a36.34 36.34 0 0 1 10.534 10.847 36.503 36.503 0 0 1 5.228 14.212 27.282 27.282 0 0 1-.725 10.989c-.515 1.855-1.123 3.71-1.754 5.542a26.002 26.002 0 0 1-1.45 3.663 24.98 24.98 0 0 1-11.695 9.393 27.973 27.973 0 0 1-15.553 2.865 43.57 43.57 0 0 1-17.472-7.045 72.863 72.863 0 0 1-14.57-13.079 62.333 62.333 0 0 1-15.157-35.81 107.26 107.26 0 0 1 5.637-41.188 66.392 66.392 0 0 1 20.746-30.128 50.01 50.01 0 0 1 16.115-9.158 51.891 51.891 0 0 1 18.71-1.855 75.04 75.04 0 0 1 37.423 11.741c10.384 6.881 20.465 16.931 24.418 29.071a34.47 34.47 0 0 1 1.637 9.393c-.07.728 2.268.446 2.245-.258Z"
            />
            <Path
                fill="#F0D770"
                d="M87.596 211.073A17.508 17.508 0 0 1 92.6 223.12a12.196 12.196 0 0 1-1.872 6.111 12.133 12.133 0 0 1-4.7 4.315l1.099-.259c-6.736-.235-10.548-5.612-12.84-11.389a84.095 84.095 0 0 1-4.678-18.339l-1.427.611a25.38 25.38 0 0 1 10.432 1.396 25.463 25.463 0 0 1 8.98 5.507c.492.493 2.644 0 2.34-.493-5.403-5.659-13.542-7.632-21.05-7.373-.234 0-1.497 0-1.404.61a97.891 97.891 0 0 0 3.369 14.606 29.844 29.844 0 0 0 5.706 11.342 12.92 12.92 0 0 0 4.678 3.405 10.002 10.002 0 0 0 6.76.845 12.639 12.639 0 0 0 4.696-3.913 12.705 12.705 0 0 0 2.32-5.667 17.417 17.417 0 0 0-1.061-7.486 17.358 17.358 0 0 0-4.131-6.322c-.468-.563-2.643 0-2.222.446Z"
            />
            <Path
                fill="#F0D770"
                d="M70.48 203.16c-10.338 0-22.01 4.697-25.377 15.334l2.339-.235c-1.38-2.183-.375-5.776.21-8.054a20.956 20.956 0 0 1 3.766-7.913 34.129 34.129 0 0 1 18.71-11.882c1.544-.376.281-1.08-.724-.822a37.067 37.067 0 0 0-19.81 11.999 21.946 21.946 0 0 0-4.398 9.041c-.584 2.348-1.52 5.894 0 8.195.304.47 2.082.282 2.34-.258a20.585 20.585 0 0 1 7.998-10.403 25.303 25.303 0 0 1 14.571-3.968c1.006 0 2.129-.963.538-.963l-.163-.071ZM89.867 232.56a14.705 14.705 0 0 0 4.678 7.303 52.192 52.192 0 0 0 7.157 4.696 2.334 2.334 0 0 0 1.613.4c.398 0 .585-.376.164-.634a54.6 54.6 0 0 1-7.016-4.697 13.883 13.883 0 0 1-4.374-7.044c-.187-.658-2.339-.963-2.339-.306l.117.282ZM93.373 219.434a9.729 9.729 0 0 0 10.338 0 16.422 16.422 0 0 0 6.783-7.867c.233-.611-1.965-1.385-2.222-.751a16.098 16.098 0 0 1-5.567 7.044 7.143 7.143 0 0 1-3.804 1.789 7.125 7.125 0 0 1-4.148-.662 1.987 1.987 0 0 0-1.567-.328c-.468.211 0 .563.187.728v.047ZM87.502 193.767c.56 4.697.771 10.051-1.708 14.325-.327.563 1.918.727 2.34.14 2.525-4.367 2.338-9.745 1.753-14.605 0-.681-2.339-.494-2.339.14h-.046Z"
            />
            <Path
                fill="#F0D770"
                d="M60.957 194.589a75.411 75.411 0 0 1 1.66 7.843c.117.658 2.34 1.08 2.34.376a74.58 74.58 0 0 0-1.849-7.867c-.187-.657-2.338-1.009-2.338-.352h.187ZM45.312 151.664c0 4.955 4.912 8.735 8.678 11.154a46.664 46.664 0 0 0 16.956 6.692c.258 0 1.147.235 1.24-.188.094-.422-.819-.681-1.052-.728a41.988 41.988 0 0 1-15.39-6.081c-3.462-2.208-8.163-5.73-8.14-10.333 0-.751-2.338-1.08-2.338-.516h.046ZM38.947 195.599a22.43 22.43 0 0 1 10.805-7.843 59.879 59.879 0 0 1 14.899-3.499c1.567-.188.398-1.033-.608-.916a64.164 64.164 0 0 0-15.951 3.804 23.398 23.398 0 0 0-11.39 8.266c-.351.517 1.87.845 2.338.258l-.093-.07ZM71.152 225.656a20.373 20.373 0 0 0-8.045 5.894 19.458 19.458 0 0 0-4.07 7.256c-.21.704 2.082.587 2.339 0a17.992 17.992 0 0 1 3.789-6.787 18.724 18.724 0 0 1 7.297-5.706c.304-.141.749-.422.351-.704a2.146 2.146 0 0 0-1.614 0l-.047.047ZM76.603 119.048a41.693 41.693 0 0 0-1.535 22.36 41.591 41.591 0 0 0 10.26 19.907c.42.447 2.666.447 2.058-.188a41.15 41.15 0 0 1-10.072-19.731 41.251 41.251 0 0 1 1.605-22.114c.187-.516-2.058-1.033-2.339-.328l.023.094ZM130.632 126.584a36.946 36.946 0 0 0-17.425 12.751 52.707 52.707 0 0 0-10.338 19.631c-.14.54 2.176.775 2.339 0a51.747 51.747 0 0 1 9.917-18.903 35.863 35.863 0 0 1 17.121-12.727c.491-.164.304-.446 0-.681a2.33 2.33 0 0 0-1.661 0l.047-.071ZM153.132 151.922a40.478 40.478 0 0 1-11.25 13.737 48.014 48.014 0 0 1-17.962 8.43c-1.17.282.889 1.151 1.473 1.01a49.925 49.925 0 0 0 18.173-8.524 41.226 41.226 0 0 0 11.695-14.23c.234-.446-1.918-1.198-2.339-.517l.21.094Z"
            />
            <Path
                fill="#483F50"
                d="M189.761 182.66c4.864 4.344 8.583 8.9 15.506 7.82 8.888-1.409 13.262-10.074 18.875-16.156 5.613-6.082 12.747-11.365 21.401-11.271a37.633 37.633 0 0 1 22.312 8.594c4.678 4.532 6.783 11.577 7.251 18.786a36.9 36.9 0 0 0-16.435-.789 36.977 36.977 0 0 0-15.154 6.434 37.146 37.146 0 0 0-10.884 12.388 37.292 37.292 0 0 0-4.468 15.898 43.953 43.953 0 0 0 3.344 14.912c2.971 8.876 20.138 16.648 30.406 14.535 15.015-1.879 29.797-16.038 37.188-27.028 14.033-20.805 11.811-45.884 4.678-69.695-5.848-19.302-24.465-39.755-44.977-42.268-17.471-2.043-38.194 2.607-52.531 13.103-11.694 8.548-23.669 21.557-24.044 37.126a20.729 20.729 0 0 0 1.606 9.736 20.624 20.624 0 0 0 5.926 7.875Zm84.737 21.134a67.742 67.742 0 0 1-1.403 7.186c-1.942 7.772-4.678 20.006-13.402 22.402-1.183.321-2.4.494-3.625.516-8.912-4.696-8.795-15.498-1.825-22.965 4.818-5.284 12.724-7.562 20.255-7.35v.211Z"
            />
            <Path
                fill="#F0D770"
                d="M188.727 182.708a46.337 46.337 0 0 0 8.163 6.786 14.214 14.214 0 0 0 9.753 1.456c6.783-1.339 11.086-7.045 15.156-12.07 4.678-5.894 10.268-11.741 17.541-14.089 7.274-2.348 15.788-.188 22.36 3.428a20.929 20.929 0 0 1 8.911 8.782 34.495 34.495 0 0 1 3.345 13.479l1.543-.164a38.346 38.346 0 0 0-21.822.137 38.493 38.493 0 0 0-18.242 12.026 36.964 36.964 0 0 0-8.233 19.162 29.592 29.592 0 0 0 1.333 11.952 30.862 30.862 0 0 0 3.625 8.97 30.41 30.41 0 0 0 13.799 9.652 32.335 32.335 0 0 0 16.63 2.348c14.033-2.348 26.008-12.094 34.662-23.06a64.114 64.114 0 0 0 13.355-41.633 109.124 109.124 0 0 0-3.041-22.684 83.637 83.637 0 0 0-7.227-20.664 64.505 64.505 0 0 0-29.212-28.343c-12.63-5.683-27.809-4.814-40.977-1.55a73.486 73.486 0 0 0-36.393 21.204 48.564 48.564 0 0 0-11.04 17.8 27.337 27.337 0 0 0 .375 19.959 23.945 23.945 0 0 0 5.636 7.186c.446.327.993.485 1.544.446.257 0 .935-.188.538-.54a22.995 22.995 0 0 1-5.707-7.444 22.434 22.434 0 0 1-1.731-9.393 36.499 36.499 0 0 1 6.034-19.114 68.898 68.898 0 0 1 30.663-25.525 80.708 80.708 0 0 1 20.348-5.542 67.196 67.196 0 0 1 20.349 0c13.027 2.348 24.183 11.741 31.925 21.979 8.28 11.107 12.186 24.398 14.361 37.947 2.339 14.301 1.754 29.353-4.35 42.691a65.388 65.388 0 0 1-11.25 16.578 69.336 69.336 0 0 1-16.045 13.291 35.4 35.4 0 0 1-17.939 5.471 33.066 33.066 0 0 1-16.372-5.189 25.061 25.061 0 0 1-6.128-5.096 21.66 21.66 0 0 1-3.462-7.631 31.866 31.866 0 0 1-2.105-12.258 35.078 35.078 0 0 1 2.105-9.769 37.35 37.35 0 0 1 12.583-16.763 37.126 37.126 0 0 1 19.6-7.306 32.645 32.645 0 0 1 11.063 1.315c.14 0 1.59.329 1.544-.164-.515-7.585-2.62-15.522-8.818-20.43a39.1 39.1 0 0 0-19.857-7.631 26.67 26.67 0 0 0-10.847 1.404 26.752 26.752 0 0 0-9.384 5.64 57.911 57.911 0 0 0-7.578 8.196 62.194 62.194 0 0 1-7.017 7.819 14.222 14.222 0 0 1-5.366 3.452 14.17 14.17 0 0 1-6.328.752c-4.187-.822-7.368-4.697-10.385-7.35a2.164 2.164 0 0 0-1.543-.47c-.164.023-.842.305-.445.564Z"
            />
            <Path
                fill="#F0D770"
                d="M273.353 203.583a83.082 83.082 0 0 1-4.678 18.504c-2.339 5.894-6.221 11.036-13.027 11.295l1.38.352c-7.017-3.804-8.187-11.929-4.491-18.551 4.397-7.913 13.612-11.177 22.266-10.872 1.567 0 .561-.986-.444-1.01a29.247 29.247 0 0 0-18.875 5.26 17.932 17.932 0 0 0-5.583 6.765 17.998 17.998 0 0 0-1.714 8.616 12.252 12.252 0 0 0 2.97 6.904 14.022 14.022 0 0 0 3.04 2.606 5.535 5.535 0 0 0 4.234.822c5.8-.751 9.355-4.955 11.694-10.027a57.508 57.508 0 0 0 3.088-9.134c1-3.652 1.781-7.361 2.338-11.107.211-.775-2.105-1.198-2.198-.423Z"
            />
            <Path
                fill="#F0D770"
                d="M272.744 204.099c9.496 0 19.74 4.697 22.804 14.395.187.634 1.941.657 2.339.141 1.474-2.349.491-5.965-.14-8.43a21.562 21.562 0 0 0-4.234-8.548 36.623 36.623 0 0 0-19.763-12.164c-.702-.164-2.643.447-1.17.799a34.708 34.708 0 0 1 18.922 11.858 21.173 21.173 0 0 1 3.906 8.125c.585 2.348 1.544 5.824.187 7.984l2.339.141c-3.368-10.708-14.782-15.381-25.143-15.334-.257 0-1.193 0-1.169.47.023.469.888.469 1.169.469l-.047.094ZM250.826 232.466a14.101 14.101 0 0 1-4.49 7.045 55.43 55.43 0 0 1-7.017 4.696c-.421.258.515.705.655.752a1.801 1.801 0 0 0 1.473 0 53.408 53.408 0 0 0 7.017-4.697 14.474 14.474 0 0 0 4.514-7.209c.164-.634-2.082-1.198-2.339-.517l.187-.07ZM247.881 219.057a5.176 5.176 0 0 1-3.836.822 10.477 10.477 0 0 1-3.906-1.832 16.426 16.426 0 0 1-5.426-7.044c-.234-.564-2.526-.352-2.339.375 2.62 6.528 10.689 12.211 17.471 7.937.445-.281-.233-.587-.467-.634a2.334 2.334 0 0 0-1.591.259l.094.117ZM253.165 193.368c-.585 4.931-.749 10.308 1.824 14.723.304.54 2.526.916 2.082 0-2.456-4.203-2.339-9.393-1.661-14.089 0-.728-2.175-1.245-2.339-.658l.094.024Z"
            />
            <Path
                fill="#F0D770"
                d="M279.712 194.613a75.438 75.438 0 0 0-1.661 7.843c-.117.634 2.199.986 2.339.329a74.492 74.492 0 0 1 1.661-7.867c.163-.587-2.129-1.01-2.339-.305ZM295.332 151.664c0 4.696-4.678 8.266-8.163 10.543a43.96 43.96 0 0 1-15.998 6.34c-.467 0-.467.376-.14.658.472.323 1.051.45 1.614.352a45.488 45.488 0 0 0 16.372-6.434c3.672-2.348 8.631-6.082 8.607-10.943 0-.751-2.339-1.08-2.339-.516h.047ZM306.355 195.365a23.532 23.532 0 0 0-11.507-8.219 63.728 63.728 0 0 0-15.928-3.757c-.304 0-1.287 0-1.45.305-.164.305.538.564.818.587a59.873 59.873 0 0 1 14.899 3.499 22.174 22.174 0 0 1 10.829 7.796c.374.587 2.62.305 2.339-.211ZM270.189 226.337a19.3 19.3 0 0 1 7.531 5.659 18.79 18.79 0 0 1 3.906 6.857c.188.704 2.48.305 2.339-.282a19.396 19.396 0 0 0-3.999-7.045 20.264 20.264 0 0 0-7.812-5.87 2.333 2.333 0 0 0-1.614 0c-.21 0-.842.47-.327.681h-.024ZM264.064 119.047a41.296 41.296 0 0 1 1.533 22.088 41.198 41.198 0 0 1-10.093 19.687c-.421.446 1.707 1.057 2.199.564a41.636 41.636 0 0 0 10.206-19.922 41.731 41.731 0 0 0-1.576-22.346c-.234-.611-2.503-.705-2.339 0l.07-.071ZM210.878 127.313a35.895 35.895 0 0 1 17.05 12.868 52.432 52.432 0 0 1 9.777 18.786c.164.728 2.339.564 2.339 0a52.92 52.92 0 0 0-10.432-19.725 37.122 37.122 0 0 0-17.518-12.657c-.701-.211-2.643.329-1.216.775v-.047ZM187.535 151.922a41.741 41.741 0 0 0 11.952 14.371 50.858 50.858 0 0 0 18.711 8.712c1.356.328 1.567-.587.21-.916a46.514 46.514 0 0 1-17.401-8.336 40.17 40.17 0 0 1-11.086-13.573c-.328-.634-2.526-.775-2.339-.258h-.047Z"
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
