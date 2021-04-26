const express = require('express');
const asyncHandler = require('express-async-handler');

const { Hosting, User, State, Accommodations, Activities, Review } = require('../../db/models');
const { check } = require('express-validator');

const router = express.Router();

// get hosting post - an individual one
router.get(
    '/', // unsure of route if I want every post
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
    check("cost")
        .exists({ checkFalsy: true })
        .withMessage("Please provide the cost of stay.")
];

// create a hosting
router.get(
    '/create',
    asyncHandler(async (req, res, next) => {
        let host = Hosting.build();
        let activities = Activities.findAll();
        let accommodations = Accommodations.findAll();
        res.json({ host, activities, accommodations });
    })
);

// post host
router.post(
    '/create',
    hostingValidator,
    asyncHandler(async (req, res, next) => {
        let { name, description, locationDetails, state, cost } = req.body;
        let userId = res.locals.user.id;
        // let activities  // ?
        // let accommodations // ?
        let state = parseInt(state, 10);
        let host = Hosting.build({ name, description, locationDetails, state_id: state, cost });

    })
);


module.exports = router;
