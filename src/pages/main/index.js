import React, {Component} from 'react';
//Importa a API
import api from '../../services/api';

export default class Main extends Component{
    //Metodo executado logo apos o componente ser mostrado em tela
    componentDidMount(){
        this.loadProducts()
    }
    //Buscando products da API
    loadProducts = async () => {
        const response = await api.get('/products')
        //Mostra o array de produtos
        console.log(response.data.docs)
    }
    
    render(){
        return <h1>Welcome</h1>
    }
}