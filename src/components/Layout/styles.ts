import styled from "styled-components";

export const LayoutWrapper = styled.div``;

export const PageBackgroundWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    z-index: -1;
`;

export const BackroundLayer1 = styled.div`
    position: absolute;
    height: 40%;
    width: 30%;
    left: 90%;
    top: 5%;
    background: #00f0ff;
    filter: blur(320px);
    transform: rotate(-88.58deg);
`;

export const BackroundLayer2 = styled.div`
    position: absolute;
    height: 50%;
    width: 40%;
    left: 60%;
    top: 0%;
    background: #0011e0;
    filter: blur(320px);
    transform: rotate(-88.58deg);
`;
export const BackroundLayer3 = styled.div`
    position: absolute;
    height: 60%;
    width: 145%;
    left: -5%;
    top: 30%;
    background: linear-gradient(193.62deg, #ff1fa2 33.87%, #ffc0ff 79.93%);
    filter: blur(250px);
    transform: matrix(0, 1, 1, 0, 0, 0);
`;

export const BackroundLayer4 = styled.div`
    position: absolute;
    height: 70%;
    width: 90%;
    left: 30%;
    top: 35%;
    background: #8349ff;
    filter: blur(320px);
    transform: rotate(-96.74deg);
`;
