export const GET_DECKS = 'GET_DECKS';
export const INIT_DECKS = 'INIT_DECKS';
export const SAVE_DECK = 'SAVE_DECK';
export const REMOVE_DECKS = 'REMOVE_DECKS';
export const ADD_CARD = 'ADD_CARD';

export function receiveDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function saveDeck(deck) {
    return {
        type: SAVE_DECK,
        deck
    }
}

export function removeDecks() {
    return {
        type: REMOVE_DECKS
    }
}

export function addCardToDeck(title, card) {
    return {
        type: ADD_CARD,
        title,
        card
    }
}

export function initDecks(decks) {
    return {
        type: INIT_DECKS,
        decks
    }
}