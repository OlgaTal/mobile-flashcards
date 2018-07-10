import React, {Component} from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TextButton from './TextButton';
import {purple, white, red} from "../utils/colors";

export default class ShowCard extends Component {
    state = {showAnswer: false};

    showQuestion = () => {
        console.log("ShowCard/showQuestion");
        this.setState({showAnswer: false})
    };

    showAnswer = () => {
        console.log("ShowCard/showAnswer");
        this.setState({showAnswer: true})
    };

    correct = () => {
        const {deck, num} = this.props;
        console.log("ShowCard/correct", deck.title, num)
    };

    incorrect = () => {
        const {deck, num} = this.props;
        console.log("ShowCard/incorrect", deck.title, num)
    };

    render() {
        const {deck, num} = this.props;
        console.log("ShowCard/props", this.props);

        const size = !!deck ? deck.questions.length : 0;
        const {showAnswer} = this.state;
        const question = !!deck && num < deck.questions.length ? deck.questions[num].question : '';
        const answer = !!deck && num < deck.questions.length ? deck.questions[num].answer : '';

        return (
            <View style={{flex: 1, marginLeft: 10, marginTop: 10}}>
                <Text>{num + 1}/{size}</Text>

                <View style={styles.container}>
                    {!showAnswer && <Text style={[styles.qa, {fontWeight: 'bold'}]}>{question}</Text>}
                    {showAnswer && <Text style={[styles.qa, {fontWeight: 'bold'}]}>{answer}</Text>}

                    {showAnswer &&
                    <TouchableHighlight onPress={this.showQuestion}>
                        <Text style={styles.qaText}>Question</Text>
                    </TouchableHighlight>
                    }

                    {!showAnswer &&
                    <TouchableHighlight onPress={this.showAnswer}>
                        <Text style={styles.qaText}>Answer</Text>
                    </TouchableHighlight>
                    }

                    <View>
                        <TextButton onPress={this.correct} style={styles.btnCorrect}>
                            Correct
                        </TextButton>

                        <TextButton onPress={this.incorrect} style={styles.btnIncorrect}>
                            Incorrect
                        </TextButton>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    qa: {
        borderWidth: 0.5,
        borderColor: purple,
        borderRadius: 2,
        color: purple,
        fontWeight: 'bold',
        padding: 10,
        width: 250
    },
    btnCorrect: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        width: 250,
        padding: 10,
        alignItems: 'center'
    },
    btnIncorrect: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        width: 250,
        padding: 10,
        alignItems: 'center'
    },
    link: {
        flex: 1,
        alignItems: 'center',
        margin: 120
    },
    qaText: {
        color: red,
        fontWeight: 'bold',
        fontSize: 18
    }
});
