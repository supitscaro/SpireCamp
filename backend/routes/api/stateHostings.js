const express = require('express');
const asyncHandler = require('express-async-handler');

const { Hosting, User, State, Accommodations_List, Activities_List, Review } = require('../../db/models');

const router = express.Router();


router.get(
    '/hostings',
    asyncHandler(async (req, res, next) => {
        let id = parseInt(req.params.id, 10);
        let hosting = await Hosting.findAll({
            where: {
                states_id: State.id
            }
        });
        res.json(hosting);
    })
);

module.exports = router;
