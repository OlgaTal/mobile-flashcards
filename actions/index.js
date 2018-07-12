export const GET_DECKS = 'GET_DECKS';
export const SAVE_DECK = 'SAVE_DECK';
export const REMOVE_DECKS = 'REMOVE_DECKS';

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