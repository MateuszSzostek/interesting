import * as React from "react";
import Layout from "../components/Layout/Layout";
import ContentModule from "../modules/ContentModule/ContentModule";
import { useStaticQuery, graphql } from "gatsby";
import Pager from "../components/Pager/Pager";

const indexPageContext = {
  previousPagePath: "",
  nextPagePath: "/page/2",
  numberOfPages: 10,
  humanPageNumber: 1,
};

const IndexPage = (props) => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      allMarkdownRemark(
        limit: 10
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
              keywords
              slug
              source
              subtitle
              text
              title
            }
          }
        }
      }
    }
  `);

  // console.log(data);
  console.log(props);

  return (
    <Layout>
      <ContentModule cards={data?.allMarkdownRemark?.edges} />
      <Pager pagerData={indexPageContext} />
    </Layout>
  );
};

export default IndexPage;
