import { useState } from "react";

export default function PainelIdeias() {
 
const [ideia, setIdeia] = useState([]);
const [novaIdeias, setNovaIdeias] = useState(""); 
const [erro, setErro] = useState("");

function AdicionarIdeia(event){
    event.preventDefault();

    if (novaIdeia.trim() === "") {
        setErro("Ideia nao criada!");
        return 
    }
}
return (
            <div>
                <h1>PAINEL DE IDEIAS</h1>
                <p>Anote aqui suas ideias de projeto para nao perde-las</p>

                <form onSubmit={AdicionarIdeia}>
                    <input placeholder="EX: codigo de PTAC" />
                    <button type="submit">Adicionar ideia</button>
                </form>

            {erro && <p>{erro}</p>}

                <ul>
                    <li>
                        <input type="checkbox" />
                        <span>Site de portifolio com React</span>
                        <p><button>❌</button></p>
                    </li>
                </ul>
            </div>
        );
}