const updateCardList = (state, action) => {

    if (state === undefined) {
        return {
            cards: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_CARDS_REQUEST':
            return {
                cards: [],
                loading: true,
                error: null,
            }
        case 'FETCH_CARDS_SUCCESS':
            return {
                cards: action.payload,
                loading: false,
                error: null,
            }
        case 'FETCH_CARDS_FAILURE':
            return {
                cards: [],
                loading: false,
                error: action.payload,
            }
        default:
            return state.cardList;
    }
}

export default updateCardList;