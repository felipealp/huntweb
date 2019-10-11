//Conexão com serviços externos (Requisição com axios)
import axios from 'axios';
//Conexão com API local
const api = axios.create({baseURL:'http://localhost:3001/api'})

export default api;