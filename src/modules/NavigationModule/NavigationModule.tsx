import React, { useState } from "react";
import Module from "../../components/Module/Module";
import PageContainer from "../../components/PageContainer/PageContainer";
import {
    TopNavigationWrapper,
    BottomNavigationWrapper,
    BottomNavigationContainer,
    MobileNavWrapper,
    DesktopNavWrapper,
    MobileMenuWrapper,
} from "./styles";
import { BrandBorder } from "../../../global-styles";
import Typography from "../../typography/Typography/Typography";
import Button from "../../components/Button/Button";
import MobileMenuIcon from "../../assets/images/vector/mobile-menu.svg";
import { Colors } from "../../../global-styles";
import NavLink from "./NavLink/NavLink";
import { navLinksData, generalLinksData } from "./data";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const NavigationModule = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

    const mobileImageBackground = useStaticQuery(graphql`
        query MobileImageBackgroundQuery {
            file(name: { eq: "mobile-menu-background" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `);

    const handleOnMobileMenuButtonClick = () => {
        setIsMobileMenuActive(!isMobileMenuActive);
    };

    console.log(mobileImageBackground);
    return (
        <Module>
            <PageContainer>
                <TopNavigationWrapper>
                    <Link to="/">
                        <Typography as="h1">Interesting.</Typography>
                    </Link>
                    <MobileNavWrapper>
                        <Button
                            type="button"
                            iconColor={Colors._orange02}
                            Icon={MobileMenuIcon}
                            ariaLabel="mobile menu button"
                            iconHeight="32px"
                            iconWidth="32px"
                            callback={handleOnMobileMenuButtonClick}
                        />
                        <MobileMenuWrapper isActive={isMobileMenuActive}>
                            {generalLinksData.map((link) => (
                                <NavLink key={link.id} {...link} />
                            ))}
                            <GatsbyImage
                                image={
                                    mobileImageBackground.file.childImageSharp
                                        .gatsbyImageData
                                }
                                alt="mobile menu background"
                            />
                        </MobileMenuWrapper>
                    </MobileNavWrapper>
                    <DesktopNavWrapper>
                        {generalLinksData.map((link) => (
                            <NavLink key={link.id} {...link} />
                        ))}
                    </DesktopNavWrapper>
                </TopNavigationWrapper>
                <BottomNavigationWrapper>
                    <BottomNavigationContainer>
                        {navLinksData.map((link) => (
                            <NavLink key={link.id} {...link} />
                        ))}
                    </BottomNavigationContainer>
                </BottomNavigationWrapper>
                <BrandBorder />
            </PageContainer>
        </Module>
    );
};

export default NavigationModule;
