const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const database = require('../db');

router.get(
  '/games',
  asyncHandler(async (req, res) => {
    const { data, error } = await database
      .from('games')
      .select('*');
    if (error) throw error;
    res.json(data);
  })
);

router.get(
  '/games/:id',
  asyncHandler(async (req, res) => {
    const { data, error } = await database
      .from('games')
      .select('*')
      .eq('id', req.params.id);
    if (error) throw error;
    if (data.length > 0) {
      res.json(data[0]);
    } else {
      res.status(404).send('Game not found');
    }
  })
);

router.post(
  '/games',
  asyncHandler(async (req, res) => {
    const { name, giver, originCity, currentCity, startDate, numberOfMoves } = req.body;
    const { data, error } = await database
      .from('games')
      .insert([{ name, giver, originCity, currentCity, startDate, numberOfMoves }])
    if (error) throw error;
    res.status(201).json(data[0]);
  })
);

router.put(
  '/games/:id',
  asyncHandler(async (req, res) => {
    const { name, originCity, currentCity } = req.body;
    const { data, error } = await database
      .from('games')
      .update({ name, originCity, currentCity })
      .eq('id', req.params.id)
    if (error) throw error;
    res.status(204).send();
  })
);

router.delete(
  '/games/:id',
  asyncHandler(async (req, res) => {
    const { data, error } = await database
      .from('games')
      .delete()
      .eq('id', req.params.id)
    if (error) throw error;
    res.status(204).send();
  })
);

module.exports = router;