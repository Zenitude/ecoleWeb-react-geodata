import styled from "styled-components";

export const FlagContainer = styled.article`
    width: 33%;
    max-width: 230px;
    
    height: 140px;
    position: relative;
    cursor: pointer;
    box-shadow: 0 0 5px #000;
    transition: transform 0.5s ease-in-out;

    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: translateY(-10px);
    }
`;

export const TitleContainer = styled.div`
    position: absolute;
    right: 0;
    font-size: 0.6rem;
`;

export const NameCountry = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid black;
    padding: 5px;
    background-color: #f1f1f1;
    color: #000;
`;