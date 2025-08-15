import express from 'express';
import { ENV } from './config/env.config.js';

const app = express();
const PORT = ENV.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from the Expense Tracker server');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.listen(PORT, () => {
  console.info(`✔️ Server is running on port ${PORT}`);
});
