import React, { useEffect } from "react";
import IContentCard from "./types";
import { ContentCardWrapper, ContentCardImageWrapper } from "./styles";
import Typography from "../../typography/Typography/Typography";
import { GatsbyImage } from "gatsby-plugin-image";
import { BrandBorder, Colors } from "../../../global-styles";
import Button from "../Button/Button";
import CopyIcon from "../../assets/images/vector/copy.svg";
import ShareIcon from "../../assets/images/vector/share.svg";
import { Link } from "gatsby";
import { Categories } from "../../../global-styles";
import "./ContentCard.styles.css";

function getCardColor(category: Categories) {
  switch (category) {
    case "science":
      return Colors._blue01;
    case "funny":
      return Colors._yellow01;
    case "politics":
      return Colors._red01;
    case "music":
      return Colors._lilac01;
    case "film":
      return Colors._violet01;
    case "sport":
      return Colors._orange01;
    case "economy":
      return Colors._sea01;
    case "history":
      return Colors._gray05;
    case "quotes":
      return Colors._brown01;
    case "travels":
      return Colors._brown01;
    default:
      return Colors._blue01;
  }
}

const ContentCard = ({
  id,
  title,
  subtitle,
  text,
  source,
  category,
  slug,
  images,
  alts,
  keywords,
}: IContentCard) => {
  console.log(images);
  useEffect(() => {
    console.log(images);
    console.log(category);
  }, [images]);

  const cardColor = getCardColor(category);

  function handleCopyToClipBoard(e) {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(window.location.host + slug);
    alert("Link copied!");
  }

  function handleShare(e) {
    e.stopPropagation();
    e.preventDefault();
    const data = window.location.host + slug;
    navigator.share(data);
    alert("Link copied!");
  }

  return (
    <Link to={slug}>
      <ContentCardWrapper category={category}>
        <Typography as="h2">{title}</Typography>
        {images[0] !== null &&
          images.map((image, idx) => (
            <ContentCardImageWrapper key={idx}>
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt={alts[idx]}
              />
            </ContentCardImageWrapper>
          ))}
        <Typography as="h3">{subtitle}</Typography>
        <Typography as="p">{text}</Typography>
        <Typography as="p">Source: {source}</Typography>

        <div
          className="content-card__brand-border"
          style={{ backgroundColor: cardColor }}
        />
        <div className="content-card__buttons-wrapper">
          <button
            style={{ color: cardColor }}
            onClick={handleShare}
            type="button"
            className="card-btn"
          >
            <ShareIcon width={24} height={24} />
            share
          </button>
          <button
            style={{ color: cardColor }}
            onClick={handleCopyToClipBoard}
            type="button"
            className="card-btn"
          >
            <CopyIcon width={24} height={24} />
            copy link
          </button>
        </div>
      </ContentCardWrapper>
    </Link>
  );
};

export default ContentCard;
