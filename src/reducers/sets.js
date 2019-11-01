const updateSetList = (state, action) => {

    if (state === undefined) {
        return {
            sets: [],
            loading: false,
            error: null,
        }
    }

    switch (action.type) {
        case 'FETCH_SETS_REQUEST':
            return {
                sets: [],
                loading: true,
                error: null,
            }
        case 'FETCH_SETS_SUCCESS':
            return {
                sets: action.payload,
                loading: false,
                error: null,
            }
        case 'FETCH_SETS_FAILURE':
            return {
                sets: [],
                loading: false,
                error: action.payload,
            }
        default:
            return state.setList;
    }
}

export default updateSetList;