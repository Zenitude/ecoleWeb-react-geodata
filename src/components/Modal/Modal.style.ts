import styled from "styled-components";

export const ModalContainer = styled.dialog`
    margin: auto;
    padding: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;

    &::backdrop {
        background: rgba(0,0,0,0.8);
    }
`;

export const CloseModal = styled.button`
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 0.8rem;
`;