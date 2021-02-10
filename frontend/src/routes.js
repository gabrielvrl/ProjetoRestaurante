import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import RegisterProduct from './pages/RegisterProduct';
import RegisterSoldProduct from './pages/RegisterSoldProduct';
import VerifySoldProduct from './pages/VerifySoldProduct';
import Sucess from './pages/Sucess';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/registerproduct" component={RegisterProduct} />
            <Route path="/sucess" component={Sucess} />
            <Route path="/registersoldproduct" component={RegisterSoldProduct} />
            <Route path="/verifysoldproduct" component={VerifySoldProduct} />
        </BrowserRouter>
    );
}