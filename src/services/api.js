import axios from "axios";

const api = axios.create({
  baseURL: "https://livraria-api-modulo4.herokuapp.com/Livros",
});

export default api;