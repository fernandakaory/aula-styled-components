import styled from 'styled-components'

//criando uma variável const
export const DivComp1 = styled.div`
    background-color: lightblue;
    border: 2px solid pink;

    h2{
        text-align: center;
        color: pink;
    }

    p{
        text-align: justify;
        color: lightseagreen;
    }
`

export const Button = styled.button`
    background-color: ${(props) => props.$isOn ? "#00f" : "#999"};
    border-radius: 10px;
    padding: 5px;
    color: white;
    border: none;
`