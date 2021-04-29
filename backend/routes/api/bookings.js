const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Booking } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        let bookings = await Booking.findAll();
        return res.json(bookings);
    })
);
