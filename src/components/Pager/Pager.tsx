import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { StyledPager } from "./styles";
import { IPager } from "./types";
import Module from "../Module/Module";
import PageContainer from "../PageContainer/PageContainer";
import { Link } from "gatsby";
import "./Pager.styles.css";

const Pager = ({ pagerData }: IPager) => {
  const [previousPages, setPreviousPages] = useState<any[]>([]);
  const [nextPages, setNextPages] = useState<any[]>([]);
  const { nextPagePath, previousPagePath, numberOfPages, humanPageNumber } =
    pagerData;

  console.log(pagerData);

  useEffect(() => {
    if (humanPageNumber > 1) {
      let pages: any[] = [];
      for (let i = humanPageNumber; i > 1; i--) {
        if (i > 0) {
          console.log(i);
          pages.push({
            slug: "/page/" + (i - 1 === 1 ? "" : i - 1).toString(),
            pageNumber: i - 1,
          });
          if (pages.length > 4) {
            break;
          }
        } else break;
      }
      setPreviousPages(pages.reverse());
    }
    if (humanPageNumber < numberOfPages) {
      let pages: any[] = [];
      for (let i = humanPageNumber; i < numberOfPages; i++) {
        pages.push({
          slug: "/page/" + (i + 1).toString(),
          pageNumber: i + 1,
        });
        if (pages.length > 4) {
          break;
        }
      }
      setNextPages(pages);
    }
  }, []);

  return (
    <Module>
      <PageContainer>
        <StyledPager>
          <div className="pager__button-container">
            {previousPagePath !== "" && (
              <Link to={previousPagePath} className="pagination-btn">
                PREVIOUS
              </Link>
            )}
            {previousPages.map((btn, idx) => (
              <Link key={idx} to={btn.slug} className="pagination-btn__number">
                {btn.pageNumber}
              </Link>
            ))}
            <span className="pager__page-active">{humanPageNumber}</span>
            {nextPages.map((btn, idx) => (
              <Link key={idx} to={btn.slug} className="pagination-btn__number">
                {btn.pageNumber}
              </Link>
            ))}
            {nextPagePath !== "" && (
              <Link to={nextPagePath} className="pagination-btn">
                NEXT
              </Link>
            )}
          </div>
        </StyledPager>
      </PageContainer>
    </Module>
  );
};

export default Pager;
