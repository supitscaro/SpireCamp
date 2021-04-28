const express = require('express');
const asyncHandler = require('express-async-handler');

const { State } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const states = await State.findAll();

        return res.json(states);
    })
);

module.exports = router;
