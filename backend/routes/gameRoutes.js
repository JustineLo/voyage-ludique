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

module.exports = router;
