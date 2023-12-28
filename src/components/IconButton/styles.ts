import styled, { css } from "styled-components";
import { flexColumnVecticalCenterHorizontalCenter } from "../../../global-styles";
import { IStyledIconButton, IconButtonVariant } from "./types";

const variantStyles = (variant: IconButtonVariant = "default") =>
    ({
        default: css<IStyledIconButton>``,
    }[variant]);

export const StyledIconButton = styled.button<IStyledIconButton>`
    ${({ variant }) => variantStyles(variant)}
    ${flexColumnVecticalCenterHorizontalCenter};
    background-color: transparent;
    border: none;
    transition: 0.2s;
    &:hover {
        cursor: pointer;
    }
`;
