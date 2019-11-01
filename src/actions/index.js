const cardsRequested = () => {
    return {
        type: 'FETCH_CARDS_REQUEST'
    }
}

const cardsLoaded = (cards) => {
    return {
        type: 'FETCH_CARDS_SUCCESS',
        payload: cards,
    }
}

const cardsError = (error) => {
    return {
        type: 'FETCH_CARDS_REQUEST',
        payload: error
    }
}

const setsRequested = () => {
    return {
        type: 'FETCH_SETS_REQUEST'
    }
}

const setsLoaded = (sets) => {
    return {
        type: 'FETCH_SETS_SUCCESS',
        payload: sets,
    }
}

const setsError = (error) => {
    return {
        type: 'FETCH_SETS_REQUEST',
        payload: error
    }
}

const fetchCards = (pokemonService) => (id) => (dispatch) => {
    dispatch(cardsRequested());
    pokemonService.getSetCards(id)
        .then((data) => dispatch(cardsLoaded(data)))
        .catch((error) => dispatch(cardsError(error)));
}

const fetchSets = (pokemonService) => () => (dispatch) => {
    dispatch(setsRequested());
    pokemonService.getAllSets()
        .then((data) => dispatch(setsLoaded(data)))
        .catch((error) => dispatch(setsError(error)));
}

const sortSets = () => (set, sortFunc) => (dispatch) => {
    const sortedSet = set.sort(sortFunc);
    dispatch({
        type: 'SORT_SETS',
        payload: sortedSet
    });
}

export {
    fetchCards,
    fetchSets,
    sortSets
}