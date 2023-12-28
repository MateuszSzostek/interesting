import React from "react";
import { Helmet } from "react-helmet";
import { IHead } from "./types";

const Head = ({ title, keywords, description }: IHead) => {
    return (
        <Helmet defer={false}>
            <meta charSet="utf-8" />
            <title>Interesting {title ? " - " + title : ""}</title>
            <link
                rel="canonical"
                href="https://interesting--front-end.pages.dev/"
            />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <html lang="pl" />
        </Helmet>
    );
};

export default Head;
