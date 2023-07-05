const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const gameRoutes = require('./routes/gameRoutes');

app.get('/', (req, res) => {
  res.send('Welcome to Game Tracker API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/api', gameRoutes);
