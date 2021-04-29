const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');

const { Review, User } = require('../../db/models');


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
//     asyncHandler(async (req, res, next) => {
//         let id = parseInt(req.params.id, 10);
//         let review = await Review.findByPk(id, {
//             include: { model: User }
//         });
//         res.json({ review });
//     })
// );

router.post(
    "/hostings/:id",
    requireAuth,
    asyncHandler(async function (req, res) {
        const { title, review, recommended } = req.body;
        const newReview = await Review.create({ user_id, title, review, recommended });
        console.log(newReview);
        const data = await Review.findByPk(newReview.id, { include: User });
        return res.json(data);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res, next) => {
        let id = parseInt(req.params.id, 10);
        let review = await Review.findByPk(id);
        await review.destroy();
        res.status(204).end();
    })
)

module.exports = router;
