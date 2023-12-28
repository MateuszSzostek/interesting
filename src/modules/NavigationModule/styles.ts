import styled from "styled-components";
import { flexRowSpaceBetweenHorizontalCenter } from "../../../global-styles";
import { Colors, BreakPoints } from "../../../global-styles";

export const TopNavigationWrapper = styled.div`
  ${flexRowSpaceBetweenHorizontalCenter};

  > a {
    z-index: 105;
  }
`;

export const BottomNavigationWrapper = styled.div``;

export const BottomNavigationContainer = styled.div`
  padding-right: 17px;
  display: flex;
  box-sizing: content-box;
  flex-direction: row;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MobileNavWrapper = styled.div`
  display: none;

  > button {
    z-index: 105;
  }

  @media only screen and (max-width: ${BreakPoints._mobile}) {
    display: flex;
  }
`;

export const MobileMenuWrapper = styled.div<{ isActive: boolean }>`
  z-index: 100;
  position: fixed;
  background-color: black;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isActive }) => (isActive === true ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    position: absolute !important;
  }

  > a {
    z-index: 105;
  }
`;

export const DesktopNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: ${BreakPoints._mobile}) {
    display: none;
  }
`;
