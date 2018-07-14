import {GET_DECKS, REMOVE_DECKS, SAVE_DECK, ADD_CARD, INIT_DECKS} from '../actions'

function decks(state = {}, action) {
    switch (action.type) {
        case GET_DECKS :
            return {
                ...state,
                ...action.decks
            };
        case INIT_DECKS :
            return {
                ...action.decks
            };
        case SAVE_DECK :
            return {
                ...state,
                [action.deck.title]: action.deck
            };
        case REMOVE_DECKS :
            return {};
        case ADD_CARD :
            return {
                ...state,
                [action.title]: state[action.title].questions.push(action.card)
            };
        default :
            return state;
    }
}

export default decks;