const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1><a href="/profile">Go Profile</a>');
});

app.get('profile/', (req, res) => {
  res.send('<h2>This is profile page.</h2><a href="/">Go Home</a>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});