import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo, FontAwesome, Ionicons} from '@expo/vector-icons';
import {AppLoading} from 'expo';
import {purple, red, white} from '../utils/colors';
import {_getDecks, _initDecks, _removeDecks} from "../utils/api";
import {ShowDeck} from "./ShowDeck";
import {initDecks, receiveDecks, removeDecks} from "../actions";
import {defaultDecks} from "../utils/_DATA";

class ListDeck extends Component {
    state = {ready: false};

    componentDidMount() {
        const {dispatch} = this.props;
        _getDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks));
                this.setState({ready: true});
            });
    }

    resetStorage = () => {
        // this.clearDecks();
        this.initStorage();
    };

    clearDecks = () => {
        const {dispatch} = this.props;
        _removeDecks()
            .then(() => {
                dispatch(removeDecks());
                this.setState({ready: true});
            });
    };

    initStorage = () => {
        const {dispatch} = this.props;
        _initDecks(defaultDecks).then((decks) => {
            dispatch(initDecks(decks));
            this.setState({
                ready: true
            });
        });
    };

    render() {
        const {ready} = this.state;
        const {decks} = this.props;

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

                    <TouchableOpacity style={[styles.deck, {backgroundColor: red}]}
                                      onPress={() => this.resetStorage()}>
                        <Text style={[styles.text, {fontSize: 18}]}>Reset to Defaults</Text>
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

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(
    mapStateToProps,
)(ListDeck);