import styled from "styled-components";

export const FlagContainer = styled.article`
    width: 100%;
    max-width: 320px;
    min-width: 260px;
    height: 260px;
    position: relative;
    cursor: pointer;
    box-shadow: 0 0 5px #000;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const TitleContainer = styled.div`
    position: absolute;
    right: 0;
    font-size: 0.8rem;
`;

export const NameCountry = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid black;
    padding: 5px;
    background-color: #f1f1f1;
`;