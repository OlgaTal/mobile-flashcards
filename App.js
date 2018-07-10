import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import AddDeck from './components/AddDeck';
import ListDeck from './components/ListDeck';
import ShowDeck from './components/ShowDeck';
import AddCard from './components/AddCard';
import ShowCard from './components/ShowCard';
import FlexboxExamples from './components/FlexboxExamples';
import {getDecks, getDeck, saveDeckTitle} from './utils/api';
import {AppLoading} from 'expo';
import {purple, white} from './utils/colors';

export default class App extends React.Component {

    state = {ready: false, decks: {}};

    componentDidMount() {
        console.log("App.js/componentDidMount");
        getDecks().then((decks) => {
            this.setState({ready: true, decks});
            console.log("App.js/state:", this.state)
        });
    }

    render() {
        const {ready, decks} = this.state;

        if (ready === false) {
            return <AppLoading/>
        }

        const deck = decks["Really"];

        return (
            <View style={styles.container}>
                <ShowCard deck={deck} num={0}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: white
    }
});