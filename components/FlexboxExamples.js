import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

class FlexboxExamples extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}><Text>1</Text></View>
                <View style={[styles.box, {alignSelf: 'flex-end'}]}><Text>2</Text></View>
                <View style={styles.box}><Text>3</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: '#e76e63',
        margin: 10,
    }
});

export default FlexboxExamples;