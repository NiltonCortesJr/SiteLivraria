//Modelo de requisição com GET
import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [livro, setLivro] = useState();

  useEffect(() => {
    api
      .get("")
      .then((response) => setLivro(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <p>Usuário: {livro?.login}</p>
      <p>Biografia: {livro?.bio}</p>
    </div>
  );
}
//Modelo de requisação com POST Precisaremos dos dados
useEffect(() => {
  api
  .post(`${id}`,{"Body da requisição":"dado a passar"})
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}, []);

//Funcionamento dos VERBOS

// Verbo GET
 api.get(endpoint)

 // Verbo POST
  api.post(endpoint, dados)
 
 
 // Verbo DELETE
  api.delete(endpoint, dados)
 
 // Verbo PUT
  api.put(endpoint, dados)