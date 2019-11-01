import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import PokemonService from './services/pokemon-service';
import {PokemonServiceProvider} from './components/pokemon-service-context';

const pokemonService = new PokemonService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <PokemonServiceProvider value={pokemonService}>
                <Router basename={process.env.PUBLIC_URL + '/pokemon-sets'}>
                    <App />
                </Router>
            </PokemonServiceProvider>
        </ErrorBoundry>  
    </Provider>
    , document.getElementById('root')
);