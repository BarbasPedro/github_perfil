import { useState } from "react";

const Form = () => {
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState("")

  const renderizaResultado = () => {
    let soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return (
        <p>{nome} foi aprovado com média {media}</p>
        )
    } else {
      return (
        <p>{nome} foi reprovado com média {media}</p>
        )
    }
  }

  const alteraNome = ({target}) =>{
    return setNome(target.value)
  }

  return (
    <>
      <form>
        <input type="text" placeholder="Nome do Aluno" onChange={alteraNome} />
        <input type="number" placeholder="Nota da disciplina A" onChange={e => setMateriaA(parseInt(e.target.value))}/>
        <input type="number" placeholder="Nota da disciplina B" onChange={e => setMateriaB(parseInt(e.target.value))}/>
        <input type="number" placeholder="Nota da disciplina C" onChange={e => setMateriaC(parseInt(e.target.value))}/>
        {renderizaResultado()}
      </form>
    </>
  )
}

export default Form
