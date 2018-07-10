import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {purple, white} from '../utils/colors'

const styles = StyleSheet.create({
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

export default function TextButton({children, onPress, style, styleText}) {
    style = [styles.btn].concat([style]);
    styleText = [styles.text].concat([styleText]);

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={styleText}>{children}</Text>
        </TouchableOpacity>
    )
}

