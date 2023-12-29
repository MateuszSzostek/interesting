import styled, { createGlobalStyle, css } from "styled-components";

const flexColumnVecticalCenterHorizontalCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const flexRowSpaceBetweenHorizontalCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

type Categories =
  | "science"
  | "funny"
  | "politics"
  | "music"
  | "film"
  | "sport"
  | "economy"
  | "history"
  | "quotes"
  | "travels";

enum Colors {
  _gray00 = "#ffffff",
  _gray05 = "#999999",
  _gray09 = "#111111",
  _gray10 = "#000000",
  _blue01 = "#0099ff",
  _blue02 = "#0011E0",
  _yellow01 = "#e6e600",
  _red01 = "#cc2900",
  _lilac01 = "#cc00cc",
  _violet01 = "#6600cc",
  _violet02 = "#8349FF",
  _orange01 = "#e67300",
  _orange02 = "#FFB458",
  _sea01 = "#00b3b3",
  _brown01 = "#993300",
  _aqua01 = "#00F0FF",
}

interface IColors {
  gray00: Colors._gray00;
  gray05: Colors._gray05;
  gray10: Colors._gray10;
  blue01: Colors._blue01;
  blue02: Colors._blue02;
  yellow01: Colors._yellow01;
  red01: Colors._red01;
  lilac01: Colors._lilac01;
  violet01: Colors._violet01;
  violet02: Colors._violet02;
  orange01: Colors._orange01;
  orange02: Colors._orange02;
  sea01: Colors._sea01;
  brown01: Colors._brown01;
  aqua01: Colors._aqua01;
}

enum FontSizes {
  _px12 = "0.67rem",
  _px13 = "0.72rem",
  _px14 = "0.78rem",
  _px15 = "0.83rem",
  _px16 = "0.92rem",
  _px18 = "1.00rem",
  _px30 = "1.65rem",
}

interface IFontSizes {
  px12: FontSizes._px12;
  px13: FontSizes._px13;
  px14: FontSizes._px14;
  px15: FontSizes._px15;
  px16: FontSizes._px16;
  px18: FontSizes._px18;
  px30: FontSizes._px30;
}

enum FontWeights {
  _light = "400",
  _regular = "500",
}

interface IFontWeights {
  light: FontWeights._light;
  regular: FontWeights._regular;
}

enum FontFamilies {
  _oswaldLight = "Oswald-Light",
  _oswaldRegular = "Oswald-Regular",
}

interface IFontFamilies {
  oswaldLight: FontFamilies._oswaldLight;
  oswaldRegular: FontFamilies._oswaldRegular;
}

enum Shadows {}
//  _shadow = "0px 1px 2px rgba(31, 41, 55, 0.08), 0px 1px 3px rgba(31, 41, 55, 0.12)",

interface IShadows {
  //   shadow = Shadows._shadow;
}

enum Gradients {
  _gradient01 = "",
}

enum BreakPoints {
  _navigation = "1440px",
  _wide = "710px",
  _mobile = "500px",
}

interface IBreakPoints {
  navigation: BreakPoints._navigation;
  wide: BreakPoints._wide;
  mobile: BreakPoints._mobile;
}

export const BrandBorder = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${Colors._orange02};
`;

const GlobalStyles = createGlobalStyle`
    html,body{
        margin: 0;
        padding: 0;
        font-size: 18px;
    }
    a {
        text-decoration: none;
        font-size: ${FontSizes._px16};
        color: ${Colors._gray00};
        font-weight: ${FontWeights._light};
       // font-family: ${FontFamilies._oswaldLight} ;
    }
    h1{
        color: ${Colors._gray00};
        font-size: ${FontSizes._px30};
    }
    h2 {
        color: ${Colors._gray00};
        font-size: ${FontSizes._px18};
    }
    h3 {
       color: ${Colors._gray00};
        font-size: ${FontSizes._px16};
    }
    p {
       color: ${Colors._gray00};
        font-size: ${FontSizes._px14};
    }
`;

export default GlobalStyles;
export {
  Categories,
  Colors,
  IColors,
  FontSizes,
  IFontSizes,
  FontWeights,
  IFontWeights,
  FontFamilies,
  IFontFamilies,
  Shadows,
  IShadows,
  BreakPoints,
  IBreakPoints,
  flexColumnVecticalCenterHorizontalCenter,
  flexRowSpaceBetweenHorizontalCenter,
};
