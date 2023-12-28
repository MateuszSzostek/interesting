import React, { useEffect, useState } from "react";
//import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Pager from "../../components/Pager/Pager";
import ContentModule from "../../modules/ContentModule/ContentModule";

const ContentCardsPageTemplate = (props) => {
    const [cards, setCards] = useState(props.pageContext.cards);

    useEffect(() => {
        setCards(props.pageContext.cards);
    }, [props.pageContext.cards]);

    useEffect(() => {
        console.log(props);
    }, [props]);

    return (
        <Layout>
            <ContentModule cards={cards} />
            <Pager pagerData={props.pageContext} />
        </Layout>
    );
};

export default ContentCardsPageTemplate;

/*
export const blog = graphql`
    query currentPageContent($skip: Int!, $limit: Int!) {
        allMarkdownRemark(skip: $skip, limit: $limit) {
            edges {
                node {
                    frontmatter {
                        alts
                        category
                        timestamp
                        images {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        title
                        text
                        subtitle
                        source
                        slug
                        layout
                        date
                        id
                        keywords
                    }
                }
            }
        }
    }
`;
*/
