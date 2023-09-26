import { useState } from "react"
import { Button } from "../styled"

export default function Componente1(){

    const[tarefa, setTarefa] = useState('')
    const[todas, setTodas] = useState([])

    const anotarTarefa = (evento) => {
        setTarefa(evento.target.value)
    }

    const inserirTarefa = () => {
        //desmebrar oq eu ja tenho, adicionar a nova tarefa
        //tudo que eu já tinha + a tarefa nova
        setTodas([...todas, tarefa])
        //limpando o conteudo 
        setTarefa('')
    }

    return(
        //substitui o nome da tag pela const que você criou no styled
        <div>
            <textarea onChange={anotarTarefa} value={tarefa}></textarea>
            <br />
            <Button $isOn={tarefa} onClick={inserirTarefa}>Anotar Tarefa</Button>
            <ul>
                {todas.map((tar,i)=> <li key={i}>{tar}</li>)}
            </ul>
        </div>
    )
}