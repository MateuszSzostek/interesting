import React from "react";
import { StyledSVGIcon } from "./styles";
import { ISVGIcon } from "./types";

const SVGIcon = ({ width, height, Icon, currentColor }: ISVGIcon) => {
    return (
        <StyledSVGIcon
            width={width}
            height={height}
            currentColor={currentColor ? currentColor : "#000000"}
            fill={currentColor ? currentColor : "#000000"}
            stroke={currentColor ? currentColor : "#000000"}
            viewBox={`0 0 ${parseInt(width)} ${parseInt(height)}`}
        >
            <Icon />
        </StyledSVGIcon>
    );
};

export default SVGIcon;
