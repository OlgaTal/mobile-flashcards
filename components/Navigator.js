import React from 'react';
import AddDeck from './AddDeck';
import ListDeck from './ListDeck';
import ShowDeck from './ShowDeck';
import AddCard from './AddCard';
import ShowCard from './ShowCard';
import {purple, white} from '../utils/colors';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';

const TopNavigator = createMaterialTopTabNavigator({
    ListDeck: {
        screen: ListDeck,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'NEW DECK'
        }
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: white,
        style: {
            height: 56,
            backgroundColor: purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
});

export const MainNavigator = createStackNavigator({
    Home: {
        screen: TopNavigator,
        navigationOptions: {
            header: null,
            headerTintColor: white,
            headerStyle: {
                height: 0,
            }
        }
    },
    ShowDeck: {
        screen: ShowDeck,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: 'Add Card',
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    ShowCard: {
        screen: ShowCard,
        navigationOptions: {
            title: "Quiz",
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }
});