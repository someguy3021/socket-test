const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: {
        origin: "https://localhost:8080",
    }
});

// Маршруты для HTTP
app.get('/', async (req, res) => {
    return res.send(123);
});

app.listen(3000, async () => {
    console.log('Server is running on port 3000');
});

// Запуск сокет-сервера
io.on('connection', (socket) => {
    console.log('Подключен клиент', socket);
});

httpServer.listen(3001);