import React from 'react';
import './Home.css';

import logo from '../assets/logo.svg'

export default function Home({ history }){

    function handleRegister(e){
        e.preventDefault();
        history.push('/registerproduct')
    }

    function handleVerify(e){
        e.preventDefault();
        history.push('/verifysoldproduct')
    }

    function handleSell(e){
        e.preventDefault();
        history.push('/registersoldproduct')
    }


    return(
        <div className="home-container">
            <a href="/">
                <img src={logo} alt="Restaurante Padre Cícero" />
            </a>
            <form>
                <h3>Selecione o que deseja fazer:</h3>
                <button onClick={handleRegister} type="registerProduct">Cadastrar Novo Produto</button>
                <button onClick={handleVerify} type="verifySoldProduct">Verificar Produtos Vendidos</button>
                <button onClick={handleSell} type="registerSoldProduct">Registrar Venda</button>
            </form>
        </div>
    );
}