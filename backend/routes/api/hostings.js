const express = require('express');
const asyncHandler = require('express-async-handler');

const { Hosting, User, State, Activities_List, Reviews } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        let hostings = await Hosting.findAll({
            include: [State, Activities_List]
        });

        res.json({ hostings });
    })
);

module.exports = router;
