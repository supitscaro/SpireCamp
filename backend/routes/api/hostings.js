const express = require('express');
const asyncHandler = require('express-async-handler');

const { Hosting, User, State, Accommodations, Activities, Review } = require('../../db/models');

const router = express.Router();

router.get(
    '/hosting',
    asyncHandler(async (req, res, next) => {
        let hostId = parseInt(req.params.id, 10);
        let hosting = await Hosting.findByPk(hostId,
            {
                include: [User, State, Accommodations, Activities]
            }
        );
        let reviews = await Review.findAll({
            where: {
                hostingsId: hostId
            },
            include: { model: User }
        });
        res.render('post', { hosting, reviews });
    })
)
