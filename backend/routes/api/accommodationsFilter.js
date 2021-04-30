const express = require('express');
const asyncHandler = require('express-async-handler');

const { Hosting, Accommodations_List } = require('../../db/models');

const router = express.Router();

router.get(
    '/:id',
    asyncHandler(async (req, res, next) => {
        let id = parseInt(req.params.id, 10);
        let hosting = await Hosting.findAll({
            include: {
                model: Accommodations_List,
                where: {
                    accommodations_id: id
                }
            },
        });
        res.json(hosting);
    })
);

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const accommodations = await Accommodations_List.findAll();

        return res.json(accommodations);
    })
);


module.exports = router;
