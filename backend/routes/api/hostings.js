const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');

const { Hosting, User, State, Activities_List, Review, Activity, Accommodation } = require('../../db/models');

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

let hostingValidator = [
    check('name')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Your hosting must have a name provided."),
    check('description')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("You must provide some description about the location."),
    check('locationDetails')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Please provide the name of the city where this hosting is located."),
    check("state")
        .exists({ checkFalsy: true })
        .withMessage("Please select a state."),
    check("activities")
        .exists({ checkFalsy: true })
        .withMessage("Please select activities."),
    check("accommodations")
        .exists({ checkFalsy: true })
        .withMessage("Please select accommodations."),
    check("cost")
        .exists({ checkFalsy: true })
        .withMessage("Please provide the cost of stay.")
];

router.get(
    '/create',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        let host = Hosting.build();
        let activities = await Activity.findAll();
        let accommodations = await Accommodation.findAll();
        res.json({ host, activities, accommodations });
    })
);

router.post(
    '/create',
    requireAuth,
    hostingValidator,
    asyncHandler(async (req, res, next) => {
        const { name, description, locationDetails, state, accommodations, activities, cost } = req.body;
        let stateId = parseInt(state, 10);
        let post = Hosting.build({ name, description, locationDetails, state: stateId, accommodations, activities, cost });

        res.json(post);
    })
);

router.delete(
    '/:id',
    requireAuth,
    asyncHandler(async (req, res, next) => {
        let id = parseInt(req.params.id, 10);
        let post = await Hosting.findByPk(id);
        await post.destroy();
    })
)

module.exports = router;
