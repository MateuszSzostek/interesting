import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import ContentModule from "../../modules/ContentModule/ContentModule";
import Head from "../../components/Head/Head";

const ContentCardsPageTemplate = ({ pageContext }) => {
    const [card, setCard] = useState(pageContext.card);

    useEffect(() => {
        setCard(pageContext.card);
    }, [card]);

    useEffect(() => {
        console.log(card);
    }, [card]);

    return (
        <Layout>
            <Head
                title={card.node.frontmatter.title}
                keywords={card.node.frontmatter.keywords}
                description={card.node.frontmatter.text}
            />
            <ContentModule cards={[card]} />
        </Layout>
    );
};

export default ContentCardsPageTemplate;
