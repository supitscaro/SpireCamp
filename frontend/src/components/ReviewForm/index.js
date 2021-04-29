import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteReview, addReviews } from "../../store/reviews";

function ReviewsForm() {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const reviewsList = useSelector((state) => state.reviews);

    const [title, setTitle] = useState('');
    const [newReview, setNewReview] = useState('');
    const [recc, setRecc] = useState(true);

    const addReview = async (e) => {
        e.preventDefault();

        let review = {
            title: title,
            review: newReview,
            user_id: sessionUser.id,
            recommended: recc
        };

        console.log(review);

        dispatch(addReviews(review));
    }

    return (
        <form className="" >
            <div className="">
                <div className="">
                    <label>
                        Title
                    <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="">
                    <label>
                        Review
                    <input
                            type="text"
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="">
                    <label>
                        💜
                    <input
                            type="radio"
                            value={recc}
                            onChange={(e) => setRecc(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="">
                    <label>
                        🤚🏼
                    <input
                            type="radio"
                            value={recc}
                            onChange={(e) => setRecc(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit" onSubmit={addReview}>Leave a review</button>
            </div>
        </form>
    )
}

export default ReviewsForm;
