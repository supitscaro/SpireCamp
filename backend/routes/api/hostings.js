const express = require('express');
const asyncHandler = require('express-async-handler');

const { Hosting, User, State, Activities_List, Review } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        let hostings = await Hosting.findAll({
            include: [State, Activities_List]
        });

        res.json(hostings);
    })
);

router.get(
    '/:id', // unsure of route if I want every post
    asyncHandler(async (req, res, next) => {
        let hostId = parseInt(req.params.id, 10);
        let hosting = await Hosting.findByPk(hostId,
            {
                include: [User, State, Activities_List]
            }
        );
        let reviews = await Review.findAll({
            include: { model: User }
        });
        res.json({ hosting, reviews });
    })
);

module.exports = router;
