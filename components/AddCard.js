import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {Alert, KeyboardAvoidingView, StyleSheet, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {_addCardToDeck} from '../utils/api';
import TextButton from "./TextButton";
import {purple} from "../utils/colors";
import {addCardToDeck} from "../actions";
import {showError} from "../utils/helpers";

class AddCard extends Component {
    state = {question: '', answer: ''};

    static navigationOptions = (props) => {
        return {
            title: 'Add Card'
        }
    };

    submit = () => {
        const {deck, dispatch} = this.props;

        if(!this.state.question) {
            showError('The question is empty!');
            return;
        }

        if(!this.state.answer) {
            showError('The answer is empty!');
            return;
        }

        const card = {question: this.state.question, answer: this.state.answer};
        _addCardToDeck(deck.title, card)
            .then((d) => {
                dispatch(addCardToDeck(d.title, card));
                this.props.navigation.navigate('ShowDeck', {deck: d});
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

function mapStateToProps(decks, {navigation}) {
    return {
        deck: navigation.state.params.deck
    };
}

export default connect(
    mapStateToProps,
)(AddCard);
