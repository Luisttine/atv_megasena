import { Div, NumeroSorteio } from "./styles";
import { HTMLAttributes } from "react";

type Arley = HTMLAttributes<HTMLElement> & {
    numeroSorteio: string [],
}
export function NumeroSorteado({numeroSorteio}:Arley){



    return(
        <>
        {numeroSorteio.map((n) => (
            <Div><NumeroSorteio key={n}>{n}</NumeroSorteio></Div>
        ))}        
        </>
    )
}

