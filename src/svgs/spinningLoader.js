import * as React from "react";
const SvgComponent = ({height , width , color}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke={color}
      strokeWidth={1.5}
      transform="translate(2 1)"
    >
      <circle cx={42.601} cy={11.462} r={5} fill="#fff">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="1.3s"
          repeatCount="indefinite"
          values="1;0;0;0;0;0;0;0"
        />
      </circle>
      <circle cx={49.063} cy={27.063} r={5} fill="none">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="1.3s"
          repeatCount="indefinite"
          values="0;1;0;0;0;0;0;0"
        />
      </circle>
      <circle cx={42.601} cy={42.663} r={5} fill="none">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="1.3s"
          repeatCount="indefinite"
          values="0;0;1;0;0;0;0;0"
        />
      </circle>
      <circle cx={27} cy={49.125} r={5} fill="none">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="1.3s"
          repeatCount="indefinite"
          values="0;0;0;1;0;0;0;0"
        />
      </circle>
      <circle cx={11.399} cy={42.663} r={5} fill="none">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="1.3s"
          repeatCount="indefinite"
          values="0;0;0;0;1;0;0;0"
        />
      </circle>
      <circle cx={4.938} cy={27.063} r={5} fill="none">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="1.3s"
          repeatCount="indefinite"
          values="0;0;0;0;0;1;0;0"
        />
      </circle>
      <circle cx={11.399} cy={11.462} r={5} fill="none">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="1.3s"
          repeatCount="indefinite"
          values="0;0;0;0;0;0;1;0"
        />
      </circle>
      <circle cx={27} cy={5} r={5} fill="none">
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="1.3s"
          repeatCount="indefinite"
          values="0;0;0;0;0;0;0;1"
        />
      </circle>
    </g>
  </svg>
)
export default SvgComponent
