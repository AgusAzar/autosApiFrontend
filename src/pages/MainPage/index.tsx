import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContentTable from '../../components/ContentTable';
import AgregarAuto from '../AgregarAuto';

const MainPage = () => {
    return (
        <Router>
            <div className="titleSection">
                <h1 className="titulo">Api Autos</h1>
            </div>
            <div className="contentSection">
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
