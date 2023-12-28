import { paginate } from "gatsby-awesome-pagination";
const path = require("path");

const CATEGORIES = [
    "science",
    "funny",
    "politics",
    "film",
    "music",
    "sport",
    "economy",
    "history",
    "quotes",
    "travels",
];

const paginateCategory = (
    category,
    createPage,
    content,
    cardsPerPage,
    template
) => {
    const filteredContent = [];

    for (let i = 0; i < content.length; i++) {
        if (content[i].node.frontmatter.category === category) {
            filteredContent.push(content[i]);
        }
    }

    paginate({
        createPage,
        items: filteredContent,
        itemsPerPage: cardsPerPage,
        pathPrefix: "/" + category + "/",
        component: template,
        context: {
            cards: filteredContent,
        },
    });
};

module.exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const contentCardTemplate = path.resolve(
        "./src/templates/ContentCardTemplate/ContentCardTemplate.tsx"
    );
    const contentCardsPageTemplate = path.resolve(
        "./src/templates/ContentCardsPageTemplate/ContentCardsPageTemplate.tsx"
    );

    const allContent = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: frontmatter___timestamp, order: ASC }
                ) {
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
        `
    );

    const content = allContent.data.allMarkdownRemark.edges;
    const cardsPerPage = 10;

    paginate({
        createPage,
        items: content,
        itemsPerPage: cardsPerPage,
        pathPrefix: "/page",
        component: contentCardsPageTemplate,
        context: {
            cards: content,
        },
    });

    CATEGORIES.map((category) => {
        paginateCategory(
            category,
            createPage,
            content,
            cardsPerPage,
            contentCardsPageTemplate
        );
    });

    content.forEach((card) => {
        createPage({
            path: "/" + card.node.frontmatter.slug,
            component: contentCardTemplate,
            context: {
                card,
                pagePath: card.node.frontmatter.slug,
            },
        });
    });
};
