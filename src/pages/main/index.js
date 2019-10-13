import React, {Component} from 'react';
//Importa a API
import api from '../../services/api';


//Importa o CSS padrão
import './styles.css';

export default class Main extends Component{
    //Variavel de estado
    state = {
        products: []
    }
    
    //Metodo executado logo apos o componente ser mostrado em tela
    componentDidMount(){
        this.loadProducts()
    }
    //Buscando products da API
    loadProducts = async () => {
        const response = await api.get('/products')
        //Armazena o array de produtos na variavel de estado
        this.setState({products: response.data.docs})
    }

    
     //Listagem de produtos
    render(){
        const { products} = this.state

        return (

            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        )
        
        

    }
}