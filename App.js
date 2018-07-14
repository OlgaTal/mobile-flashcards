import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Constants} from 'expo';
import {purple, red} from './utils/colors';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {MainNavigator} from './components/Navigator';
import {setLocalNotification} from './utils/helpers';

function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification();
    }

    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.container}>
                    <UdaciStatusBar backgroundColor={purple} barStyle="light-content"/>
                    <MainNavigator/>
                    {/*<MainNavigator screenProps={{hello: "HelloWorld"}}/>*/}
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

