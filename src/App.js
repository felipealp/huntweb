import React, {Component} from 'react';

//Importa a API
import api from './services/api';

//Importa o CSS padrão
import './styles.css';

//Importa o componente Header
import Header from './componentes/Header'
//Importa a página principal
import Main from './pages/main';
//Usa o componente Header criado e a página Main
const App = () => (
  <div className="App">
      <Header />
      <Main />
    </div>
);



export default App;
