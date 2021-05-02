import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookings } from "../../store/bookings";
import DayPicker from 'react-day-picker';
import BookingForm from "./BookingForm";
import "react-datepicker/dist/react-datepicker.css";
import "./hosting.css";

function CalendarComponent() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector((state) => state.hosting[id]);
    const bookings = useSelector((state) => Object.values(state.bookings.listOfBookings));
    let hostingBooking;

    if (bookings.length > 0 && post) {
        hostingBooking = bookings.filter((booking) => {
            if (booking.hostings_id === post.id) {
                return booking;
            }
        });
    }

    let disabledDates = [];

    if (hostingBooking) {
        for (let i = 0; i < hostingBooking.length; i++) {
            let currentDate = hostingBooking[i];
            let startYear = Number(currentDate.start_date.slice(0, 4));
            let endYear = Number(currentDate.end_date.slice(0, 4));

            let startMonth = Number(currentDate.start_date.slice(5, 7)) - 1;
            let endMonth = Number(currentDate.end_date.slice(5, 7)) - 1;

            let startDay = Number(currentDate.start_date.slice(8, 10));
            let endDay = Number(currentDate.end_date.slice(8, 10));
            const after = new Date(startYear, startMonth, startDay);
            const before = new Date(endYear, endMonth, endDay);

            const booking = { after, before };
            disabledDates.push(booking);
        }
    }

    useEffect(() => {
        dispatch(getBookings(id));
    }, [dispatch, id]);

    return (
        <>
            <div className="calendar-div">
                <DayPicker disabledDays={disabledDates} />
                <BookingForm props={post.id} />
            </div>
        </>
    )
}

export default CalendarComponent;
