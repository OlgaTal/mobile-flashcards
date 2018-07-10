import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo, FontAwesome, Ionicons} from '@expo/vector-icons';
import {AppLoading} from 'expo';
import {purple, red, white} from '../utils/colors';
import {getDecks, removeDecks} from "../utils/api";
import {ShowDeck} from "./ShowDeck";

export default class ListDeck extends Component {
    state = {ready: false, decks: {}};

    componentDidMount() {
        console.log("ListDeck/componentDidMount");
        getDecks().then((decks) => {
            this.setState({ready: true, decks});
            console.log("App.js/state:", this.state)
        });
    }

    clearStorage = () => {
        console.log("ListDeck/clearStorage");
        removeDecks();
        this.setState({ready: true, decks: {}});
    };

    render() {
        const {ready, decks} = this.state;

        console.log("ListDeck/render", this.props);

        if (ready === false) {
            return <View style={styles.container}>
                <AppLoading/>
            </View>
        }

        return (
            <ScrollView style={{flex: 1, marginTop: 1}}>
                <View style={styles.container}>
                    {Object.keys(decks).map((title) => {
                        const deck = decks[title];

                        return (
                            <TouchableOpacity key={deck.title} style={styles.deck}
                                              onPress={() => this.props.navigation.navigate('ShowDeck', {deck: deck})}>
                                <Text style={[styles.text, {fontSize: 18}]}>{deck.title}</Text>
                                <Text style={[styles.text, {fontSize: 14}]}>{deck.questions.length} cards</Text>
                            </TouchableOpacity>
                        )
                    })}

                    <TouchableOpacity key={deck.title} style={[styles.deck, {backgroundColor: red}]}
                                      onPress={() => this.clearStorage()}>
                        <Text style={[styles.text, {fontSize: 18}]}>Remove ALL Decks</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-evenly'

    },
    deck: {
        backgroundColor: purple,
        borderRadius: 7,
        height: 100,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: white,
        fontWeight: 'bold'
    }
});

