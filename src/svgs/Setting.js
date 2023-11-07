import * as React from "react"
const Setting = ({height , width , color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    fill="none"
  >
    <path
      fill={color}
      d="m5.366 20.762.555-.505-.555.505Zm1.134.764-.375.65.375-.65Zm-1.647-2.265.748.059-.748-.059Zm.428-1.299-.694-.284.694.284Zm-.203-1.948-.649.375v.002l.65-.377Zm-.017-.03-.65.375.001.001.65-.375Zm-1.584-1.146.101-.743-.1.743Zm-1.339-.279-.323.677.323-.677Zm-1.043-1.195.715-.228-.715.228Zm0-2.728.715.229-.715-.23ZM2.138 9.44l-.323-.677.323.677Zm1.34-.279.1.743-.1-.743ZM5.06 8.015l-.649-.375v.001l.65.374Zm.017-.029L4.43 7.61l-.001.002.65.375Zm.203-1.948.694-.284-.005-.012-.69.296Zm0 0-.705.256.016.04.689-.296Zm0 0 .705-.256a.732.732 0 0 0-.01-.028l-.695.284Zm-.428-1.3L5.6 4.68l-.748.059Zm.513-1.5-.555-.504.555.505ZM6.5 2.475l.375.65a.753.753 0 0 0 .041-.026L6.5 2.474Zm0 0-.362-.657a.752.752 0 0 0-.054.033l.416.624Zm0 0 .362.656a.694.694 0 0 0 .013-.007l-.375-.65Zm1.23-.6.158.733-.159-.733Zm1.555.306.425-.618-.425.618Zm.911 1.02.593-.46-.593.46Zm1.788.8-.001-.75V4ZM12 4v-.75V4Zm.016 0 .002-.75h-.001V4Zm1.788-.8.593.46-.593-.46Zm.91-1.02-.424-.619.425.619Zm1.557-.306-.16.733.16-.733Zm1.229.6-.375.65.375-.65Zm1.134.764.555-.504-.555.504Zm.513 1.5L18.4 4.68l.748.059Zm-.428 1.3-.694-.284a.745.745 0 0 0-.023.063l.717.22Zm0 0 .694.284a.746.746 0 0 0 .023-.064l-.717-.22Zm.203 1.948.649-.375v-.002l-.65.377Zm.017.03.65-.375-.001-.001-.65.375Zm1.584 1.146-.101.743.1-.743Zm1.339.28-.323.676.323-.677Zm1.043 1.194-.715.229.715-.23Zm0 2.728-.715-.228.715.228Zm-1.043 1.195.323.677-.323-.677Zm-1.34.279-.1-.743.1.743Zm-1.583 1.147.649.375v-.001l-.65-.374Zm-.017.029.648.377.001-.002-.65-.375Zm-.203 1.948.694-.284-.694.284Zm.428 1.3.748-.06-.748.06Zm-.513 1.5.555.504-.555-.504Zm-1.134.764.375.65-.375-.65Zm-1.23.6-.158-.733.159.733Zm-1.555-.306.424-.618-.424.618Zm-.911-1.02.593-.46-.593.46Zm-1.788-.8v.75h.002l-.002-.75ZM12 20v.75V20Zm-.016 0-.002.75h.001V20Zm-1.788.8-.593-.46.593.46Zm-.91 1.02.424.618-.425-.618Zm-1.557.306.16-.733-.16.733Zm-2.918-.86c.308.34.746.582 1.314.91l.75-1.3c-.664-.382-.842-.495-.954-.619l-1.11 1.009Zm-.706-2.063a2.75 2.75 0 0 0 .706 2.063l1.11-1.009a1.25 1.25 0 0 1-.32-.937l-1.496-.117Zm.482-1.525c-.249.608-.446 1.067-.482 1.525l1.496.117c.013-.166.084-.365.374-1.074l-1.388-.568Zm-.157-1.287c.258.444.309.916.157 1.287l1.388.568c.368-.9.184-1.865-.248-2.609l-1.297.754Zm-.018-.03.017.028 1.298-.75-.016-.03-1.299.751Zm-1.036-.78c.397.054.78.334 1.035.778l1.3-.748c-.428-.745-1.17-1.385-2.133-1.516l-.202 1.486Zm-1.561-.345c.414.197.91.256 1.56.345l.203-1.486c-.759-.104-.967-.141-1.117-.213l-.646 1.354ZM.38 13.593a2.75 2.75 0 0 0 1.434 1.643l.646-1.354a1.25 1.25 0 0 1-.651-.746l-1.429.457ZM.25 12c0 .656-.009 1.156.131 1.593l1.429-.457c-.051-.159-.06-.37-.06-1.136H.25Zm.131-1.593C.241 10.844.25 11.344.25 12h1.5c0-.766.009-.977.06-1.136L.38 10.407Zm1.434-1.643A2.75 2.75 0 0 0 .38 10.407l1.429.457a1.25 1.25 0 0 1 .651-.746l-.646-1.354Zm1.56-.345c-.65.089-1.146.148-1.56.345l.646 1.354c.15-.072.358-.11 1.117-.213L3.376 8.42Zm1.036-.778c-.255.445-.638.724-1.035.778l.202 1.486c.963-.13 1.705-.77 2.134-1.516l-1.3-.748Zm.018-.03-.017.029 1.299.75.016-.028L4.43 7.61Zm.158-1.29c.152.372.1.844-.157 1.288l1.297.754c.432-.744.616-1.708.248-2.609l-1.388.568Zm.005.012 1.378-.59-1.378.59Zm-.016-.039 1.41-.512-1.41.512Zm-.47-1.497c.035.458.232.917.48 1.525l1.39-.568c-.29-.71-.362-.908-.375-1.074l-1.496.117Zm.705-2.063a2.75 2.75 0 0 0-.706 2.063l1.496-.117a1.25 1.25 0 0 1 .32-.937l-1.11-1.009Zm1.314-.91c-.568.328-1.006.57-1.314.91l1.11 1.009c.112-.123.29-.236.954-.62l-.75-1.299Zm-.041.026.832 1.248-.832-1.248Zm.054-.033.724 1.313-.724-1.313Zm1.432-.676c-.448.097-.877.355-1.445.683l.75 1.3c.664-.384.85-.482 1.013-.517L7.57 1.141Zm2.14.42a2.75 2.75 0 0 0-2.14-.42l.318 1.466a1.25 1.25 0 0 1 .973.191l.849-1.236Zm1.079 1.18c-.402-.519-.701-.92-1.08-1.18l-.848 1.237c.137.094.273.256.742.861l1.186-.918Zm1.193.509c-.512.001-.947-.191-1.193-.51l-1.186.92c.595.768 1.52 1.092 2.382 1.09l-.003-1.5Zm.017 0h-.016l.001 1.5h.017l-.002-1.5Zm.018 0H12l-.002 1.5h.016l.002-1.5Zm1.194-.51c-.246.318-.68.511-1.194.51l-.002 1.5c.86.002 1.786-.322 2.382-1.09l-1.186-.92Zm1.08-1.179c-.379.26-.678.661-1.08 1.18l1.186.918c.47-.605.605-.767.742-.86L14.29 1.56Zm2.139-.42a2.75 2.75 0 0 0-2.14.42l.85 1.237a1.25 1.25 0 0 1 .972-.191l.318-1.466Zm1.445.683c-.568-.328-.997-.586-1.445-.683l-.318 1.466c.162.035.35.133 1.013.516l.75-1.299Zm1.314.91c-.308-.34-.746-.582-1.314-.91l-.75 1.3c.664.382.842.495.954.619l1.11-1.009Zm.706 2.063a2.75 2.75 0 0 0-.706-2.063l-1.11 1.009c.231.255.347.594.32.937l1.496.117Zm-.482 1.525c.248-.608.446-1.067.482-1.525l-1.496-.117c-.013.166-.084.365-.374 1.074l1.388.568Zm.023-.064-1.434-.44 1.434.44Zm.134 1.351c-.258-.444-.309-.916-.157-1.287l-1.388-.568c-.368.9-.184 1.865.248 2.61l1.297-.755Zm.018.03-.017-.028-1.299.75.017.03 1.299-.751Zm1.036.78c-.397-.054-.78-.333-1.035-.778l-1.3.748c.428.745 1.17 1.385 2.133 1.516l.202-1.486Zm1.561.345c-.414-.197-.91-.256-1.56-.345l-.203 1.486c.759.104.967.141 1.117.213l.646-1.354Zm1.434 1.643a2.75 2.75 0 0 0-1.434-1.643l-.646 1.354c.31.148.546.418.651.746l1.429-.457ZM23.75 12c0-.656.009-1.156-.131-1.593l-1.429.457c.051.159.06.37.06 1.136h1.5Zm-.131 1.593c.14-.437.131-.937.131-1.593h-1.5c0 .766-.009.977-.06 1.136l1.429.457Zm-1.434 1.643a2.75 2.75 0 0 0 1.434-1.643l-1.429-.457a1.25 1.25 0 0 1-.651.746l.646 1.354Zm-1.56.345c.65-.089 1.146-.147 1.56-.345l-.646-1.354c-.15.072-.358.11-1.117.213l.202 1.486Zm-1.037.778c.256-.445.64-.724 1.036-.778l-.202-1.486c-.963.131-1.705.77-2.134 1.516l1.3.748Zm-.017.03.017-.029-1.299-.75-.017.028 1.299.751Zm-.158 1.29c-.152-.372-.1-.844.157-1.288l-1.297-.754c-.432.744-.616 1.708-.248 2.61l1.388-.569Zm.482 1.524c-.036-.457-.233-.917-.482-1.524l-1.388.567c.29.71.361.908.374 1.074l1.496-.117Zm-.706 2.063a2.75 2.75 0 0 0 .706-2.063l-1.496.117a1.25 1.25 0 0 1-.32.938l1.11 1.008Zm-1.314.91c.568-.328 1.006-.57 1.314-.91l-1.11-1.008c-.112.123-.29.236-.954.619l.75 1.299Zm-1.445.683c.448-.097.877-.355 1.445-.683l-.75-1.3c-.664.384-.85.482-1.013.517l.318 1.466Zm-2.14-.42a2.75 2.75 0 0 0 2.14.42l-.318-1.466a1.25 1.25 0 0 1-.973-.191l-.849 1.237Zm-1.079-1.18c.402.519.701.92 1.08 1.18l.848-1.237c-.137-.094-.273-.256-.742-.861l-1.186.918Zm-1.194-.509c.513-.001.948.192 1.194.51l1.186-.92c-.596-.768-1.521-1.092-2.382-1.09l.002 1.5Zm-.016 0h.016l-.002-1.5H12l.002 1.5Zm-.018 0h.016l.002-1.5h-.017l-.001 1.5Zm-1.194.51c.246-.319.68-.511 1.193-.51l.003-1.5c-.861-.002-1.787.322-2.382 1.09l1.186.92Zm-1.08 1.178c.379-.26.678-.66 1.08-1.179l-1.186-.918c-.47.605-.605.767-.742.86l.849 1.237Zm-2.139.42a2.75 2.75 0 0 0 2.14-.42l-.85-1.236a1.25 1.25 0 0 1-.972.19L7.57 22.86Zm-1.445-.682c.568.328.997.586 1.445.683l.318-1.466c-.162-.035-.35-.133-1.013-.516l-.75 1.299ZM14.25 12A2.25 2.25 0 0 1 12 14.25v1.5A3.75 3.75 0 0 0 15.75 12h-1.5ZM12 9.75A2.25 2.25 0 0 1 14.25 12h1.5A3.75 3.75 0 0 0 12 8.25v1.5ZM9.75 12A2.25 2.25 0 0 1 12 9.75v-1.5A3.75 3.75 0 0 0 8.25 12h1.5ZM12 14.25A2.25 2.25 0 0 1 9.75 12h-1.5A3.75 3.75 0 0 0 12 15.75v-1.5Z"
    />
  </svg>
)
export default Setting;