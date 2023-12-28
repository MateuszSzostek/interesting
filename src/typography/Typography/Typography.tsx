import React, { PropsWithChildren } from "react";
import { ITypography } from "./types";
import { StyledTypography } from "./styles";

const Typography = ({ children, as }: PropsWithChildren<ITypography>) => {
    return <StyledTypography as={as}>{children}</StyledTypography>;
};

export default Typography;
