import React from 'react';
import {StatusBar, StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import AddDeck from './components/AddDeck';
import ListDeck from './components/ListDeck';
import ShowDeck from './components/ShowDeck';
import AddCard from './components/AddCard';
import ShowCard from './components/ShowCard';
import FlexboxExamples from './components/FlexboxExamples';
import {getDecks, getDeck, saveDeckTitle, removeDecks} from './utils/api';
import {AppLoading} from 'expo';
import {purple, red, white} from './utils/colors';
import {Constants} from 'expo';
import {createMaterialTopTabNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import TextButton from "./components/TextButton";

function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createMaterialTopTabNavigator({
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

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <UdaciStatusBar backgroundColor={purple} barStyle="light-content"/>
                <Tabs />
                {/*<ShowCard deck={deck}/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 30,
        // paddingBottom: 30,
        backgroundColor: white
    }
});