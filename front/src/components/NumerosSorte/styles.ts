import styled from 'styled-components';

export const NumeroSorteio = styled.div`
    font-size: 25px;
    color: ${props => props.theme.text};
    font-weight: bold;
    background-color: ${props => props.theme.ball};
    border-radius: 30px;
    width: 31px;
    height: 35px;
    padding: 5px 10px 10px;
    margin: 4px;
    display: inline-block;
`;

export const Div = styled.div `
    display: block;
`