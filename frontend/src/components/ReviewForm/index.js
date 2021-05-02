import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addReviews } from "../../store/reviews";
import "./review.css";

function ReviewsForm() {
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [newReview, setNewReview] = useState('');
    const [recc, setRecc] = useState(true);

    const addReview = async (e) => {
        e.preventDefault();

        let review = {
            title: title,
            review: newReview,
            hostings_id: id,
            user_id: sessionUser.id,
            recommended: recc
        };

        console.log(review);

        dispatch(addReviews(review));
    }

    return (
        <form className="review-form" onSubmit={addReview}>
            <div className="review-div">
                <div className="reviewform-title">
                    <label>
                        Title
                    <input
                            type="text"
                            value={title}
                            className="reviewtitle-input"
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="reviewform-title">
                    <label>
                        Review
                    <input
                            type="text"
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                            required
                            className="reviewtitle-input"
                        />
                    </label>
                </div>
                <div className="recommended-choice">
                    <label>
                        <input
                            type="radio"
                            value={recc}
                            onChange={(e) => setRecc(e.target.value)}
                            required
                            name="recc"
                        />
                        💜 Recommend
                    </label>
                </div>
                <div className="not-recommended">
                    <label>
                        <input
                            type="radio"
                            value={recc}
                            onChange={(e) => setRecc(e.target.value)}
                            required
                            name="recc"
                        />
                        🤚🏼 Don't Recommend
                    </label>
                </div>
                <button className="review-submit" type="submit">Leave a review</button>
            </div>
        </form>
    )
}

export default ReviewsForm;
