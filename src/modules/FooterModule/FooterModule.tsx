import React from "react";
import { Link } from "gatsby";
import { FooterWrapper, FooterNavWrapper } from "./styles";
import { BrandBorder } from "../../../global-styles";
import Module from "../../components/Module/Module";
import PageContainer from "../../components/PageContainer/PageContainer";
import Button from "../../components/Button/Button";
import FacebookIcon from "../../assets/images/vector/facebook.svg";
import InstagramIcon from "../../assets/images/vector/instagram.svg";
import { Colors } from "../../../global-styles";
import Typography from "../../typography/Typography/Typography";

const FooterModule = () => {
  return (
    <Module>
      <PageContainer>
        <FooterWrapper>
          <BrandBorder />
          <Link to="/">Interesting</Link>
          <Link to="/o-nas">About Us</Link>
          <Link to="/polityka-prywatności">Privacy Policy</Link>
          <BrandBorder />
          <FooterNavWrapper>
            <div className="footer-nav-wrapper__content">
              <Button
                Icon={InstagramIcon}
                iconColor={Colors._orange02}
                to="/instagram-link"
                iconHeight="36px"
                iconWidth="36px"
              />
              <Button
                Icon={FacebookIcon}
                iconColor={Colors._orange02}
                to="/facebook-link"
                iconHeight="36px"
                iconWidth="36px"
              />
            </div>
            <div>
              <Typography as="h2">Interesting.</Typography>
            </div>
          </FooterNavWrapper>
        </FooterWrapper>
      </PageContainer>
    </Module>
  );
};

export default FooterModule;
