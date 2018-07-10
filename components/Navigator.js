import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import AddDeck from './AddDeck';
import ListDeck from './ListDeck';
import ShowDeck from './ShowDeck';
import AddCard from './AddCard';
import ShowCard from './ShowCard';
import {getDeck, getDecks, removeDecks, saveDeckTitle} from './utils/api';
import {AppLoading, Constants} from 'expo';
import {purple, red, white} from './utils/colors';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';

const TopNavigator = createMaterialTopTabNavigator({
    ListDeck: {
        screen: ListDeck,
        navigationOptions: {
            tabBarLabel: 'DECKS',
            // tabBarIcon: ({tintColor}) => <FontAwesome name='home' size={30} color={tintColor}/>
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            // tabBarIcon: ({tintColor}) => <FontAwesome name='home' size={30} color={tintColor}/>
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

export const MainNavigator = createStackNavigatorStackNavigator({
    Home: {
        screen: TopNavigator,
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
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    },
    ShowCard: {
        screen: ShowCard,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }
});