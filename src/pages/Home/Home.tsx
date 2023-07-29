import { useState, useEffect } from "react";
import { HomeContainer, GlobalStyle, FlagsContainer } from "./Home.style";
import { StyleSheetManager } from "styled-components";
import Flag from "../../components/Flag/Flag";
import Modal from "../../components/Modal/Modal";

export default function Home () {
    const [ geoData, setGeoData ] = useState({});
    const [ infosModal, setInfosModal ] = useState({
        name: '',
        languages: '',
        capital: '',
        population: 0,
        showModal: false
    });

    useEffect(() => {
        fetchApi('https://restcountries.com/v3.1/region/europe');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchApi = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setGeoData(data);
            console.log(geoData);
        } catch(error) {
            console.error(error);
        }
    }

    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
            <GlobalStyle />
            <HomeContainer>
                <h1>Europe Countries Data</h1>
                <p>Click on a card to reaveal a country's information.</p>
                <FlagsContainer className="flags">
                    {
                        Array.isArray(geoData) && (
                            geoData.map((data, index) => (
                                <Flag key={index} datas={data} setInfos={setInfosModal} />
                            ))
                        )
                    }
                </FlagsContainer>
                <Modal informations={infosModal} set={setInfosModal} />
            </HomeContainer>
        </StyleSheetManager>
    )
}