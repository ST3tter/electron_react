import { css } from "styled-components";

/*
MEDIA QUERY MANAGER
0 - 600px:      Phone
600 - 900px:    Tablet portrait
900 - 1200px:   Tablet landscape
[1200 - 1800] is where our normal styles apply
1800px + :      Big desktop
*/
// const breakpoints = {
//   phone: "599px",
//   tabPort: "899px",
//   tabLand: "1199px",
//   bigDesktop: "1800px",
// };

export enum Breakpoints {
  phone = "599px",
  tabPort = "899px",
  tabLand = "1199px",
  bigDesktop = "1800px",
}

export const respondMax = (breakpoint: Breakpoints) => {
  return (style: TemplateStringsArray, ...params: any[]) => css`
    @media (max-width: ${breakpoint}) {
      ${css(style, ...params)};
    }
  `;
};

export const respondMin = (breakpoint: Breakpoints) => {
  return (style: TemplateStringsArray, ...params: any[]) => css`
    @media (min-width: ${breakpoint}) {
      ${css(style, ...params)};
    }
  `;
};
