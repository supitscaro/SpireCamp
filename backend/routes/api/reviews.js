const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models');

const { check } = require('express-validator');

//
router.get('/hosting/:id(\\d+)', asyncHandler(async (req, res, next) => {

    let hostings_id = parseInt(req.params.id, 10);
    let reviews = await Review.findAll({
        include: { model: User },
        where: {
            hostings_id
        }
    });
    if (reviews === null) {
        next(commentsNotFound());
    } else {
        res.json({ reviews });
    }
}));


module.exports = router;
