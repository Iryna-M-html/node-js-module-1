// src/server.js
import express from 'express';

const app = express();
const PORT = 3000;

// Логування часу
app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

// Маршрут
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
