const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Booking } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        let bookings = await Booking.findAll({ attributes: ["id", "start_date", "end_date", "user_id", "hostings_id", "createdAt"] });
        console.log('backend bookings', bookings);
        return res.json(bookings);
    })
);


module.exports = router;
