import styled, { keyframes } from "styled-components";
import { animated } from "react-spring";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// // export const fadeOut = keyframes`
// //   from {
// //     opacity: 1;
// //     transform: translateX(0);
// //   }
// //   to {
// //     opacity: 0;
// //     transform: translateX(-100%);
// //   }
// // `;

// export const fadeOut = keyframes.attrs((props: any) => ({
//   transformValue: props.transformValue || "-100%",
// }))`
//     from {
//       opacity: 1;
//       transform: translateX(${(props: any) => props.transformValue});
//     }
//     to {
//       opacity: 0;
//       transform: translateX(-100%);
//     }
//   `;

// export const CardSlider = styled.div`
//   display: flex;
//   transition: transform 0.3s ease-in-out;
//   width: 100%;
// `;

// export const CardItem = styled(animated.div)`
//   flex: 0 0 31%;
//   margin-right: 0;
//   transition: transform 0.3s ease-in-out;
// `;

// export const fadeInAnimation = styled.div`
//   animation: ${fadeIn} 300ms ease-in-out;
// `;

// export const fadeOutAnimation = styled.div`
//   animation: ${fadeOut} 300ms ease-in-out;
// `;
