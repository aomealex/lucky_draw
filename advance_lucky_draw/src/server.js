const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

// Use the session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));

// Set of all generated random numbers to ensure uniqueness
const generatedNumbers = new Set();

// Function to generate a unique random number
function generateUniqueRandomNumber() {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 100);
  } while (generatedNumbers.has(randomNumber));
  generatedNumbers.add(randomNumber);
  return randomNumber;
}

// Endpoint for the Random API
app.get('/api/random', (req, res) => {
  if (!req.session.randomNumber) {
    req.session.randomNumber = generateUniqueRandomNumber();
  }
  res.json({ randomNumber: req.session.randomNumber });
});

// Admin endpoint to reset random numbers
app.post('/admin/reset', (req, res) => {
  req.session.destroy();
  generatedNumbers.clear();
  res.send('All random numbers have been reset.');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
