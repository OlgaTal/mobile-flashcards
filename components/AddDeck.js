import React, {Component} from 'react';
import {connect} from 'react-redux';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {_saveEmptyDeck} from '../utils/api';
import {purple} from '../utils/colors';
import TextButton from "./TextButton";
import {saveDeck} from "../actions";
import {NavigationActions, StackActions} from 'react-navigation';
import {showError} from "../utils/helpers";

class AddDeck extends Component {
    state = {title: ''};

    submit = () => {
        const {decks, dispatch} = this.props;
        const {title} = this.state;

        if (!title) {
            showError('The title is empty!');
            return;
        }

        if (!!decks[title]) {
            showError('The title already exists!');
            return;
        }

        _saveEmptyDeck(title)
            .then((deck) => {
                dispatch(saveDeck(deck));
                this.setState({title: ''});
                this.props.navigation.dispatch(StackActions.reset({
                    index: 1,
                    actions: [
                        NavigationActions.navigate({
                            routeName: 'Home',
                            action: NavigationActions.navigate({
                                routeName: 'Home',
                            })
                        }),
                        NavigationActions.navigate({
                            routeName: 'ShowDeck',
                            params: {deck},
                            action: NavigationActions.navigate({
                                routeName: 'ShowDeck',
                                params: {deck}
                            })
                        }),
                    ]
                }));
            });
    };

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={{color: purple, fontSize: 16}}>What is the title of your new deck?</Text>


                <TextInput placeholder='Deck Title'
                           style={styles.input}
                           onChangeText={(title) => this.setState({title})}
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

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(
    mapStateToProps,
)(AddDeck);

