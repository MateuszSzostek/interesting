import React from "react";
import { IIconButton } from "./types";
import { StyledIconButton } from "./styles";
import SVGIcon from "../SVGIcon/SVGIcon";

const IconButton = ({
    Icon,
    callback,
    to,
    callbackParams,
    downloadableContent,
    color,
    type,
    width,
    height,
}: IIconButton) => {
    //const renderDownloadable = downloadableContent
    //    ? downloadableContent
    //    : false;
    return (
        <>
            {typeof type !== "undefined" && (
                <StyledIconButton type={type}>
                    <SVGIcon
                        currentColor={color && color}
                        width={width}
                        height={height}
                        Icon={Icon}
                    />
                </StyledIconButton>
            )}
        </>
    );
};

export default IconButton;
