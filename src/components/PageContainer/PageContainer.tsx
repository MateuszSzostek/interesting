import React from "react";
import { PageContainerWrapper, PageContent } from "./styles";

const PageContainer = ({ children }) => {
    return (
        <PageContainerWrapper>
            <PageContent>{children}</PageContent>
        </PageContainerWrapper>
    );
};

export default PageContainer;
