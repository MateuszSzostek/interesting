import styled, { css } from "styled-components";
import { IContentCard, IContentCardWrapper } from "./types";
import { Categories } from "../../../global-styles";
import { Colors, FontSizes } from "../../../global-styles";

const variantStyles = (variant: Categories = "science") =>
  ({
    science: css<IContentCard>`
      border: 2px solid ${Colors._blue01};
    `,
    funny: css<IContentCard>`
      border: 2px solid ${Colors._yellow01};
    `,
    politics: css<IContentCard>`
      border: 2px solid ${Colors._red01};
    `,
    music: css<IContentCard>`
      border: 2px solid ${Colors._lilac01};
    `,
    film: css<IContentCard>`
      border: 2px solid ${Colors._violet01};
    `,
    sport: css<IContentCard>`
      border: 2px solid ${Colors._orange01};
    `,
    economy: css<IContentCard>`
      border: 2px solid ${Colors._sea01};
    `,
    history: css<IContentCard>`
      border: 2px solid ${Colors._gray05};
    `,
    quotes: css<IContentCard>`
      border: 4px solid ${Colors._brown01};
    `,
    travels: css<IContentCard>`
      border: 2px solid ${Colors._brown01};
    `,
  }[variant]);

export const ContentCardImageWrapper = styled.div`
  margin-bottom: 10px;

  > div {
    max-height: 400px;
  }
`;

export const ContentCardWrapper = styled.article<IContentCardWrapper>`
  ${({ category }) => variantStyles(category)}

  box-sizing: border-box;
  background-color: ${Colors._gray09};
  padding: 5px;
  width: 550px;
  margin-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 9px;

  h2 {
    text-align: center;
  }

  p,
  h3 {
    text-align: center;
  }

  p:nth-child(5) {
    margin-top: 20px;
    font-size: ${FontSizes._px15};
    margin-bottom: 7px;
  }

  p {
    font-weight: 700;
  }

  .content-card__buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 50px;

    > button {
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: 580px) {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;

    p,
    h2,
    h3 {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;
