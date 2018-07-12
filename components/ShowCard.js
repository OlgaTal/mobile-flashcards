import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TextButton from './TextButton';
import {green, purple, red} from "../utils/colors";

export default class ShowCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false,
            cardNum: 0,
            correct: 0
        };
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Quiz"
        }
    };

    showQuestion = () => {
        console.log("ShowCard/showQuestion");
        this.setState({showAnswer: false})
    };

    showAnswer = () => {
        console.log("ShowCard/showAnswer");
        this.setState({showAnswer: true})
    };

    correct = () => {
        const {deck} = this.props.navigation.state.params;
        let {cardNum, correct} = this.state;
        correct++;
        cardNum++;
        this.setState({correct, cardNum, showAnswer: false});
        console.log("ShowCard/correct", deck.title, correct);
    };

    incorrect = () => {
        const {deck} = this.props.navigation.state.params;
        let {cardNum} = this.state;
        cardNum++;
        this.setState({cardNum, showAnswer: false});
        console.log("ShowCard/incorrect", deck.title, cardNum)
    };

    restartQuiz = () => {
        this.setState({correct: 0, cardNum: 0});
        console.log("ShowCard/startQuiz");
    };

    backToDeckView = () => {
        console.log("ShowCard/backToDeckView");
    };

    renderScore() {
        const {deck} = this.props.navigation.state.params;
        const size = !!deck ? deck.questions.length : 0;
        let {correct} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.score}>Score</Text>
                <Text style={styles.score}>{correct} / {size}</Text>

                <View>
                    <TextButton onPress={this.restartQuiz} style={{backgroundColor: green}}>
                        Restart The Quiz
                    </TextButton>

                    <TextButton onPress={this.backToDeckView}>
                        Back To Deck View
                    </TextButton>
                </View>
            </View>
        )
    }

    renderCard() {
        const {deck} = this.props.navigation.state.params;
        const {cardNum, showAnswer} = this.state;
        const size = !!deck ? deck.questions.length : 0;
        const question = !!deck && cardNum < deck.questions.length ? deck.questions[cardNum].question : '';
        const answer = !!deck && cardNum < deck.questions.length ? deck.questions[cardNum].answer : '';

        return (
            <View style={{flex: 1, marginLeft: 10, marginTop: 10}}>
                <Text>{cardNum + 1}/{size}</Text>

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
                        <TextButton onPress={this.correct} style={{backgroundColor: green}}>
                            Correct
                        </TextButton>

                        <TextButton onPress={this.incorrect} style={{backgroundColor: red}}>
                            Incorrect
                        </TextButton>
                    </View>
                </View>

            </View>
        )
    }

    render() {
        const {deck} = this.props.navigation.state.params;
        const {cardNum} = this.state;
        const size = !!deck ? deck.questions.length : 0;
        const showScore = size === cardNum;

        return (
            <View style={{flex: 1, marginLeft: 10, marginTop: 10}}>
                {showScore && this.renderScore()}
                {!showScore && this.renderCard()}
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
    qaText: {
        color: red,
        fontWeight: 'bold',
        fontSize: 20
    },
    score: {
        color: red,
        fontWeight: 'bold',
        fontSize: 18
    }
});
