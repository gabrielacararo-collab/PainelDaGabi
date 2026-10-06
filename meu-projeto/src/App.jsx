import { useState } from "react";

export default function PainelIdeias() {
 
const [tarefa, setTarefa] = useState([]);
const [novaTarefa, setNovaTarefa] = useState(""); 
const [erro, setErro] = useState("");

function Compromisso(event){
    event.preventDefault();

    if (tarefa === "") {
        setErro("Tarefa nao criada!")
    }
}
}