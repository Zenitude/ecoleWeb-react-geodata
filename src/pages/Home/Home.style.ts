import styled, { createGlobalStyle } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle: any = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        z-index: 1;
    }

    html, body, #root { 
        width: 100%;
        height: 100%;
    }
`;

export const HomeContainer = styled.main` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
`;

export const FlagsContainer = styled.div`
    width: 80%;
    max-width: 1240px;
    min-width: 260px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    article {
        width: 33%;
        max-width: 320px;
    }
`;
