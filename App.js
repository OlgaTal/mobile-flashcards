import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {StatusBar, StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import AddDeck from './components/AddDeck';
import ListDeck from './components/ListDeck';
import ShowDeck from './components/ShowDeck';
import AddCard from './components/AddCard';
import ShowCard from './components/ShowCard';
import FlexboxExamples from './components/FlexboxExamples';
import {_getDecks, _saveDeckTitle, _removeDecks} from './utils/api';
import {AppLoading} from 'expo';
import {purple, red, white} from './utils/colors';
import {Constants} from 'expo';
import {createMaterialTopTabNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import TextButton from "./components/TextButton";
import {MainNavigator} from "./components/Navigator";

function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.container}>
                    <UdaciStatusBar backgroundColor={purple} barStyle="light-content"/>
                    <MainNavigator screenProps={{hello: "HelloWorld"}}/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: red
    }
});

