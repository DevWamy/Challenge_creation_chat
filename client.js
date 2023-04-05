window.addEventListener('load', () => {
    const webSocket = new WebSocket('ws://localhost:8080');

    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const messagesDiv = document.getElementById('messages');

    webSocket.onopen = function () {
        console.log('WebSocket connection established.');
    };

    webSocket.onmessage = function (event) {
        event.data.text().then(function (text) {
            const message = text;
            const messageDiv = document.createElement('div');
            messageDiv.textContent = message;
            messagesDiv.appendChild(messageDiv);
        });
    };

    sendButton.addEventListener('click', function () {
        const message = messageInput.value;
        webSocket.send(message);
        messageInput.value = '';
    });
});
