const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const pool = require('../db');

router.get(
  '/games',
  asyncHandler(async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM games');
    res.json(rows);
  })
);

router.get(
  '/games/:id',
  asyncHandler(async (req, res) => {
    const [rows, fields] = await pool.execute(
      'SELECT * FROM games WHERE id = ?', 
      [req.params.id]
    );

    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).send('Game not found');
    }
  })
);

router.post(
  '/games',
  asyncHandler(async (req, res) => {
    const { name, giver, originCity, currentCity, startDate, numberOfMoves } = req.body;
    const [result] = await pool.execute(
      'INSERT INTO games (name, giver, originCity, currentCity, startDate, numberOfMoves) VALUES (?, ?, ?, ?, ?, ?)', 
      [name, giver, originCity, currentCity, startDate, numberOfMoves]
    );
    res.status(201).json({ id: result.insertId, name, giver, originCity, currentCity, startDate, numberOfMoves });
  })
);


router.put(
  '/games/:id',
  asyncHandler(async (req, res) => {
    const { name, originCity, currentCity } = req.body;
    await pool.execute(
      'UPDATE games SET name = ?, originCity = ?, currentCity = ? WHERE id = ?', 
      [name, originCity, currentCity, req.params.id]
    );
    res.status(204).send();
  })
);

router.delete(
  '/games/:id',
  asyncHandler(async (req, res) => {
    await pool.execute(
      'DELETE FROM games WHERE id = ?', 
      [req.params.id]
    );
    res.status(204).send();
  })
);

module.exports = router;

