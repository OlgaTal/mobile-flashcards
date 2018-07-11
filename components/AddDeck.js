import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {saveDeckTitle} from '../utils/api';
import {purple} from '../utils/colors';
import TextButton from "./TextButton";

export default class AddDeck extends Component {
    state = {title: ''};

    submit = () => {
        //TODO: getDecks
        const {decks} = this.props.navigation.state.params;
        const {title} = this.state;

        if (!title) {
            alert('The title is empty!!');
            return
        }

        if (!!decks[title]) {
            alert('The title already exists!!');
            return
        }

        saveDeckTitle(title)
            .then(deck => {
                this.props.navigation.navigate('ShowDeck', {deck});
            });
    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={{color: purple, fontSize: 16}}>What is the title of your new deck?</Text>

                <KeyboardAvoidingView behavior='padding'>

                    <TextInput placeholder='Deck Title'
                               style={styles.input}
                               onChangeText={(title) => this.setState({title})}
                    />

                </KeyboardAvoidingView>

                <TextButton onPress={this.submit}>
                    Submit
                </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 20
    },
    input: {
        borderWidth: 0.5,
        borderColor: purple,
        borderRadius: 2,
        color: purple,
        fontWeight: 'bold',
        padding: 10,
        width: 200
    }
});
