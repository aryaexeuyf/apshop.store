self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
        vibrate: [100, 50, 100],
        data: { dateOfArrival: Date.now() }
    };
    event.waitUntil(
        self.registration.showNotification('Duit Notification', options)
    );
});
