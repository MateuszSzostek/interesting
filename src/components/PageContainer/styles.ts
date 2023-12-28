import styled from "styled-components";
import { BreakPoints } from "../../../global-styles";

export const PageContainerWrapper = styled.div`
    width: ${BreakPoints._wide};

    @media only screen and (max-width: ${BreakPoints._wide}) {
        width: 100%;
    }
`;

export const PageContent = styled.div`
    margin: 0px 16px;
`;
