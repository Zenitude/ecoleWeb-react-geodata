/* eslint-disable @typescript-eslint/no-explicit-any */

export type FlagProps = {
    datas: any;
    setInfos: React.Dispatch<React.SetStateAction<CountryType>>
}

export type ModalProps = {
    informations: CountryType;
    set: React.Dispatch<React.SetStateAction<CountryType>>
}

type CountryType = {
    name: string;
    languages : string;
    capital: string;
    population: number;
    showModal: boolean;
}