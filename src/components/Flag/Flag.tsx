/* eslint-disable @typescript-eslint/no-unused-vars */
import { FlagContainer, TitleContainer, NameCountry } from "./Flag.style"
import { FlagProps } from "../../utils/types/types";

export default function Flag({datas, setInfos} : FlagProps) {
    const { capital, flags, languages, name, population } = datas;
    const getIndex = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        const langs: string[] = [];
        for(const lang in languages) {
            langs.push(languages[lang]);
        }         
        setInfos({
            name: name.common,
            languages: langs.join(', '),
            capital : capital[0],
            population: population.toLocaleString(),
            showModal: true
        });
    }

    return (
        <>
            <FlagContainer onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => getIndex(e)} >
                    <img src={flags.svg} alt={flags.alt} />
                    <TitleContainer>
                        <NameCountry>{name.common}</NameCountry>
                    </TitleContainer>
            </FlagContainer>
        </>
  )
}
