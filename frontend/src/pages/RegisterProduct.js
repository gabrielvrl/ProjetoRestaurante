import React, { useState } from 'react';
import './Style.css'

import logo from '../assets/logo.svg'
import api from '../services/api';

export default function RegisterProduct({ history }){
    const [name, setName] = useState('');
    const [price, setPrice] = useState()

    async function handleSubmit(e){
        e.preventDefault()
        await api.post('/products', {
            name,
            price
        })

        history.push('/sucess')
    }

    function handleReturnHome(e){
        e.preventDefault();
        history.push('/')
    }

    return(
        <div className="register-container">
            <a href="/">
                <img src={logo} alt="Restaurante Padre Cícero" />
            </a>
            <form onSubmit={handleSubmit}>
                <h3> Pagina para Registrar um novo produto </h3>
                <input
                    placeholder="Digite o nome do Produto"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    placeholder="Digite o preço do Produto" 
                    value={price}
                    type="float"
                    onChange={e => setPrice(e.target.value)}
                />
                <button type="submit">Cadastrar Novo Produto</button>
                <button onClick={handleReturnHome} type="returnHome">Retornar para a Home</button>
            </form>
        </div>
    );
}