importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCgWhNLaeV8vE1bNLtU32JYafvxbtFXU-o",
    projectId: "ap-shop-b4e7e",
    messagingSenderId: "370581375566",
    appId: "1:370581375566:web:2dace12adc2e19686a511f"
});

const messaging = firebase.messaging();

// Menangani notifikasi saat aplikasi di background
messaging.onBackgroundMessage((payload) => {
    console.log('Background Message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image || 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
        vibrate: [200, 100, 200]
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
