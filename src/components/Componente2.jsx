import styled from 'styled-components'

const DivComp2 = styled.div`
    background-color: lightcyan;
    border: 2px solid red;

    h2{
        text-align: center;
        color: purple;
    }

    p{
        text-align: justify;
        color: lightcoral;
    }
`

export default function Componente2(){

    return (
        <DivComp2>
            <h2>Componente2</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </DivComp2>
    )
}