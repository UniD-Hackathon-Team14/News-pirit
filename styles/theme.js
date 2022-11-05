import { css } from "styled-components";

const colors = {
  white: "#ffffff",
  black: "#191919",
  gray_0: "#F1F1F1",
  gray_1: "#dddddd",
  gray_2: "#b7b7b7",
  gray_3: "#707070",
  gray_4: "#767676",
  gray_5: "#f9f9f9",
  gray_6: "#F5F5F5",
  gray_7: "#e9e9e9",
  gray_700: "#707070",
  blue: "#010E6A",
  blue_0: "#E8EFFB",
  blue_1: "#2D66CB",
  red: "#D94B4B",
  red_1: "#E32F3D",
  navy: "#010E6A",
  navy_1: "#1E3A78",
  yellow: "#FEE500",
  white_0: "#F4F4F4",
};
// how to use : ${({ theme }) => theme.colors.cookieOrange};

const sizes = {
  desktop: 102.4,
  tablet: 76.8,
  mobile: 32,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}rem) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
// how to use : ${({ theme }) => theme.media.phone` mobile ver code comes here `;

const theme = {
  colors,
  media,
};

export default theme;
