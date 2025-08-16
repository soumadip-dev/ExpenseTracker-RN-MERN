import express from 'express';

const app = express();

//* Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Home route
app.get('/', (req, res) => {
  res.send('Hello from the Expense Tracker server');
});

export default app;
