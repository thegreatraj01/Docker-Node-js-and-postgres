// Importing modules using ES6 import syntax
import express from 'express';
import connectToDatabase from './db_connection/connection.js';


// Create an Express application
const app = express();
const port = 5000;

// Simple route to return a message
app.get('/hi', (req, res) => {
  res.send('Hi Raj, hello hi');
});


// Start the server
await connectToDatabase();
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
