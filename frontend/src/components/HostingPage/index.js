import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { oneHosting } from "../../store/hostings";
import { getBookings } from "../../store/bookings";
import { deleteReview } from "../../store/reviews";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './hosting.css';
import ReviewsForm from "../ReviewForm";
import DeleteBtn from "./DeleteBtn";

function HostingPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.hosting[id]);
    const reviews = useSelector((state) => state.hosting.reviews);
    const bookings = useSelector((state) => Object.values(state.bookings.listOfBookings));
    const sessionUser = useSelector(state => state.session.user);

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

            let startMonth = Number(currentDate.start_date.slice(5, 7));
            let endMonth = Number(currentDate.end_date.slice(5, 7));

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
        dispatch(oneHosting(id));
    }, [dispatch, id]);

    if (!post) return null;


    return (
        <div className="hosting-component">
            <div className="host">
                <img src={post.photoUrl} alt="" />
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
                        { sessionUser.id === review.user_id &&
                            <DeleteBtn />
                        }
                    </div>
                ))}
            </div>
            <DayPicker disabledDays={disabledDates} />
            <ReviewsForm />
        </div>
    )
}

export default HostingPage;
