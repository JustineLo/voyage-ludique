const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const pool = require('../db');

router.get('/moves', asyncHandler(async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM moves');
    res.json(rows);
}));
  
router.get('/moves/:id', asyncHandler(async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM moves WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
}));

router.get('/games/:id/moves', asyncHandler(async (req, res) => {
    const [rows, fields] = await pool.execute(
        'SELECT * FROM moves WHERE gameId = ? ORDER BY date DESC LIMIT 10',
        [req.params.id]
    );
    res.json(rows);
}));

router.get(
    '/latest',
    asyncHandler(async (req, res) => {
      const [rows] = await pool.execute(
        'SELECT * FROM moves ORDER BY date DESC LIMIT 10'
      );
      res.json(rows);
    })
);
  

router.post('/moves', asyncHandler(async (req, res) => {
    const { gameId, gameName, originCity, giver, currentCity, receiver, date, comment } = req.body;
    const [result] = await pool.execute(
        'INSERT INTO moves (gameId, gameName, originCity, giver, currentCity, receiver, date, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
        [gameId, gameName, originCity, giver, currentCity, receiver, date, comment]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
}));

router.put('/moves/:id', asyncHandler(async (req, res) => {
    const { gameId, originCity, giverName, receiverCity, receiverName, moveDate, comment } = req.body;
    await pool.execute(
        'UPDATE moves SET gameId = ?, originCity = ?, giverName = ?, receiverCity = ?, receiverName = ?, moveDate = ?, comment = ? WHERE id = ?',
        [gameId, originCity, giverName, receiverCity, receiverName, moveDate, comment, req.params.id]
    );
    res.status(200).json({ id: req.params.id, ...req.body });
    }));
    router.delete('/moves/:id', asyncHandler(async (req, res) => {
    await pool.execute('DELETE FROM moves WHERE id = ?', [req.params.id]);
    res.status(204).end();
}));

module.exports = router;