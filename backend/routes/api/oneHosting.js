const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');

const { Hosting, User, State, Accommodations_List, Activities_List, Review } = require('../../db/models');
const { check } = require('express-validator');

const router = express.Router();

// get hosting post - individual one
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
    check("cost")
        .exists({ checkFalsy: true })
        .withMessage("Please provide the cost of stay.")
];

// create a hosting
// router.get(
//     '/create',
//     // requireAuth,
//     asyncHandler(async (req, res, next) => {
//         let host = Hosting.build();
//         let activities = Activities_List.findAll();
//         // let accommodations = Accommodations_List.findAll();
//         res.json({ host, activities });
//     })
// );

// post host
// router.post(
//     '/create',
//     hostingValidator,
//     asyncHandler(async (req, res, next) => {
//         let { name, description, locationDetails, state, cost } = req.body;
//         let userId = res.locals.user.id;
//         // let activities  // ?
//         // let accommodations // ?
//         let states = parseInt(state, 10);
//         let host = Hosting.build({ name, description, locationDetails, state_id: states, cost });

//     })
// );


module.exports = router;

// fetch('/api/users', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "XSRF-TOKEN": "jd0T8Ozi-7gbN7_JTQUlglJmfcVRW-MWtDvs"
//     },
//     body: JSON.stringify({
//         email: 'spidey@spider.man',
//         username: 'Spidey',
//         password: 'password'
//     })
// }).then(res => res.json()).then(data => console.log(data));
