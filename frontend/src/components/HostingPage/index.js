import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { oneHosting } from "../../store/hostings";
import { getBookings } from "../../store/bookings";
import { getReviews } from "../../store/reviews";
import 'react-day-picker/lib/style.css';
import './hosting.css';
import ReviewsForm from "../ReviewForm";
import DeleteBtn from "./DeleteBtn";
import CalendarComponent from "./CalendarComponent";

function HostingPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.hosting[id]);
    const reviews = useSelector((state) => Object.values(state.reviews));
    const sessionUser = useSelector(state => state.session.user);
    console.log(reviews);

    useEffect(() => {
        dispatch(getBookings(id));
        dispatch(oneHosting(id));
        dispatch(getReviews(id));
    }, [dispatch, id]);

    if (!post) return null;


    return (
        <div className="hosting-page">
            <div className="hosting-component">
                <div className="host">
                    <img className="post-pic" src={post.photoUrl} alt="" />
                    <div className="post-title">{post.name}</div>
                    <div className="post-desc">{post.description}</div>
                    <div className="post-deets">{post.locationDetails}</div>
                    <div>{post.User.username}</div>
                </div>
                <div className="cal">
                    <CalendarComponent />
                </div>
            </div>
            <div className="reviews">
                {reviews.map((review) => (
                    <div>
                        <div>{review.title}</div>
                        <div>{review.review}</div>
                        <div>{review.recommended ? '💜' : '🤚🏼'}</div>
                        <div>{review.username}</div>
                        { sessionUser?.id === review.user_id &&
                            <DeleteBtn props={{ id, reviewId: review.id }} />
                        }
                    </div>
                ))}
                <ReviewsForm />
            </div>
        </div>
    )
}

export default HostingPage;
