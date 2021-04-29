import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteReview } from "../../store/reviews";

function ReviewsForm() {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [recc, setRecc] = useState(true);

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
                        Password
                    <input
                            type="text"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
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
                <button type="submit">Leave a review</button>
            </div>
        </form>
    )
}

export default ReviewsForm;
