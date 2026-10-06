import { useState } from "react";

export default function PainelIdeias() {
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  function digitar(event) {
    setNovaIdeia(event.target.value);
    setErro("");
  }

  function adicionarIdeia(event) {
    event.preventDefault();
    
    if (novaIdeia.trim() === "") {
      setErro("Ideia não criada!");
      return;
    }

    setIdeias([...ideias, novaIdeia]);
    setNovaIdeia("");
  }

  return (
    <div>
      <h1>PAINEL DE IDEIAS</h1>
      <p>Anote aqui suas ideias de projeto para não perdê-las</p>
      
      <form onSubmit={adicionarIdeia}>
        <input 
          value={novaIdeia} 
          onChange={digitar} 
          placeholder="EX: código de PTAC" 
        />
        <button type="submit">Adicionar ideia</button>
      </form>
      
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      <ul>
        {ideias.map((ideia, index) => (
          <li key={index}>{ideia}</li>
        ))}
      </ul>
    </div>
  );
}