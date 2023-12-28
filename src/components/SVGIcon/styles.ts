import styled from "styled-components";
import { IStyledSVGIcon } from "./types";

export const StyledSVGIcon = styled.svg<IStyledSVGIcon>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    color: ${({ currentColor }) => currentColor};
    stroke: none;
`;
