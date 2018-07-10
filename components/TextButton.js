import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {purple, white} from '../utils/colors'

const styles = StyleSheet.create({
    btn: {
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: purple,
        padding: 10,
        borderRadius: 4,
        width: 250,
        alignItems: 'center'
    },
    text: {
        color: white
    }
});

export default function TextButton({children, onPress, style, styleText}) {
    style = [styles.btn].concat(Array.isArray(style)?style:[style]);
    styleText = [styles.text].concat(Array.isArray(styleText)?styleText:[styleText]);

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style={styleText}>{children}</Text>
        </TouchableOpacity>
    )
}

