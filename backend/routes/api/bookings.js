const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Booking, User, Hosting } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        let bookings = await Booking.findAll({ attributes: ["id", "start_date", "end_date", "user_id", "hostings_id", "createdAt"] });
        // console.log('backend bookings', bookings);
        return res.json(bookings);
    })
);

router.post(
    '/hostings/:id',
    asyncHandler(async (req, res, next) => {
        const { start_date, end_date, hostings_id, user_id } = req.body;
        const newBooking = await Booking.create({ start_date, end_date, hostings_id, user_id });
        const booking = await Booking.findByPk(newBooking.id, { include: [User, Hosting] });
        return res.json(booking);
    })
);

router.delete(
    '/:id',
    asyncHandler(async (req, res, next) => {
        let { id } = req.params;
        let booking = await Review.findByPk(id);
        await booking.destroy();
        res.status(204).end();
    })
);

module.exports = router;
