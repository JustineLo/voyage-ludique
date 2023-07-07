const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const gameRoutes = require('./routes/gameRoutes');
const moveRoutes = require('./routes/moveRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', gameRoutes);
app.use('/api', moveRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Game Tracker API!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
