import React from "react";
import {
  LayoutWrapper,
  BackroundLayer1,
  BackroundLayer2,
  BackroundLayer3,
  BackroundLayer4,
  PageBackgroundWrapper,
} from "./styles";
import NavigationModule from "../../modules/NavigationModule/NavigationModule";
import FooterModule from "../../modules/FooterModule/FooterModule";
import Head from "../Head/Head";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Head
        title=""
        keywords="this awesome test keywords"
        description="this is awesome test meta description"
      />
      <PageBackgroundWrapper>
        <BackroundLayer1 />
      </PageBackgroundWrapper>
      <main>
        <NavigationModule />
        {children}
        <FooterModule />
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
