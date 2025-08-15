import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from the Expense Tracker server');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      // TODO: Ensure DB is connected before starting the server
      console.info(`✔️ Server is up and running on port: ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
