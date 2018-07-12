import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {_addCardToDeck} from '../utils/api';
import TextButton from "./TextButton";
import {purple} from "../utils/colors";

export default class AddCard extends Component {
    state = {question: '', answer: ''};

    static navigationOptions = (props) => {
        return {
            title: 'Add Card'
        }
    };

    submit = () => {
        const {deck} = this.props.navigation.state.params;

        _addCardToDeck(deck.title, {question: this.state.question, answer: this.state.answer});

        // this.setState({question: '', answer: ''});

        this.props.navigation.navigate('ShowDeck', {deck: deck});
    };

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextInput placeholder='Question'
                           style={styles.input}
                           onChangeText={(question) => this.setState({question})}
                           value={this.state.question}
                />
                <TextInput placeholder='Answer'
                           style={styles.input}
                           onChangeText={(answer) => this.setState({answer})}
                           value={this.state.answer}
                />

                <TextButton onPress={this.submit}>
                    Submit
                </TextButton>
            </KeyboardAvoidingView>
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

