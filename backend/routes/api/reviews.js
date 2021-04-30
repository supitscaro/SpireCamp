const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');

const { Review, User, Hosting } = require('../../db/models');


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

router.get(
    '/hostings/:id',
    asyncHandler(async (req, res, next) => {
        let reviews = await Review.findAll({
            where: {
                hostings_id: req.params.id
            }
        });
        res.json(reviews);
    })
);

router.post(
    "/hostings/:id",
    // requireAuth,
    asyncHandler(async function (req, res) {
        const { id } = req.params;
        const { title, review, recommended, hostings_id, user_id } = req.body;
        const newReview = await Review.create({ title, review, recommended, hostings_id: id, user_id });
        const data = await Review.findByPk(newReview.id, { include: User });
        return res.json(data);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res, next) => {
        let { id } = req.params;
        let review = await Review.destroy({
            where: {
                id
            }
        });
        res.status(204).end();
    })
)

module.exports = router;
