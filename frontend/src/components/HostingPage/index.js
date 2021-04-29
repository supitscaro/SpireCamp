import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { oneHosting } from "../../store/hostings";
import { getBookings } from "../../store/bookings";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './hosting.css';

function HostingPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.hosting[id]);
    const reviews = useSelector((state) => state.hosting.reviews);
    const bookings = useSelector((state) => Object.values(state.bookings?.listOfBookings));

    let hostingBooking;
    bookings.forEach((booking) => {
        if (booking.hostings_id === post.id) {
            hostingBooking = booking;
        }
        return hostingBooking;
    });

    console.log(hostingBooking);

    let startYear = Number(hostingBooking.start_date.slice(0, 4));
    let endYear = Number(hostingBooking.end_date.slice(0, 4));

    let startMonth = Number(hostingBooking.start_date.slice(5, 7));
    let endMonth = Number(hostingBooking.end_date.slice(5, 7));

    let startDay = Number(hostingBooking.start_date.slice(8, 10));
    let endDay = Number(hostingBooking.end_date.slice(8, 10));

    console.log(startDay);

    const disabledDates = [
        new Date(startYear, startMonth, startDay),
        new Date(endYear, endMonth, endDay)
    ]

    // activeStartDate => new Date(2017, 0, 1)


    useEffect(() => {
        dispatch(getBookings(id));
        dispatch(oneHosting(id));
    }, [dispatch, id]);

    if (!post) return null;

    return (
        <div className="hosting-component">
            <div className="host">
                <div className="post-title">{post.name}</div>
                <div className="post-desc">{post.description}</div>
                <div className="post-deets">{post.locationDetails}</div>
                <div>{post.User.username}</div>
            </div>
            <div className="reviews">
                {reviews.map((review) => (
                    <div>
                        <div>{review.title}</div>
                        <div>{review.review}</div>
                        <div>{review.recommended ? '💜' : '🤚🏼'}</div>
                        <div>{review.User.username}</div>
                    </div>
                ))}
            </div>
            <Calendar tileDisabled={(date) => disabledDates.some(disabledDate =>
                date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()
            )} />
        </div>
    )
}

export default HostingPage;
