const express = require('express');
const app = express();

// Route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Route for books information
app.get('/books', (req, res) => {
  const books = ['Think Like a Monk', 'Rich Dad, Poor Dad', 'The power of your Subconcious Mind'];
  res.send(`Here are some popular books : ${books.join(', ')}`);
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});