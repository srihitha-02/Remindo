const { admin } = require('../config/firebaseAdmin');

const sendPushNotification = async (fcmToken, payload) => {
    if (!fcmToken) {
        console.warn('No FCM token provided, skipping notification');
        return;
    }

    try {
        const message = {
            notification: {
                title: payload.title,
                body: payload.body,
            },
            android: {
                notification: {
                    icon: 'stock_ticker_update', // You can customize this
                    color: '#e0b596',
                    sound: 'default'
                },
            },
            token: fcmToken,
        };

        const response = await admin.messaging().send(message);
        console.log('Successfully sent FCM message:', response);
    } catch (error) {
        console.error('Error sending FCM notification:', error);
        // If the token is invalid or expired, we should ideally remove it from the user record
        if (error.code === 'messaging/registration-token-not-registered') {
            console.log('Token is no longer valid. Should be removed.');
        }
    }
};

module.exports = { sendPushNotification };
