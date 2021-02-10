import React from 'react';
import './Home.css'

import logo from '../assets/logo.svg'

export default function Sucess({ history }){
    function handleReturnHome(e){
        e.preventDefault();
        history.push('/')
    }

    return(
        <div className="home-container">
            <a href="/">
                <img src={logo} alt="Restaurante Padre Cícero" />
            </a>
            <h2>Sua operação foi um sucesso!</h2>
            <h2>Clique no botão abaixo para retornar à página principal.</h2>
            <form>
                <button onClick={handleReturnHome} type="returnHome">Retornar para a Home</button>
            </form>
        </div>
    );
}