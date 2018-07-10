import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {saveDeckTitle} from '../utils/api';
import {purple, white} from '../utils/colors';

function SubmitBtn({onPress, style, textStyle}) {

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={textStyle}>Submit</Text>
        </TouchableOpacity>
    )
}

export default class AddDeck extends Component {
    state = {title: ''};

    submit = () => {
        const {decks} = this.props;
        const {title} = this.state;

        if (!title) {
            alert('The title is empty!!');
            return
        }

        if (!!decks[title]) {
            alert('The title already exists!!');
            return
        }

        saveDeckTitle(title);

        console.log("AddDeck/submit:", title)
    }

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

                <SubmitBtn onPress={this.submit} style={styles.btn} textStyle={styles.text}/>
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
    },
    btn: {
        margin: 5,
        backgroundColor: purple,
        padding: 10,
        borderRadius: 2
    },
    text: {
        color: white
    }
});
