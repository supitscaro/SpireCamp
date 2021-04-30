import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createBooking } from "../../store/bookings";
import DatePicker from "react-datepicker";

function BookingForm() {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    // const bookings = useSelector((state) => state.bookings);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const addReview = async (e) => {
        e.preventDefault();

        let booking = {
            start_date: startDate,
            end_date: endDate,
            user_id: sessionUser.id,
        };

        // console.log(review);

        dispatch(createBooking(booking));
    }

    return (
        <form className="" >
            <div className="">
                <div className="">
                    <label>
                        Start Date
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    </label>
                </div>
                <div className="">
                    <label>
                        End Date
                        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                    </label>
                </div>
                <button type="submit" onSubmit={addReview}>Book Your Spot</button>
            </div>
        </form>
    )
}

export default BookingForm;
