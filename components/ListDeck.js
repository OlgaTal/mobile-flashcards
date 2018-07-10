import React, {Component} from 'react'
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Entypo, FontAwesome, Ionicons} from '@expo/vector-icons'
import {purple, white} from '../utils/colors'

export default class ListDeck extends Component {

    selectDeck(deck) {
        alert(deck)
    }

    addDeck() {
        alert('add deck!')
    }

    render() {

        const {decks} = this.props;

        return (
            <ScrollView style={{flex: 1}}>


                <View style={styles.header}>
                    <Text style={{color: purple, fontSize: 20}}>Decks</Text>
                    <TouchableOpacity onPress={() => this.addDeck()}>
                        <Entypo name='circle-with-plus' size={30} color={purple}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    {Object.keys(decks).map((title) => {
                        const deck = decks[title];

                        return (
                            <TouchableOpacity key={deck.title} style={styles.deck}
                                              onPress={() => this.selectDeck(deck)}>
                                <Text style={[styles.text, {fontSize: 18}]}>{deck.title}</Text>
                                <Text style={[styles.text, {fontSize: 14}]}>{deck.questions.length} cards</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 10
    },
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

