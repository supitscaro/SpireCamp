const express = require('express');
const asyncHandler = require('express-async-handler');

const { Hosting, Accommodations_List } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    async(async (req, res, next) => {
        const accommodations = await Accommodations_List.findAll();

        return res.json(accommodations);
    })
);


module.exports = router;
