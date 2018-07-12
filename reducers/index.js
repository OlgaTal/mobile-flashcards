import {GET_DECKS, REMOVE_DECKS, SAVE_DECK} from '../actions'

function decks(state = {}, action) {
    switch (action.type) {
        case GET_DECKS :
            return {
                ...state,
                ...action.decks,
            };
        case SAVE_DECK :
            return {
                ...state,
                ...action.deck
            };
        case REMOVE_DECKS :
            return {};
        default :
            return state;
    }
}

export default decks;