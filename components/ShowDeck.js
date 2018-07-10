import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import TextButton from './TextButton'
import {purple} from '../utils/colors'

export default class ShowDeck extends Component {

    addCard = () => {
        console.log("ShowDeck/add card")
    };

    startQuiz = () => {
        console.log("ShowDeck/start quiz")
    };

    render() {
        const {deck} = this.props;
        const title = !!deck ? deck.title : '';
        const size = !!deck ? deck.questions.length : 0;

        return (
            <View style={styles.container}>
                <Text style={{color: purple, fontSize: 20}}>{title}</Text>
                <Text style={{color: purple, fontSize: 14}}>{size} cards</Text>

                <View style={styles.buttons}>
                    <TextButton onPress={this.addCard}>
                        Add Card
                    </TextButton>

                    {size > 0 && <TextButton onPress={this.startQuiz}>
                        Start Quiz
                    </TextButton>}
                </View>
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
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 10
    }
});

