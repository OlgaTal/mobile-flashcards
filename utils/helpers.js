import {Alert, AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

const NOTIFICATION_KEY = 'DECKS_STORAGE:notifications';

export function showError(msg) {
    Alert.alert(
        "Error",
        msg,
        [
            {text: "OK"},
        ],
        {cancelable: false}
    );
}

export function timeToString(time = Date.now()) {
    const date = new Date(time);
    const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    return todayUTC.toISOString().split('T')[0];
}

function createNotification() {
    console.log("createNotification");
    return {
        title: 'Do your quiz!',
        body: "👋 don't forget to do your quiz today!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    console.log("setLocalNotification 1");
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            console.log("setLocalNotification 2");
            if (data === null) {
                console.log("setLocalNotification 3");
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        console.log("setLocalNotification 4");
                        if (status === 'granted') {
                            console.log("setLocalNotification 5");
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(15);
                            tomorrow.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );
                            console.log("setLocalNotification 6");
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    })
            }
        })
}

