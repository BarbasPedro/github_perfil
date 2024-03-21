import { useState } from "react";

// import Form from "./components/Form/";
import Perfil from "./components/Perfil";
import Repositorios from "./components/Repos/";
import "./global.css";


function App() {
  const [formEstaVisivel, setForm] = useState(true);
  const [usuario, setUsuario] = useState("")

  return (
    <>
    <input onBlur={(e) => setUsuario(e.target.value)} type="text" placeholder="Digite o usuário"/>

      { usuario.length > 4 && (
        <>
          <Perfil usuario={usuario} />
          <Repositorios usuario={usuario}/>
        </>
      )}
      {/* { {formEstaVisivel && (
      <Form />
      )} }

      <button type="button" onClick={() => setForm(!formEstaVisivel)}>Toggle</button> */}
    </>
  )
}

export default App
