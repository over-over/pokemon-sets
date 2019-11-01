import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CardsPage } from '../pages';
import './app.css';

const App = () => {
    return (
        <main className="container">
            <h1 className="app-header">PokemonTCQ Sets Browser</h1>
            <Switch>
                <Route path={process.env.PUBLIC_URL + "/"} component={HomePage} exact/>
                <Route path={process.env.PUBLIC_URL + "/set/:id"} component={CardsPage}/>
            </Switch>
        </main>
    )
}

export default App;