import {AsyncStorage} from 'react-native'

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY';

export function _getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) =>
            !!results ? JSON.parse(results) : {}
        );
}

export function _initDecks(decks) {
    return AsyncStorage.setItem(DECKS_STORAGE_KEY,
        JSON.stringify(decks))
        .then(() => decks);
}

//
// export function getDeck(title) {
//     return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//         .then((results) =>
//             JSON.parse(results)[title]
//         );
// }

export function _saveDeckTitle(title) {
    return _saveDeck({title, questions: []});
}

export function _saveDeck(deck) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,
        JSON.stringify({
            [deck.title]: deck
        }))
        .then(() => deck);
}

export function _addCardToDeck(title, card) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const deck = JSON.parse(results)[title];
            AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
                [title]: {
                    ...deck,
                    questions: deck["questions"].concat([card])
                }
            }))
        });
}

export function _removeDecks() {
    return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
        .then((results) =>
            JSON.parse(results)
        )
        .catch((err) =>
            console.log("Unable remove storage", err)
        );
}