import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo, FontAwesome, Ionicons} from '@expo/vector-icons';
import {AppLoading} from 'expo';
import {initDecks, receiveDecks, removeDecks} from "../actions";
import {_getDecks, _initDecks, _removeDecks} from "../utils/api";
import {purple, red, white} from '../utils/colors';
import {defaultDecks} from "../utils/_DATA";

class ListDeck extends Component {
    state = {ready: false, opacity: {}, tsize: {}};

    componentDidMount() {
        const {dispatch} = this.props;
        _getDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks));

                let opacity = {};
                let tsize = {};
                Object.keys(decks).map((title) => {
                    opacity[title] = new Animated.Value(1);
                    tsize[title] = new Animated.Value(18);
                });
                this.setState({ready: true, opacity: opacity, tsize: tsize});
            });
    }

    clearDecks = () => {
        const {dispatch} = this.props;
        _removeDecks()
            .then(() => {
                dispatch(removeDecks());
                this.setState({ready: true, opacity: {}, tsize: {}});
            });
    };

    resetStorage = () => {
        const {dispatch} = this.props;
        _initDecks(defaultDecks).then((decks) => {
            dispatch(initDecks(decks));
            let opacity = {};
            let tsize = {};
            Object.keys(decks).map((title) => {
                opacity[title] = new Animated.Value(1);
                tsize[title] = new Animated.Value(18);
            });
            this.setState({ready: true, opacity: opacity, tsize: tsize});
        });
    };

    getOpacity = (title) => {
        return this.state.opacity[title];
    };

    getTSize = (title) => {
        return this.state.tsize[title];
    };

    _onPress = (deck) => {
        let opa = this.getOpacity(deck.title);
        let tsize = this.getTSize(deck.title);

        Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    opa,
                    {
                        toValue: 0.5,
                        duration: 500,
                    }
                ),
                Animated.timing(
                    tsize,
                    {
                        toValue: 24,
                        duration: 500,
                    }
                )]),
            Animated.parallel([
                Animated.timing(
                    opa,
                    {
                        toValue: 1,
                        duration: 500,
                    }
                ),
                Animated.timing(
                    tsize,
                    {
                        toValue: 18,
                        duration: 500,
                    }
                ),
            ])]).start();
        setTimeout(() => this.navigate(deck), 1000)
    };

    navigate = (deck) => {
        this.props.navigation.navigate('ShowDeck', {deck: deck})
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
                            <Animated.View key={deck.title} style={{opacity: this.getOpacity(deck.title)}}>
                                <TouchableOpacity style={styles.deck}
                                                  onPress={() => this._onPress(deck)}>
                                    <Animated.Text
                                        style={[styles.text, {fontSize: this.getTSize(deck.title)}]}>{deck.title}</Animated.Text>
                                    <Text style={[styles.text, {fontSize: 14}]}>{deck.questions.length} cards</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        )
                    })}

                    <TouchableOpacity style={[styles.deck, {backgroundColor: red}]}
                                      onPress={() => this.resetStorage()}>
                        <Text style={[styles.text, {fontSize: 18}]}>Reset to Defaults</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.deck, {backgroundColor: red}]}
                                      onPress={() => this.clearDecks()}>
                        <Text style={[styles.text, {fontSize: 18}]}>Remove All</Text>
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

