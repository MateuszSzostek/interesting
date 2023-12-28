import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;

    a {
        margin: 2px 0;
    }

    div:nth-child(1) {
        margin-bottom: 8px;
    }
    div:nth-child(5) {
        margin-top: 8px;
    }
`;

export const FooterNavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
        padding: 0px;
        margin-top: 16px;
        margin-right: 12px;
    }

    .footer-nav-wrapper__content {
        display: flex;
        flex-direction: row;
    }
`;
