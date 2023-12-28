import styled from "styled-components";
import { Link } from "gatsby";
import { IStyledLink } from "./types";

export const StyledLink = styled(Link)<IStyledLink>`
  margin-right: 10px;
  transition: 0.3s;
  padding: 4px;

  &:hover {
    color: ${({ hovercolor }) => hovercolor};
  }
`;
