import React from 'react';
import Botao from '../botao/Botao';
import './Contador.css';



class Contator extends React.Component{
    state = {
        contador: 0
    }

    aumentar = () =>{
        let novoContador = this.state.contador;
        novoContador++;
        this.setState({ contador: novoContador});
    }

    diminuir = () =>{
        let novoContador = this.state.contador;
        novoContador--;
        this.setState({ contador: novoContador});
    }
    zerar = () =>{
    
        this.setState({ contador: 0});
    }

    render() {
        return (
            <div>
                <h1>O valor do meu contador é: {this.state.contador }</h1>
                <Botao classe="botao" evento={this.aumentar} titulo="Aumentar" />
                <Botao classe="botao-decrementar" evento={this.diminuir} titulo="Diminuir" />
                <Botao classe="botao-zerar" evento={this.zerar} titulo="Zerar" />
                
             </div>   
            
        );
    }
}

export default Contator;