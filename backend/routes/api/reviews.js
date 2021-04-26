const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Review, User } = require('../../db/models');

const { check } = require('express-validator');


let reviewsNotFound = () => {
    let err = new Error('Could not find any reviews');
    err.status = 404;
    return err;
}

// get reviews
router.get('/hosting/:id(\\d+)', asyncHandler(async (req, res, next) => {

    let hostingsId = parseInt(req.params.id, 10);
    let reviews = await Review.findAll({
        include: { model: User },
        where: {
            hostingsId
        }
    });
    if (reviews === null) {
        next(reviewsNotFound());
    } else {
        res.json({ reviews });
    }
}));


module.exports = router;
