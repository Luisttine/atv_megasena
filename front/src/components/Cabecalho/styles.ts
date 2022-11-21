import styled from 'styled-components';

export const WrapperSld = styled.div`
    border-bottom: 1px solid #bbb;
    display: flex;
    padding: 0.4% 0.4% 1%;
`;

export const ResultadoSld = styled.div`
    font-size: 30px;
    color: ${props => props.theme.color};
    font-weight: bold;
`;

export const ConcursoSld = styled.div`
    font-size: 20px;
    color: ${props => props.theme.color};
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.3%;
    margin-left: 1%;
`;