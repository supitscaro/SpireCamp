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
    const bookings = useSelector((state) => state.bookings.listOfBookings[id]);
    console.log('bookings', bookings)

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
            {/* {console.log('post[id]', reviews)} */}
            <Calendar />
        </div>
    )
}

export default HostingPage;
