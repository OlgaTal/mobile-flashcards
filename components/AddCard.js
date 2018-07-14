import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {_addCardToDeck} from '../utils/api';
import TextButton from "./TextButton";
import {purple} from "../utils/colors";
import {addCard, addCardToDeck} from "../actions";

class AddCard extends Component {
    state = {question: '', answer: ''};

    static navigationOptions = (props) => {
        return {
            title: 'Add Card'
        }
    };

    submit = () => {
        const {deck, dispatch} = this.props;
        const card = {question: this.state.question, answer: this.state.answer};
        _addCardToDeck(deck.title, card)
            .then(() => {
                dispatch(addCardToDeck(deck.title, card));
                // this.setState({question: '', answer: ''});
                this.props.navigation.navigate('ShowDeck', {deck: deck});
            });
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

AddCard.propTypes = {
    deck: PropTypes.shape({
        title: PropTypes.string.isRequired
    })
};

function mapStateToProps(decks, {deck}) {
    return {
        deck
    };
}

export default connect(
    mapStateToProps,
)(AddCard);

