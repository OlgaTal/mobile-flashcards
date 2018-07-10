import { AsyncStorage } from 'react-native'
const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY'

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
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: { title, questions: []}
  }))
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

