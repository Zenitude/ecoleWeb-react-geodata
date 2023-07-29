import { useEffect } from "react";
import { ModalContainer, CloseModal } from "./Modal.style";
import { ModalProps } from "../../utils/types/types";

export default function Modal({informations, set}: ModalProps) {

    const closeModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        set((prevInfos) => ({...prevInfos, showModal: false}));
    }
    console.log(informations);

    useEffect(() => {
        const dialog = document.querySelector('dialog') as HTMLDialogElement;
        if(dialog) {
            if(informations.showModal) {
                dialog.showModal();
            } else {
                dialog.close();
            }
        }
    }, [informations.showModal]);

    return (
        <ModalContainer>
            <CloseModal onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => closeModal(e)}>X</CloseModal>
            <h3>{informations.name}'s informations</h3>
            <p><strong>Language(s)</strong> : {informations.languages}</p>
            <p><strong>Capital</strong> : {informations.capital}</p>
            <p><strong>Population</strong> : {informations.population}</p>
        </ModalContainer>
    )
}
