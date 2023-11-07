import * as React from "react"
const Notification = ({height , width , color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={104}
    height={88}
    fill="none"
  >
    <g clipPath="url(#a)">
      <path
        fill={color}
        d="m58.24 40.975-.746.085.745-.085h.001Zm.447 3.94.745-.084-.745.084Zm-13.374 0-.745-.084.745.084Zm.447-3.94.746.085-.746-.085Zm-1.312 5.897-.571-.486.57.486h.001Zm15.104 0-.57.486.57-.486ZM54.27 36.374h-.75c0 .32.204.605.507.71l.243-.71Zm-4.54 0 .243.71a.75.75 0 0 0 .507-.71h-.75Zm5.972 15.89a.75.75 0 1 0-1.404-.527l1.404.526v.001Zm-6-.527a.748.748 0 0 0-.973-.46.75.75 0 0 0-.431.986l1.404-.526Zm8.075-2.487H46.223v1.5h11.554v-1.5Zm-.283-8.19.448 3.94 1.49-.17-.447-3.94-1.49.17h-.001ZM46.058 45l.448-3.94-1.49-.17-.448 3.94 1.49.17Zm-1.04 2.358A4.404 4.404 0 0 0 46.059 45l-1.49-.17a2.906 2.906 0 0 1-.691 1.556l1.142.972h-.002ZM57.943 45c.098.865.462 1.68 1.04 2.358l1.141-.972a2.906 2.906 0 0 1-.691-1.555l-1.49.169Zm-11.72 4.25c-.654 0-1.118-.324-1.331-.7-.207-.365-.204-.802.128-1.192l-1.142-.972c-.766.899-.79 2.026-.291 2.904.49.864 1.463 1.46 2.637 1.46v-1.5h-.001Zm11.555 1.5c1.174 0 2.146-.596 2.637-1.46.498-.878.475-2.005-.29-2.904l-1.143.972c.332.39.335.827.128 1.191-.213.377-.677.701-1.332.701v1.5ZM55.02 36.374v-.104h-1.5v.104h1.5Zm3.965 4.517c-.28-2.46-2.104-4.416-4.472-5.227l-.486 1.42c1.917.656 3.264 2.187 3.467 3.976l1.49-.17.001.001Zm-8.505-4.517v-.104h-1.5v.104h1.5Zm-3.974 4.686c.203-1.789 1.55-3.32 3.467-3.977l-.486-1.419c-2.368.81-4.193 2.766-4.472 5.227l1.49.169h.001ZM52 34.75c.84 0 1.52.68 1.52 1.52h1.5A3.02 3.02 0 0 0 52 33.25v1.5Zm0-1.5a3.02 3.02 0 0 0-3.02 3.02h1.5c0-.84.68-1.52 1.52-1.52v-1.5Zm2.298 18.487c-.323.86-1.213 1.513-2.298 1.513v1.5c1.685 0 3.152-1.017 3.702-2.487l-1.404-.526ZM52 53.25c-1.085 0-1.975-.652-2.298-1.513l-1.404.526c.55 1.47 2.017 2.487 3.702 2.487v-1.5Z"
      />
    </g>
    <circle
      cx={58.5}
      cy={37.5}
      r={4.5}
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M40 32h24v24H40z" />
      </clipPath>
    </defs>
  </svg>
)
export default Notification;