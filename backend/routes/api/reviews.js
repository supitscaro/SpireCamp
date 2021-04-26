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

// get all reviews
router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        let reviews = await Review.findAll({
            include: { model: User },
        });
        res.json({ reviews });
    })
);

// router.get(
//     '/:id',

// )


module.exports = router;
