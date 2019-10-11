//Importa o react
import React from 'react';

//Importa o css do componente
import './styles.css';

//Var que retorna uma função
//Primeiro componente
const Header = () => (
    <header id="main-header">JSHunt</header>
);
// Equivalente a:
// class Header extends Component{
//     render(){
//         return <h1>Hello</h1>
//     }
// }

export default Header;