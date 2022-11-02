import { ProxPremio, DataProxSorteio } from "./styles";
import { HTMLAttributes } from "react";

type Arley = HTMLAttributes<HTMLElement> & {
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
}
export function ProxSorteio({dataProximoConcurso, valorEstimadoProximoConcurso}:Arley){

    return(
        <>
            <DataProxSorteio>Estimativa de prêmio <br/> do próximo concurso <br/>{dataProximoConcurso}</DataProxSorteio>
            <ProxPremio>R${ new Intl.NumberFormat('de-DE').format(valorEstimadoProximoConcurso) }</ProxPremio>
        </>
    )
}

