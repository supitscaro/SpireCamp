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
                <div className="pic-div">
                    <img className="post-pic" src={post.photoUrl} alt="" />
                </div>
                <div className="cal">
                    <CalendarComponent />
                </div>
            </div>
            <div className="host">
                <div className="hosting-post-div">
                    <div className="spots-info">
                        <div className="post-title">{post.name}</div>
                        <div className="post-desc">{post.description}</div>
                        <div className="post-deets">{post.locationDetails}</div>
                    </div>
                    <div className="hoster-info">
                        <div className="host-name">Hosted By: {post.User.username}</div>
                        <div className="post-cost">Cost: 💲{post.cost}</div>
                    </div>
                </div>
                <div className="activities-accomm">
                    <div className="activities-comp">
                        <div className="activities-div">
                            <h2 className="act-div-title">Campsite Activities</h2>
                            {post.Activities.map((activity) => (
                                <div className="acts-div">
                                    <i className={`${activity.icon} activity-icon`} />
                                    <div className="activity-name">{activity.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="acc-comp">
                        <div className="accommodations-div">
                            <h2 className="acc-div-title">Accommodations</h2>
                            {post.Accommodations.map((accomm) => (
                                <div className="acts-div">
                                    <i className={`${accomm.icon} acc-icon`} />
                                    <div className="acc-name">{accomm.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews">
                {reviews.map((review) => (
                    <div>
                        <div className="review-comp">
                            <div className="review-title">{review.title}</div>
                            <div className="reviewer-name">By: {review.User.username}</div>
                            <div className="review">{review.review}</div>
                            <div className="rating">{review.recommended ? '💜 Recommended' : '🤚🏼 Not Recommended'}</div>
                        </div>
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
