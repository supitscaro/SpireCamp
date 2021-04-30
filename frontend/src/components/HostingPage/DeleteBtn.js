import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/reviews";


function DeleteReview() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [deletedReview, setDeletedReview] = useState('');

    const deleteRev = (e) => {
        e.preventDefault();
        dispatch(deleteReview(deletedReview));
    }

    let deleteBtn;

    if (sessionUser) {
        deleteBtn = (
            <div onClick={deleteRev}>
                <button onClick={(e) => setDeletedReview()}>Delete Review!</button>
            </div>
        )
    }

    return (
        <>
            { deleteBtn}
        </>
    )
}

export default DeleteReview;
