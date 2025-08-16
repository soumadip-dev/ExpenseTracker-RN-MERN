import express from 'express';
import transactionsRoute from './routes/transactions.routes.js';

const app = express();

//* Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Home route
app.get('/', (req, res) => {
  res.send('Hello from the Expense Tracker server');
});

//* Health route
app.post('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

//* Transcition route
app.use('/api/v1/transactions', transactionsRoute);

export default app;
