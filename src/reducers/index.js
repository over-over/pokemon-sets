import updateSetList from "./sets";
import updateCardList from "./cards";

const reducer = (state, action) => {
    return {
        setList: updateSetList(state, action),
        cardList: updateCardList(state, action)
    }
}

export default reducer;