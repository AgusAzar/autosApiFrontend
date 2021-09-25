import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './mainPage.css';

import ContentTable from '../../components/ContentTable';
import AgregarAuto from '../AgregarAuto';

const MainPage = () => {
    return (
        <Router>
            <div className="title-section primary-variation-background-color">
                <h1 className="titulo">Api Autos</h1>
            </div>
            <div className="content-section">
                <Switch>
                    <Route path="/agregarAuto">
                        <AgregarAuto />
                    </Route>
                    <Route path="/">
                        <ContentTable />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default MainPage;
