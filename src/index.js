import express from 'express';
import { matchesRouter } from './routes/matches.js';
const app = express();
const PORT = 8000;

// JSON middleware
app.use(express.json());

// Root GET route
app.get('/', (req, res) => {
  res.json('Welcome to the Express.js server!');
});

app.use("/matches", matchesRouter);

// Start server and log URL
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
