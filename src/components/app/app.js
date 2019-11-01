import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage, CardsPage } from '../pages';
import './app.css';

const App = () => {
    return (
        <main className="container">
            <h1 className="app-header">PokemonTCQ Sets Browser</h1>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/set" component={() => <Redirect to="/set/base1"/>} exact/>
                <Route path="/set/:id?" component={CardsPage}/>
            </Switch>
        </main>
    )
}

export default App;