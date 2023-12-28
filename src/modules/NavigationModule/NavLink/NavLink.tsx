import React from "react";
import INavLink from "./types";
import { StyledLink } from "./styles";

const NavLink = ({ name, slug, hovercolor }: INavLink) => {
    return (
        <StyledLink to={slug} hovercolor={hovercolor}>
            {name}
        </StyledLink>
    );
};

export default NavLink;
