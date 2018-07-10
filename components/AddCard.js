import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {addCardToDeck} from '../utils/api';
import TextButton from "./TextButton";
import {purple} from "../utils/colors";

function SubmitBtn({onPress}) {

    return (
        <TouchableOpacity
            onPress={onPress}>
            <Text>Submit</Text>
        </TouchableOpacity>
    )
}

export default class AddCard extends Component {
    state = {question: '', answer: ''};

    submit = () => {
        const {deck} = this.props;

        addCardToDeck(deck.title, {question: this.state.question, answer: this.state.answer});

        console.log("AddCard/submit:", deck.title, this.state.question, this.state.answer);

        this.setState({question: '', answer: ''})

        // Clear local notification
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