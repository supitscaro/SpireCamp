import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../store/bookings";
import DatePicker from "react-datepicker";

function BookingForm({ props }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const addBooking = async (e) => {
        e.preventDefault();

        let booking = {
            start_date: startDate,
            end_date: endDate,
            user_id: sessionUser.id,
            hostings_id: props
        };

        dispatch(createBooking(booking));
    }

    return (
        <form className="" onSubmit={addBooking}>
            <div className="booking-form">
                <div className="booking-start">
                    <label className="start-label">
                        Start Date
                        <DatePicker className="date-picker" selected={startDate} onChange={date => setStartDate(date)} />
                    </label>
                </div>
                <div className="booking-end">
                    <label className="end-label">
                        End Date
                        <DatePicker className="date-picker" selected={endDate} onChange={date => setEndDate(date)} />
                    </label>
                </div>
                <button className="booking-btn" type="submit" onSubmit={(e) => addBooking(e)}>Book Your Spot</button>
            </div>
        </form>
    )
}

export default BookingForm;
