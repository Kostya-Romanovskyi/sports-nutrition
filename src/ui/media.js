import { Breakpoints } from "./breakpoints";

// export const media = {
//   mobile: `@media (max-width: ${Breakpoints.SM}px)`,
//   tablet: `@media (max-width: ${Breakpoints.MD}px)`,
//   desktop: `@media (max-width: ${Breakpoints.XL}px)`,
// };

export const media = {
  mobile: `@media screen and (min-width: ${Breakpoints.SM}px)`,
  tablet: `@media screen and (min-width: ${Breakpoints.MD}px)`,
  desktop: `@media screen and (min-width: ${Breakpoints.XL}px)`,
};
