import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Acumulado } from "../components/Acumulado/index";
import { Cabecalho } from "../components/Cabecalho";
import { Local } from "../components/Local/index";
import { NumeroSorteado } from "../components/NumerosSorte/index";
import { ProxSorteio } from "../components/ProxSorteio";
import services from "../services";
import { light, dark } from "../styles/theme";
import { Props } from "../types";
import { WrapperSld } from "./styles";

export default function Principal() {
    const [concurso, setConcurso] = useState({} as Props);
    const [tema, setTema] = useState(light)

    useEffect(
        function(){
        (
            async function () {
                const numero = Math.floor(Math.random() * 2533);
                const concurso: Props = await services.get(numero);
                console.log(concurso)
                setConcurso(concurso);
                setTema(parseInt(concurso.listaDezenas[0])%2 === 0 ? light:dark)
            })()
        },
        []
    );
    return (
        <ThemeProvider theme={tema}>
            <WrapperSld>
                <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao}/>
                {concurso.acumulado &&
                    <Acumulado />
                }
                <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio} />
                {concurso.listaDezenas && <NumeroSorteado numeroSorteio={concurso.listaDezenas}/>}
                <ProxSorteio dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso}/>
            </WrapperSld>
        </ThemeProvider>
    );
}