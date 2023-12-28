import React, { useEffect } from "react";
import IContentModule from "./types";
import { ContentModuleWrapper } from "./styles";
import ContentCard from "../../components/ContentCard/ContentCard";
import PageContainer from "../../components/PageContainer/PageContainer";
import Module from "../../components/Module/Module";

const ContentModule = ({ cards }: IContentModule) => {
    return (
        <Module>
            <PageContainer>
                <ContentModuleWrapper>
                    {cards.map(({ node: { frontmatter } }) => (
                        <ContentCard key={frontmatter.id} {...frontmatter} />
                    ))}
                </ContentModuleWrapper>
            </PageContainer>
        </Module>
    );
};

export default ContentModule;
