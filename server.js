const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', function connection(webSocket) {
    console.log('Client connected.');

    webSocket.on('message', function incoming(message) {
        console.log('Received message:', message);
        server.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
