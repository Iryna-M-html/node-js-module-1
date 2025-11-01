// src/server.js
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(
  pino({
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        messageFormat:
          '{req.method} {req.url} {res.statusCode} - {responseTime}ms',
        hideObject: true,
      },
    },
  }),
);

// Решта коду

// Middleware для парсингу JSON
app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body); // тепер тіло доступне як JS-об’єкт
  res.status(201).json({ message: 'User created' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
