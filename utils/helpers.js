// utils/helpers.js

import {Alert} from "react-native";

export function showError(msg) {
    Alert.alert(
        'Error',
        msg,
        [
            {text: 'OK'},
        ],
        {cancelable: false}
    );
}

export function timeToString(time = Date.now()) {
    const date = new Date(time);
    const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    return todayUTC.toISOString().split('T')[0];
}

