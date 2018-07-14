import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import TextButton from './TextButton';
import {green, purple} from '../utils/colors';

class ShowDeck extends Component {
    static navigationOptions = ({navigation}) => {
        const {deck} = navigation.state.params;
        return {
            title: deck.title
        }
    };

    render() {
        const {deck} = this.props.navigation.state.params;
        const title = !!deck ? deck.title : '';
        const size = !!deck ? deck.questions.length : 0;

        return (
            <View style={styles.container}>
                <Text style={{color: purple, fontSize: 20}}>{title}</Text>
                <Text style={{color: purple, fontSize: 14}}>{size} cards</Text>

                <View>
                    {size > 0 &&
                    <TextButton style={{backgroundColor: green}}
                                onPress={() => this.props.navigation.navigate('ShowCard', {deck: deck})}>
                        Start Quiz
                    </TextButton>}
                    <TextButton onPress={() => this.props.navigation.navigate('AddCard', {deck: deck})}>
                        Add Card
                    </TextButton>
                </View>
            </View>
        )
    }
}

ShowDeck.propTypes = {
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
)(ShowDeck);

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

