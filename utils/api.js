import {AsyncStorage} from 'react-native'

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY';

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) =>
            JSON.parse(results)
        );
}

export function getDeck(title) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) =>
            JSON.parse(results)[title]
        );
}

export function saveDeckTitle(title) {
    return saveDeck({title, questions: []});
}

export function saveDeck(deck) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,
        JSON.stringify({
            [title]: deck
        }))
        .then(() => deck);
}

export function addCardToDeck(title, card) {
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

export function removeDecks() {
    return AsyncStorage.removeItem(DECKS_STORAGE_KEY)
        .then((results) =>
            JSON.parse(results)
        )
        .catch((err) =>
            console.log("Unable remove storage", err)
        );
}