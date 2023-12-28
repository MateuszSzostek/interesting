import styled, { css } from "styled-components";
import { IStyledButton, ButtonVariant } from "./types";
import {
  Colors,
  FontSizes,
  FontWeights,
  FontFamilies,
} from "../../../global-styles";
import { IContentCard } from "../ContentCard/types";
import { Categories } from "../../../global-styles";

const variantStyles = (variant: ButtonVariant = "default") =>
  ({
    default: css`
      border: 1px solid transparent;
    `,
    outlined: css`
      border: 1px solid ${Colors._gray05};
      :hover {
        background-color: ${Colors._gray05};
      }
    `,
  }[variant]);

const cardThemeStyles = (variant: Categories = "science") =>
  ({
    science: css<IContentCard>`
      color: ${Colors._blue01};
    `,
    funny: css<IContentCard>`
      color: ${Colors._yellow01};
    `,
    politics: css<IContentCard>`
      color: ${Colors._red01};
    `,
    music: css<IContentCard>`
      color: ${Colors._lilac01};
    `,
    film: css<IContentCard>`
      color: ${Colors._violet01};
    `,
    sport: css<IContentCard>`
      color: ${Colors._orange01};
    `,
    economy: css<IContentCard>`
      color: ${Colors._sea01};
    `,
    history: css<IContentCard>`
      color: ${Colors._gray05};
    `,
    quotes: css<IContentCard>`
      color: ${Colors._brown01};
    `,
    travels: css<IContentCard>`
      color: ${Colors._brown01};
    `,
  }[variant]);

export const StyledButton = styled.button<IStyledButton>`
  ${({ variant }) => variantStyles(variant)}
  ${({ category }) => cardThemeStyles(category)}

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  // font-family: ${FontFamilies._oswaldRegular};
  font-size: ${FontSizes._px15};
  font-weight: ${FontWeights._regular};

  background-color: transparent;
  border-radius: 3px;
  padding: 3px;
  transition: 0.2s;
  height: 26px;

  :hover {
    cursor: pointer;
  }
`;
