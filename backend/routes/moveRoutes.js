const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const database = require('../db');

router.get(
    '/moves',
    asyncHandler(async (req, res) => {
        const { data, error } = await database
        .from('moves')
        .select('*');
        if (error) throw error;
        res.json(data);
    })
);

router.get(
    '/moves/:id',
    asyncHandler(async (req, res) => {
        const { data, error } = await database
        .from('moves')
        .select('*')
        .eq('id', req.params.id);
        if (error) throw error;
        res.json(data[0]);
    })
);

router.get(
    '/games/:id/moves',
    asyncHandler(async (req, res) => {
        const { data, error } = await database
        .from('moves')
        .select('*')
        .eq('gameId', req.params.id)
        .order('date', { ascending: false })
        .limit(10);
        if (error) throw error;
        res.json(data);
    })
);

router.get(
    '/latest',
    asyncHandler(async (req, res) => {
        const { data, error } = await database
        .from('moves')
        .select('*')
        .order('date', { ascending: false })
        .limit(10);
        if (error) throw error;
        res.json(data);
    })
);

router.post(
    '/moves',
    asyncHandler(async (req, res) => {
        const { gameId, gameName, originCity, giver, currentCity, receiver, date, comment } = req.body;
        const { data, error } = await database
        .from('moves')
        .insert([{ gameId, gameName, originCity, giver, currentCity, receiver, date, comment }]);
        res.status(201).send("Data has been added!");
    })
);

router.put(
    '/moves/:id',
    asyncHandler(async (req, res) => {
        const { gameId, originCity, giverName, receiverCity, receiverName, moveDate, comment } = req.body;
        const { data, error } = await database
        .from('moves')
        .update({ gameId, originCity, giverName, receiverCity, receiverName, moveDate, comment })
        .eq('id', req.params.id);
        if (error) throw error;
        res.status(200).json(data[0]);
    })
);

router.delete(
    '/moves/:id',
    asyncHandler(async (req, res) => {
        const { data, error } = await database
        .from('moves')
        .delete()
        .eq('id', req.params.id);
        if (error) throw error;
        res.status(204).end();
    })
);

module.exports = router;
